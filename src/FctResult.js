import JXON from "./JXON.js";

const NS_FCT = 'http://openlinksw.com/services/facets/1.0/'
const NS_FCT_PREFIX = 'fct:'

/**
 * Represents a Facet query result.
 */
export class FctResult {

  /** 
   * @param {string} resultXml - XML query resultset returned by the Facet service.
   */
  constructor(resultXml) {
    this._resultXml = resultXml;

    let domParser = new DOMParser();
    let jxon = new JXON();
    let resultXmlNoNamespace = FctResult.stripNamespace(resultXml).replace(/\n/g, '').trim();
    let parsedXml = domParser.parseFromString(resultXmlNoNamespace, "text/xml");
    this._resultJson = jxon.build(parsedXml);
  }

  /**
   * @summary
   * The SPARQL query used to generate the resultset.
   */
  get sparql() {
    return this._resultJson.facets.sparql;
  }

  /**
   * @summary
   * The JSON representation of the Facet query result.
   */
  get json() {
    return this._resultJson;
  }

  /**
   * @summary
   * The XML representation of the Facet query result.
   */
  get xml() {
    return this._resultXml;
  }

  // -- Private methods -----------------------------------------------------

  /**
   * Strips the fct: namespace from the Facet query result XML to allow parsing by DOMParser.
   * @private
   */
  static stripNamespace(sourceXml) {
    let noNamespaceXml;
    noNamespaceXml = sourceXml.replace(new RegExp(NS_FCT_PREFIX, 'g'), '');
    noNamespaceXml = noNamespaceXml.replace(new RegExp(` xmlns:fct="${NS_FCT}"`, 'g'), '');
    return noNamespaceXml;
  }
}