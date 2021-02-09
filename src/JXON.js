// See https://developer.mozilla.org/en-US/docs/Archive/JXON#JXON_reverse_algorithms
// Appendix: a complete, bidirectional, JXON library

const sValProp = "keyValue";
const sAttrProp = "keyAttributes";
const sAttrsPref = "@"; /* you can customize these values */
const aCache = [];
const rIsNull = /^\s*$/;
const rIsBool = /^(?:true|false)$/i;

/**
 * JXON (lossless JavaScript XML Object Notation) 
 * defines the representation of JavaScript Objects using XML.<br/>
 * It converts Javascript Objects to XML and vice-versa.
 * 
 * @see {@link https://developer.mozilla.org/en-US/docs/Archive/JXON|Mozilla Developer Network: JXON}
 */
export default class JXON {

  parseText(sValue) {
    if (rIsNull.test(sValue)) { return null; }
    if (rIsBool.test(sValue)) { return sValue.toLowerCase() === "true"; }
    if (isFinite(sValue)) { return parseFloat(sValue); }
    if (isFinite(Date.parse(sValue))) { return new Date(sValue); }
    return sValue;
  }

  objectify(vVal) {
    return vVal === null ? new EmptyTree() : vVal instanceof Object ? vVal : new vVal.constructor(vVal);
  }

  createObjTree(oParentNode, nVerb, bFreeze, bNesteAttr) {

    const nLevelStart = aCache.length;
    const bChildren = oParentNode.hasChildNodes();
    const bAttributes = oParentNode.hasAttributes && oParentNode.hasAttributes();
    const bHighVerb = Boolean(nVerb & 2);

    let
      sProp, vContent, nLength = 0, sCollectedTxt = "",
      vResult = bHighVerb ? {} : /* put here the default value for empty nodes: */ true;

    if (bChildren) {
      for (let oNode, nItem = 0; nItem < oParentNode.childNodes.length; nItem++) {
        oNode = oParentNode.childNodes.item(nItem);
        if (oNode.nodeType === 4) { sCollectedTxt += oNode.nodeValue; } /* nodeType is "CDATASection" (4) */
        else if (oNode.nodeType === 3) { sCollectedTxt += oNode.nodeValue.trim(); } /* nodeType is "Text" (3) */
        else if (oNode.nodeType === 1 && !oNode.prefix) { aCache.push(oNode); } /* nodeType is "Element" (1) */
      }
    }

    const nLevelEnd = aCache.length, vBuiltVal = this.parseText(sCollectedTxt);

    if (!bHighVerb && (bChildren || bAttributes)) { vResult = nVerb === 0 ? objectify(vBuiltVal) : {}; }

    for (let nElId = nLevelStart; nElId < nLevelEnd; nElId++) {
      sProp = aCache[nElId].nodeName.toLowerCase();
      vContent = this.createObjTree(aCache[nElId], nVerb, bFreeze, bNesteAttr);
      if (vResult.hasOwnProperty(sProp)) {
        if (vResult[sProp].constructor !== Array) { vResult[sProp] = [vResult[sProp]]; }
        vResult[sProp].push(vContent);
      } else {
        vResult[sProp] = vContent;
        nLength++;
      }
    }

    if (bAttributes) {
      const
        nAttrLen = oParentNode.attributes.length,
        sAPrefix = bNesteAttr ? "" : sAttrsPref, oAttrParent = bNesteAttr ? {} : vResult;

      for (var oAttrib, nAttrib = 0; nAttrib < nAttrLen; nLength++ , nAttrib++) {
        oAttrib = oParentNode.attributes.item(nAttrib);
        oAttrParent[sAPrefix + oAttrib.name.toLowerCase()] = this.parseText(oAttrib.value.trim());
      }

      if (bNesteAttr) {
        if (bFreeze) { Object.freeze(oAttrParent); }
        vResult[sAttrProp] = oAttrParent;
        nLength -= nAttrLen - 1;
      }

    }

    if (nVerb === 3 || (nVerb === 2 || nVerb === 1 && nLength > 0) && sCollectedTxt) {
      vResult[sValProp] = vBuiltVal;
    } else if (!bHighVerb && nLength === 0 && sCollectedTxt) {
      vResult = vBuiltVal;
    }

    if (bFreeze && (bHighVerb || nLength > 0)) { Object.freeze(vResult); }

    aCache.length = nLevelStart;

    return vResult;
  }

  loadObjTree(oXMLDoc, oParentEl, oParentObj) {

    let vValue, oChild;

    if (oParentObj.constructor === String || oParentObj.constructor === Number || oParentObj.constructor === Boolean) {
      oParentEl.appendChild(oXMLDoc.createTextNode(oParentObj.toString())); /* verbosity level is 0 or 1 */
      if (oParentObj === oParentObj.valueOf()) { return; }
    } else if (oParentObj.constructor === Date) {
      oParentEl.appendChild(oXMLDoc.createTextNode(oParentObj.toGMTString()));
    }

    for (let sName in oParentObj) {
      vValue = oParentObj[sName];
      if (isFinite(sName) || vValue instanceof Function) { continue; } /* verbosity level is 0 */
      if (sName === sValProp) {
        if (vValue !== null && vValue !== true) { oParentEl.appendChild(oXMLDoc.createTextNode(vValue.constructor === Date ? vValue.toGMTString() : String(vValue))); }
      } else if (sName === sAttrProp) { /* verbosity level is 3 */
        for (let sAttrib in vValue) { oParentEl.setAttribute(sAttrib, vValue[sAttrib]); }
      } else if (sName.charAt(0) === sAttrsPref) {
        oParentEl.setAttribute(sName.slice(1), vValue);
      } else if (vValue.constructor === Array) {
        for (let nItem = 0; nItem < vValue.length; nItem++) {
          oChild = oXMLDoc.createElement(sName);
          this.loadObjTree(oXMLDoc, oChild, vValue[nItem]);
          oParentEl.appendChild(oChild);
        }
      } else {
        oChild = oXMLDoc.createElement(sName);
        if (vValue instanceof Object) {
          this.loadObjTree(oXMLDoc, oChild, vValue);
        } else if (vValue !== null && vValue !== true) {
          oChild.appendChild(oXMLDoc.createTextNode(vValue.toString()));
        }
        oParentEl.appendChild(oChild);
      }
    }

  }

  /**
   * Returns a JavaScript Object based on the given XML Document.
   * @param {document} oXMLParent - The XML document to be converted into JSON format
   * @param {*} nVerbosity 
   * @param {*} bFreeze 
   * @param {*} bNesteAttributes 
   */
  build(oXMLParent, nVerbosity /* optional */, bFreeze /* optional */, bNesteAttributes /* optional */) {
    const nVerbMask = arguments.length > 1 && typeof nVerbosity === "number" ? nVerbosity & 3 : /* put here the default verbosity level: */ 1;
    return this.createObjTree(oXMLParent, nVerbMask, bFreeze || false, arguments.length > 3 ? bNesteAttributes : nVerbMask === 3);
  }

  /**
   * Returns an XML Document based on the given JavasScript Object.
   * @param {*} oObjTree 
   * @param {*} sNamespaceURI 
   * @param {*} sQualifiedName 
   * @param {*} oDocumentType 
   */
  unbuild(oObjTree, sNamespaceURI /* optional */, sQualifiedName /* optional */, oDocumentType /* optional */) {
    const oNewDoc = document.implementation.createDocument(sNamespaceURI || null, sQualifiedName || "", oDocumentType || null);
    this.loadObjTree(oNewDoc, oNewDoc, oObjTree);
    return oNewDoc;
  }

}

// --------------------------------------------------------------------------

class EmptyTree {

  toString() {
    return "null";
  }

  valueOf() {
    return null;
  }
}

