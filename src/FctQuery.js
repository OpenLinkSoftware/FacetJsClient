import $ from "./jquery.module.js";
import { FctResult } from '../src/FctResult.js';

// Fixed defaults
const  FCT_QRY_DFLT_VIEW_TYPE = "text-d";

// Configurable defaults
// TO DO
// - Ensure FCT_QRY_AJAX_TIMEOUT is greater than the 
//   the timeout specified in the query body.
export let FCT_QRY_AJAX_TIMEOUT = 60000; // milliseconds
export let FCT_QRY_DFLT_VIEW_LIMIT = 50;
// export let FCT_QRY_DFLT_SVC_ENDPOINT = 'http://localhost:8896/fct/service';
export let FCT_QRY_DFLT_SVC_ENDPOINT = 'http://linkeddata.uriburner.com/fct/service';

// export let DESCRIBE_DFLT_SVC_ENDPOINT = 'http://localhost:8896/describe/';
export let DESCRIBE_DFLT_SVC_ENDPOINT = 'http://linkeddata.uriburner.com/describe/';

// TO DO:
// Look for default overrides set through a config.js file.
// FCT_QRY_DFLT_VIEW_LIMIT = xxx
// FCT_QRY_AJAX_TIMEOUT = xxx
// FCT_QRY_DFLT_SVC_ENDPOINT = xxx
// DESCRIBE_DFLT_SVC_ENDPOINT = xxx

const ID_QUERY = "0";
const ID_TEXT = "1";
const ID_VIEW = "2";

/**
 * Represents a Facet query.
 */
export class FctQuery {

  /**
   * Class constant
   */ 
  static get FCT_QRY_DFLT_VIEW_LIMIT() {
    return FCT_QRY_DFLT_VIEW_LIMIT;
  }

  /**
   * Class constant
   */ 
  static get FCT_QRY_DFLT_VIEW_TYPE() {
    return FCT_QRY_DFLT_VIEW_TYPE;
  }

  /**
   * Class constant
   */
  static get FCT_QRY_DFLT_SVC_ENDPOINT() {
    return FCT_QRY_DFLT_SVC_ENDPOINT;
  }

  /**
   * Class constant
   */
  static get DESCRIBE_DFLT_SVC_ENDPOINT() {
    return DESCRIBE_DFLT_SVC_ENDPOINT;
  }

  /** 
   * @param {string} [sourceXml]
   */
  constructor(sourceXml = null) {
    if (!sourceXml)
    {
      // Create a skeleton XML document
      this._root = $('<XMLDocument />');
      let $query = this._root.append('<query/>').find('query');
      $query.attr('xmlns', 'http://openlinksw.com/services/facets/1.0');
      $query.append('<view/>');
      $query.find('view')
        .attr('type', `${FCT_QRY_DFLT_VIEW_TYPE}`)
        .attr('limit', `${FCT_QRY_DFLT_VIEW_LIMIT}`)
        .attr('offset', '0');
    }
    else
    {
      let xml = sourceXml.trim();
      let match = xml.match(/^<\?xml.+\?>/i);
      if (match)
        xml = xml.substring(match[0].length).trimStart();
      this._root = $(`<XMLDocument>${xml}</XMLDocument>`);
    }

    this._fctSvcEndpoint = null;
  }

  /** 
   * Returns the XML which will form the HTTP request body of the Facet query to be executed.
   * 
   * @returns {string} The XML representing the Facet query described by this FctQuery instance. 
   */
  toXml() {
    let xml = '<?xml version="1.0"?>';
    xml += this._root.find('query').prop('outerHTML');
    return xml;
  }

  /** 
   * Returns the Facet service endpoint being used for Facet queries by this FctQuery instance.
   * 
   * @returns {url} A Facet service endpoint URL
   */
  getServiceEndpoint() {
    return this._fctSvcEndpoint;
  }

  /** 
   * Sets the Facet service endpoint to use for Facet queries by this FctQuery instance.
   * 
   * @param {string} fctSvcUrl - A Facet service endpoint URL
   */
  setServiceEndpoint(fctSvcUrl) {
    // TO DO: Check fctSvcUrl is a URL
    this._fctSvcEndpoint = fctSvcUrl;
  }

  /** */
  getQueryGraph() {
    return this._root.find('query').attr('graph');
  }

  /** */
  setQueryGraph(graphUri) {
    // TO DO: Check graphUri is a URI
    this._root.find('query').attr('graph', graphUri);
  }

  /** */
  removeQueryGraph() {
    this._root.find('query').removeAttr('graph');
  }

  /** */
  getQueryTimeout() {
    return this._root.find('query').attr('timeout');
  }

  /** */
  setQueryTimeout(no_of_msec) {
    // TO DO: Check no_of_msec is a positive integer
    this._root.find('query').attr('timeout', no_of_msec);
  }

  /** */
  removeQueryTimeout() {
    this._root.find('query').removeAttr('timeout');
  }

  /** */
  getInferenceContext() {
    return this._root.find('query').attr('inference');
  }

  /** */
  setInferenceContext(rdfsRuleSetName) {
    // TO DO: Check rdfsRuleSetName is a non-empty string
    this._root.find('query').attr('inference', rdfsRuleSetName);
  }

  /** */
  removeInferenceContext() {
    this._root.find('query').removeAttr('inference');
  }

  /** */
  getSameAs() {
    let sameAs = this._root.find('query').attr('same-as');
    let fSameAs;
    switch (sameAs) {
      case "yes":
        fSameAs = true;
        break;
      case "no":
        fSameAs = false;
        break;
      default:
        fSameAs = null;
    }
    return fSameAs
  }

  /** */
  setSameAs(boolFlag) {
    if (typeof boolFlag != 'boolean')
      throw new Error('arg boolFlag must be boolean');
    let yesNo = boolFlag ? 'yes' : 'no'
    this._root.find('query').attr('same-as', yesNo);
  }

  /** */
  removeSameAs() {
    this._root.find('query').removeAttr('same-as');
  }

  /** */
  getQueryElement() {
    // Allows a client to do their own querying of the Facet query XML.
    // Also used for testing.
    return this._root.find('query');
  }

  /** 
   * The text to query on.
   * @type {string} 
   */
  get queryText() {
    return this._root.find('query text').text();
  }

  set queryText(str) {
    // It's assumed that Facet XML allows only a single <text> element
    // and this must be a direct child of <query>.
    if (!str || str.length === 0)
      return;
    let $query = this._root.find('query');
    if ($query.length === 0)
      throw Error('query element missing');
    if ($query.find('text').length > 0) {
      $query.find('text').remove();
    }
    $query.append('<text/>');
    $query.find('text').text(str);
  }

  /** */
  get queryTextProperty() {
    return this._root.find('query text').attr('property');
  }

  /** */
  set queryTextProperty(propertyIri) {
    // TO DO: Check propertyIri is an IRI
    this._root.find('query text').attr('property', propertyIri);
  }

  /** */
  removeQueryTextProperty() {
    this._root.find('query text').removeAttr('property');
  }

  /** */
  removeQueryText() {
    // TO DO: return necessary?
    return this._root.find('query text').remove();
  }

  /** 
   * Removes a filter from the Facet XML.
   * @param {integer} filterId - A 0-based ID identifying the filter.
   */
  removeQueryFilter(filterId) {
    let rFilterDesc = this.queryFilterDescriptors();
    if (filterId < 0 || filterId >= rFilterDesc.length)
      throw new Error(`filterId (${filterId}) out of range`);
    const limit = this.getViewLimit();
    let $nodeToRemove = rFilterDesc[filterId].$node;
    $nodeToRemove.remove();
    // If the removed node contained the view element, a new view element
    // must be created at the top level because this element must always exist.
    if (this._root.find('view').length === 0) {
      let $replacementView = $(`<view type="${FctQuery.FCT_QRY_DFLT_VIEW_TYPE}" limit="${limit}" offset="0"/>`);
      this._root.find('query').append($replacementView);
    }
  }

  /** 
   * Returns the current limit on the number of rows returned by a query.
   * A limit of 0 indicates no limit. 
   */
  getViewLimit() {
    let limit = parseInt(this._root.find('view').attr('limit'));
    if (Number.isNaN(limit)) // limit attribute is not present, i.e. no limit
      limit = 0;
    return limit;
  }

  /** 
   * Sets a limit on the number of rows returned by a query.
   * A limit of 0 indicates no limit. 
   */
  setViewLimit(limit) {
    if (typeof limit !== 'number' || !Number.isInteger(limit) || limit < 0)
      throw new Error ('limit must be a positive integer');
    if (limit === 0)
      this._root.find('view').removeAttr('limit');
    else
      this._root.find('view').attr('limit', limit);
  }

  /** */
  getViewOffset() {
    return parseInt(this._root.find('view').attr('offset'));
  }

  /** */
  setViewOffset(offset) {
    // TO DO: Check offset is positive int
    this._root.find('view').attr('offset', offset);
  }

  /** */
  getViewType() {
    return this._root.find('view').attr('type');
  }

  /**
   * @summary
   * Returns the text of a Facet &lt;value&gt; element.
   * 
   * @param {object} $valueElement - A JQuery object identifying the <value> element.
   * @returns {string}
   * 
   * @description
   * The returned string may be an RDF literal or an IRI. 
   * 
   * A literal may have an accompanying datatype (e.g. ^^&lt;int&gt;) or a language tag (e.g. @fr),
   * depending on the <value> element's @datatype or @lang attribute value.
   * 
   * IRIs are returned wrapped by angle brackets.
   * 
   * An IRI value is indicated by the presence of a "^^&lt;uri&gt;" type specifier attached to the
   * &lt;value&gt; element's contents, or by a @datatype attribute value of "uri", "url" or "iri".
   * 
   * The text of the &lt;value&gt; element is specified either as the content of the element, or
   * in a @val attribute with an empty element.
   */
  getValueAsTurtle($valueElement) {
    // Equivalent of /fct PL routine fct_literal()
    let dataType = $valueElement.attr('datatype');
    let lang = $valueElement.attr('lang');
    let val = $valueElement.attr('val');
    let value;
    let escapeLiteral = str => str.replace(/"/g, '\\"');

    if (val === undefined)
      val = $valueElement.text();

    if (lang) {
      value = `"""${escapeLiteral(val)}"""@${lang}`;
    }
    else if (dataType === 'http://www.openlinksw.com/schemas/facets/dtp/plainstring') {
      value = `"""${escapeLiteral(val)}"""`;
    }
    else if (val.endsWith('^^<uri>')) {
      let match = val.match(/(.*)\^{2}<uri>/);
      if (match && match[1])
        value = `<${match[1]}>`;
    }
    else if (['uri', 'url', 'iri'].includes(dataType)) {
      value = `<${val}>`;
    }
    else if (dataType === undefined || dataType === '') {
      value = `"${val}"`;
    }
    else if (
      dataType.endsWith('int') || dataType.endsWith('integer') ||
      dataType.endsWith('float') || dataType.endsWith('double')
      ) {
      value = val;
    }
    else {
      value = `"${val}"^^<${dataType}>`;
    }

    return value;
  }

  /**
   * @summary
   * Returns the index of the implicit subject node query variable which
   * has the current focus in the Facet UI.
   * 
   * @returns {number}
   * 
   * @description
   * Returns the index n of the effective subject node sn of the current view.
   * e.g. n = 1, 2 ... n identifies subject nodes s1, s2 ... sn
   * 
   * A &lt;query&gt;, &lt;property&gt; or &lt;property-of&gt; element equates to a subject-arc
   * pair:
   *   sn --(query)-->, sn --(property)--> or sn --(property-of)--> 
   * in the 'metagraph' described by the Facet input XML.
   * 
   * The single &lt;view&gt; element allowed in the input XML can be a child of
   * &lt;query&gt;, &lt;property&gt; or &lt;property-of&gt;. The position of the &lt;view&gt; element
   * implicitly identifies the sn should have the current focus in the Facet UI
   * when adding or removing filters. The sn appear in the SPARQL corresponding
   * to the input XML as subject node variables, ?s1, ?s2 etc.
   * 
   * The position of the &lt;view&gt; element also specifies which sn is presented in 
   * the result set by adjusting the select list of the query described by the XML. 
   * The result set can serve as a pick list for setting filters on sn to further 
   * refine the search for the set of entities identified by s1.
   * 
   * Each &lt;query&gt;, &lt;property&gt; or &lt;property-of&gt; element implicitly introduces
   * a new sn. We can identifiy the sn (or rather n) which the &lt;view&gt; element 
   * identifies as having the current focus by counting the occurrences of 
   * these elements until we reach one of them which has &lt;view&gt; as a child.
   */
  getViewSubjectIndex() {
    // Equivalent to /fct PL routine fct_view_pos() // TO DO: Remove
    let indx = 0;
    let $e = this._root.find('query, property, property-of');
    $e.each((index, element) => {
      if ($(element).children('view').length) {
        indx = index + 1;
        return false;
      }
      return true;  
    });
    return indx;
  }

  /**
   * Moves the &lt;view&gt; element in the Facet input XML to change the
   * current focus in the Facet UI to the implicit subject node
   * query variable which has the given index.
   * @param {number} index - Index (1 based) of subject node to receive the focus.
   */
  setViewSubjectIndex(index) {
    let $view = this._root.find('view');
    if ($view.length == 0)
      throw new Error('The Facet XML does not include a <view> elenent.');
    $view = $view[0];
    let $potentialParents = this._root.find('query, property, property-of');
    const maxSubjectIndex = $potentialParents.length;
    if (index < 1 || index > $potentialParents.length)
      throw new Error(`Subject index (${index}) out of range (1..${maxSubjectIndex}).`);
    $potentialParents[index - 1].append($view); // Moves (not clones) the view element
  }

  /** */
  setViewType(type) {
    // TO DO: Check the type belongs to the allowed set of values.
    // type ::= properties | properties-in | classes | text | text-d |
    //          list | list-count | alphabet | geo | describe |
    //          years | months | weeks 
    //
    // The existing offset and limit attributes (initialized by the constructor) should be unchanged.
    this._root.find('query view').attr('type', type);
  }

  /**
   * Executes the Facet query described by the FctQuery instance.
   * 
   * @returns {Promise} A FctResult instance containing the query result or an Error.
   */
  execute() {
    /* Example usage in an event handler ...
    $('button').on('click', function() {
      fctQuery.execute()      
       .then(fctResult => {
         ... display the query result ...
       })
       .catch(err => {
         $('.fct_qry_status')
           .text('The Facet query failed: ' + err.message)
           .addClass('error');
       })
    })
    */
    console.log('FctQuery#execute: input XML: ', this.toXml());
    return new Promise((resolve, reject) => {
      $.ajax({
        url: this._fctSvcEndpoint,
        data: this.toXml(),
        type: 'POST',
        contentType: 'text/xml',
        dataType: 'xml', 
        timeout: FCT_QRY_AJAX_TIMEOUT,
        success: successHndlr,
        error: errorHndlr,
      });
      
      function successHndlr(data, textStatus, jqXHR) {
        // data is an XMLDocument.
        let s = new XMLSerializer();
        let xmlStr = s.serializeToString(data);
        resolve(new FctResult(xmlStr));
      };

      function errorHndlr(jqXHR, textStatus, errorThrown) {
        let status = textStatus || 'unknown';
        let httpStatus = errorThrown || 'unknown';
        let msg = `Ajax request failed. Status: ${status}, HTTP Status: ${httpStatus}`;
        reject(new Error(msg)); 
      };
    });
  }

  /**
   * 
   */
  queryDescription_describeChildNodes(opt) {
    // Equivalent of /fct PL routine fct_query_info_1.
    let $e = $(opt.$currentNode).children();
    for (let i = 0; i < $e.length; i++)
    {
      let newOpt = {
        $currentNode: $($e[i]),
        level: opt.level + 1
      };

      this.queryDescription_describeNode({...opt, ...newOpt});
    }
  }

  /**
   * Returns a SPARQL-like description of a particular node in the Facet XML.
   * @returns {string}
   */
  queryDescription_describeNode(opt) {
    // Equivalent to /fct PL routine fct_query_info.
    
    let console_indent = " ".repeat(opt.level * 4);
    let nodeName = opt.$currentNode.get(0).nodeName.toLowerCase();

    /*
    console.log(console_indent, "---- Node -------------")
    console.log(console_indent, `#queryDescription_describeNode: <${nodeName}>`);
    console.log(console_indent, '#queryDescription_describeNode: this_s: ', opt.this_s);
    console.log(console_indent, '#queryDescription_describeNode: level: ', opt.level);
    console.log(console_indent, '#queryDescription_describeNode: ctx: ', opt.ctx);
    console.log(console_indent, '#queryDescription_describeNode: max_s: ', opt.inout.max_s);
    console.log(console_indent, '#queryDescription_describeNode: cno: ', opt.inout.cno);
    */
    
    if (nodeName === "query") //  Top level Facet XML node
    {
      // STATUS: Complete: // TO DO: Remove
      opt.inout.max_s = 1;
      // this.viewDescription(opt.inout) // TO DO: Add view description to opt.inout.txt
      let newOpt = { 
        this_s: 1, 
        level: 1 
      };

      this.queryDescription_describeChildNodes({...opt, ...newOpt});
    }
    else if (nodeName === "class")
    {
      // STATUS: Complete, Tested: // TO DO: Remove
      // Unadorned template/filter:
      //   ?${n} is [not] a {classUri}
      let predicate = opt.$currentNode.attr('exclude') === 'yes' ? 'is not a' : 'is a';
      let classUri = opt.$currentNode.attr('iri');
      let qryFilter = {
        $node: opt.$currentNode, // jQuery object identifying the XML element - used to remove the filter. 
        template: "?${n} is [not] a {classUri}",
        s: { type: "variable", value: `?s${opt.this_s}` }, 
        p: { type: "operator", value: predicate }, // TO DO: set curie property
        o: { type: "uri", value: classUri } // TO DO: set curie property
      };
      opt.inout.filterDescs.push(qryFilter);
      opt.inout.cno++;
    }
    else if (nodeName === "text" || nodeName === "text-d")
    {
      let text = opt.$currentNode.text();
      let propertyUri = opt.$currentNode.attr('property');
      let viewType = '';

      if (opt.this_s === opt.ctx)
      {
        // The current node has the focus, so there must be a <view> element.
        viewType = opt.$currentNode.parent().children('view').attr('type');
      }

      if (propertyUri)
      {
        // STATUS: Complete, Tested: // TO DO: Remove
        // Unadorned template/filter:
        //   ?${n} has {propertyUri} containing text {textValue}
        let qryFilter = {
          $node: opt.$currentNode, 
          template: '?${n} has {propertyUri} containing text {textValue}',
          s: { type: "variable", value: `?s${opt.this_s}`},
          p: { type: "operator", value: `has [[${propertyUri}]] containing text` }, 
          o: { type: "literal", value: text }
        };
        opt.inout.filterDescs.push(qryFilter);
      }
      else if (viewType === 'properties')
      {
        // STATUS: Complete, Tested: // TO DO: Remove
        // Unadorned template/filter:
        //   ?${n} is the subject of any predicate where the object is associated with {textValue}
        let limit = this.getViewLimit();
        let qryFilter = {
          $node: opt.$currentNode, 
          template: '?${n} is the subject of any predicate where the object is associated with {textValue}',
          s: { type: "variable", value: `?s${opt.this_s}`},
          p: { type: "operator", value: "is the {{subjectTerm}} of any [[action0|{{predicateTerm}}]] where the {{objectTerm}} is associated with" },
          o: { type: "literal", value: text },
          actions: [
            // action0:
            // Equivalent to /fct action: /fct/facet.vsp?sid=%d&cmd=set_view&type=text-properties&limit=%d&offset=0&cno=%d
            {
              action: 'setView', 
              args: {
                viewType: 'text-properties',
                offset: 0,
                limit,
                cno: opt.inout.cno
              }
            }
          ]
        };
        opt.inout.filterDescs.push(qryFilter);
      }
      else if (viewType === 'properties-in')
      {
        // STATUS: Complete, Tested: // TO DO: Remove
        // Unadorned template/filter:
        //   ?${n} is the object of any predicate where the subject is associated with {textValue}
        let limit = this.getViewLimit();
        let qryFilter = {
          $node: opt.$currentNode,
          template: '?${n} is the object of any predicate where the subject is associated with {textValue}',
          s: { type: "variable", value: `?s${opt.this_s}`},
          p: { type: "operator", value: "is the {{objectTerm}} of any [[action0|{{predicateTerm}}]] where the {{subjectTerm}} is associated with" },
          o: { type: "literal", value: text },
          actions: [
            // action0:
            // Equivalent to /fct action: /fct/facet.vsp?sid=%d&cmd=set_view&type=text-properties&limit=%d&offset=0&cno=%d
            {
              action: 'setView', 
              args: {
                viewType: 'text-properties',
                offset: 0,
                limit,
                cno: opt.inout.cno
              }
            }
          ]
        };
        opt.inout.filterDescs.push(qryFilter);
      }
      else
      {
        // STATUS: Complete, Tested: // TO DO: Remove
        // Unadorned template/filter:
        //   ?${n} has any predicate with object {textValue}
        let limit = this.getViewLimit();
        let qryFilter = {
          $node: opt.$currentNode,
          template: '?${n} has any predicate with object {textValue}',
          s: { type: "variable", value: `?s${opt.this_s}`},
          p: { type: "operator", value: "has [[action0|any {{predicateTerm}}]] with {{objectTerm}}" },
          o: { type: "literal", value: text },
          actions: [
            // action0:
            // Equivalent to /fct action: /fct/facet.vsp?sid=%d&cmd=set_view&type=text-properties&limit=%d&offset=0&cno=%d
            {
              action: 'setView', 
              args: {
                viewType: 'text-properties',
                offset: 0,
                limit,
                cno: opt.inout.cno
              }
            }
          ]
        };
        opt.inout.filterDescs.push(qryFilter);
      }
    }
    else if (nodeName === "property")
    {
      // STATUS: Complete, Tested: // TO DO: Remove
      // Unadorned template/filter: 
      //   ?${n} [does not have property] {propertyUri} ?${n+1}
      opt.inout.max_s++;
      let predicate = opt.$currentNode.attr('exclude') === 'yes' ? 'does not have property' : '';
      let propertyUri = opt.$currentNode.attr('iri');
      let qryFilter = {
        $node: opt.$currentNode,
        template: '?${n} [does not have property] {propertyUri} ?${n+1}',
        s: { type: "variable", value: `?s${opt.this_s}`},
        p: { type: "operator", value: `${predicate} [[${propertyUri}]]`.trim() },
        o: { type: "variable", value: `?s${opt.inout.max_s}` }
      };
      opt.inout.filterDescs.push(qryFilter);

      let newOpt = {
        this_s: opt.inout.max_s
      };

      this.queryDescription_describeChildNodes({ ...opt, ...newOpt });
    }
    else if (nodeName === "property-of")
    {
      // STATUS: Complete, Tested: // TO DO: Remove
      // Unadorned template/filter: 
      //   ?${n+1} {propertyUri} ?${n}
      opt.inout.max_s++;
      let propertyUri = opt.$currentNode.attr('iri');
      let qryFilter = {
        $node: opt.$currentNode,
        template: '?${n+1} {propertyUri} ?${n}',
        s: { type: "variable", value: `?s${opt.inout.max_s}` },
        p: { type: "uri", value: propertyUri }, // TO DO: curie support
        o: { type: "variable", value: `?s${opt.this_s}` },
      };
      opt.inout.filterDescs.push(qryFilter);

      let newOpt = {
        this_s: opt.inout.max_s
      };

      this.queryDescription_describeChildNodes({...opt, ...newOpt});
    }
    else if (nodeName === "value")
    {
      // STATUS: Complete, Tested: // TO DO: Remove
      // Unadorned template/filter: 
      //   ?${n} {op} ${literalOrIri}
      let op = opt.$currentNode.attr('op') || '=';
      let ttlLiteralOrIri = this.getValueAsTurtle(opt.$currentNode);
      let isIri = str => /^<(http|urn).+>$/.test(str);
      // Strip < > from IRIs
      let val = isIri(ttlLiteralOrIri) ? /^<(.+)>$/.exec(ttlLiteralOrIri)[1] : ttlLiteralOrIri;
      let qryFilter = {
        $node: opt.$currentNode,
        template: '?${n} {op} ${literalOrIri}',
        s: { type: "variable", value: `?s${opt.this_s}` },
        p: { type: "operator", value: op },
        o: { type: (isIri(ttlLiteralOrIri) ? "uri" : "literal"), value: val }
      };
      opt.inout.filterDescs.push(qryFilter);
      opt.inout.cno++;
    }
    else if (nodeName === "cond")
    {
      // STATUS: Incomplete
      // Unadorned template/filter:
      // ???
      const conditionDisplayName = cond_t => {
        switch (cond_t) {
          case 'eq':
            return "="
          case 'neq':
            return "!="
          case 'lt':
            return "<"
          case 'lte':
            return "<=";
          case 'gt':
            return ">";
          case 'gte':
            return ">=";
          default:
            return cond_t;
        }
      };

      let cond_t = opt.$currentNode.attr('type');
      let lang = opt.$currentNode.attr('lang');
      let dtp = opt.$currentNode.attr('datatype');
      let val = opt.$currentNode.text();

      let prop_qual;
      // TO DO:
      // if (0 = xpath_eval ('count (./ancestor::*[name()=''property''])+ count(./ancestor::*[name()=''property-of'']) + count(./preceding::*[name()=''class''])', tree, 1)) 
      //   prop_qual = ' (any property) ';
      // else
      prop_qual = '';

      if (
        cond_t === 'eq' ||
        cond_t === 'neq' ||
        cond_t === 'lt' ||
        cond_t === 'lte' ||
        cond_t === 'gt' ||
        cond_t === 'gte'
      ) {
        let qryFilter = {
          $node: opt.$currentNode,
          template: '?${n} {condition} ${literal}',
          s: { type: "variable", value: `?s${opt.this_s}` },
          p: { type: "operator", value: `${prop_qual}${conditionDisplayName(cond_t)}` },
          o: { type: "number", value: val }
        };
        opt.inout.filterDescs.push(qryFilter);
      } 
      else if (cond_t === 'contains')  {
        // TO DO
        console.log("FctQuery#queryDescription_describeNode: UNHANDLED: nodeName === 'cond', cond_t === 'contains'");
      }
      else if (cond_t === 'in') {
        // TO DO
        console.log("FctQuery#queryDescription_describeNode: UNHANDLED: nodeName === 'cond', cond_t === 'in'");
      }
      else if (cond_t === 'near') {
        // TO DO
        console.log("FctQuery#queryDescription_describeNode: UNHANDLED: nodeName === 'cond', cond_t === 'near'");
      }

      opt.inout.cno++;
    }
    else if (nodeName === "cond-parm")
    {
      // TO DO
      console.log("FctQuery#queryDescription_describeNode: UNHANDLED: nodeName === 'cond-parm'");
    }
    else if (nodeName === "cond-range")
    {
      // TO DO
      console.log("FctQuery#queryDescription_describeNode: UNHANDLED: nodeName === 'cond-range'");
    }
  }

  /**
   * @summary
   * Generates a description of the current Facet query filter conditions.
   * 
   * @returns {object[]} Array of objects describing the query filters
   * 
   * @description
   * Each element of the returned array contains a filter condition descriptor.
   * The filter conditions are deliberately held in separate array elements so 
   * that the UI can associate controls with each filter, to allow a user to 
   * manipulate each individually, e.g. a button to drop a particular filter.
   * 
   * FctQuery is intended to be UI independent.
   * queryFilterDescriptors returns descriptors in the form of
   * SPARQL-like subject + predicate + object property sets.
   * These s-p-o properties may contain placeholders in order to keep
   * FctQuery independent of the UI and so that values for these placeholders
   * can be injected later by the UI layer.
   */
  queryFilterDescriptors() {
    // Equivalent to /fct PL routine fct_top()
    let descripParams = { 
      // in: {jQuery object} $currentNode - current XML node being described
      $currentNode: this._root.find('query'),
      // in: {int} this_s - subject node index (n) of current node. s1, s2, ... s(n)
      this_s: 1, 
      // in: {int} level - nesting level of XML node being inspected. 1, 2, ...
      level: 1, 
      // in: {int} ctx - n of subject node s(n) to which the <view> element applies, i.e. which has the focus.
      ctx: this.getViewSubjectIndex(), 
      inout: {
        // inout: {string[]} txt - output string array being constructed which will contain the query description
        txt: [], 
        // inout: {object[]} filterDescs - array of filter descriptors, each entry is a pseudo-triple descriptor
        filterDescs: [],
        // inout: {int} max_s - the maximum index of the implicit subject nodes s(n) implied by the XML 
        max_s: 0, 
        // inout: {int} cno - index of a filter condition / predicate ??? Used to identify a condition e.g. when dropping the condition.
        cno: 0 
      }
    };
    this.queryDescription_describeNode(descripParams);
    return descripParams.inout.filterDescs;
  }

  /**
   * 
   */
  viewDescription() {
    // Equivalent to /fct PL routine fct_view_info() // TO DO: Remove
    // TO DO
  }

  /**
   * Adds a property element.
   * 
   * propertyUri - The URI of the property. 
   * subjectIndex - The index of the implicit subject that the property will belong to.
   * exclude - If true, sets attribute exclude="yes".
   * sameAs - If true, sets attribute same_as="yes". If false, omits the attribute.
   * inferenceContext - The name of the inference context to use. If present, sets attribute inference="{inferenceContext}".
   * 
   * returns the subjectIndex of the scope enclosed by the new property element
   */
  addProperty(propertyUri, subjectIndex, exclude = false, sameAs = false, inferenceContext = null) {

    // The subjectIndex of the scope enclosed by the new property element is not necessarily subjectIndex + 1.
    // There could be a pre-existing sibling property element preceding the newly added property element. 
    // e.g. ?s3 and ?s4 (subject indexes 3 and 4 respectively) in the example XML below.
    // Consider the case where we've just added <property iri="http://schema.org/itemOffered"/>
    // In this case: subjectIndex = 2, propSubjIndx = 4.
    //
    // <?xml version="1.0"?>
    // <query xmlns="http://openlinksw.com/services/facets/1.0">
    //   <!-- Nesting level 1: implied variable ?s1 -->
    //   <class iri="http://schema.org/Business" />
    //   <property iri="http://schema.org/makesOffer">
    //     <!-- Nesting level 2: implied variable ?s2 -->
    //     <property iri="http://schema.org/businessFunction">
    //       <!-- Nesting level 3.1: implied variable ?s3 -->
    //       <value datatype="uri">http://purl.org/goodrelations/v1#Dispose</value>
    //     </property>
    //     <property iri="http://schema.org/itemOffered">
    //       <!-- Nesting level 3.2: implied variable ?s4 -->
    //       <view type="list" limit="100" />
    //       <class iri="http://schema.org/Product" />
    //       <property iri="http://schema.org/material">
    //         <!-- Nesting level 4: implied variable ?s5 -->
    //         <value>asbestos</value>
    //       </property>
    //     </property>
    //   </property>
    // </query>

   /*
    * Returns the subject node index of the context introduced by a 
    * query, property or property-of element.
    */
   let getPropertySubjectIndex = $prop => {
      let indx = 0;
      let $e = this._root.find('query, property, property-of');
      $e.each((index, element) => {
        indx = index + 1;
        if ($(element) === $prop)
          return false;
        return true;  
      });
      return indx;
    };

    if (subjectIndex > this.getSubjectCount())
      throw new Error(`subjectIndex (${subjectIndex}) out of range.`);

    let newPropAttribs = { iri: propertyUri };
    if (exclude)
      newPropAttribs.exclude = "yes";
    if (sameAs)
      newPropAttribs.same_as = "yes";
    if (inferenceContext)
      newPropAttribs.inference = inferenceContext;
    let $newProp = $('<property/>', newPropAttribs);
    // console.log('FctQuery#addProperty: Appending property:', $newProp)
    let $parent = this.getSubjectParentElement(subjectIndex);
    // console.log('FctQuery#addProperty: XML before adding property:', this.toXml());
    $parent.append($newProp);
    // console.log('FctQuery#addProperty: XML after adding property:', this.toXml());
    
    return getPropertySubjectIndex($newProp);
  }

  /**
   * Returns the number of subject nodes in the query XML.
   * 
   * An implicit subject node is introduced by an appropriate enclosing element 
   * (query, property, property-of). property and property-of need not have a
   * child element in order to be counted as introducing a new subject node.
   * The child element could be added at a later time before query submission.
   */
  /* TO DO: Incorrect earlier variant - REMOVE 
  getSubjectCount() {

    let cSubjects = 1;
    let countDescendentLevels = $n => {
      // console.log('getSubjectCount: tag:', $n[0].tagName, ', cSubjects:',  cSubjects);
      $n.children().each((idx, el) => {
        if ($(el).children().length > 0) {
          cSubjects++;
          countDescendentLevels($(el));
        }
      });
    };

    let $node = this._root.find('query');
    countDescendentLevels($node);
    return cSubjects;
  }
  */
 getSubjectCount() {
  let cSubjects = 1;
  let traverseChildren = $n => {
    // console.log('getSubjectCount: current tag:', $n[0].tagName, ', cSubjects:',  cSubjects);
    $n.children().each((idx, el) => {
      if (['PROPERTY', 'PROPERTY-OF'].includes($(el)[0].tagName))
      {
        cSubjects++;
        // console.log('getSubjectCount: child tag:', $(el)[0].tagName, ', cSubjects:', cSubjects);
      }
      if ($(el).children().length > 0) {
        traverseChildren($(el));
      }
    });
  };

  let $node = this._root.find('query');
  traverseChildren($node);
  return cSubjects;
}

  /**
   * Returns the element which provides the context for a subject node. 
   * i.e. The parent element which wraps the subject node.
   */
  getSubjectParentElement(subjectIndex) {
    // console.log('FctQuery#getSubjectParentElement: in: subjectIndex:', subjectIndex);
    if (typeof subjectIndex !== 'number')
      throw new Error ('subjectIndex must be a number');
    let maxSubjIndx = this.getSubjectCount();
    if (subjectIndex <= 0 || subjectIndex > maxSubjIndx)
      throw new Error('subjectIndex out of range');

    let $node = this._root.find('query');
    if (subjectIndex === 1)
      return $node;
     
    let subjIndx = 1;
    let $matchedEl = null;
    let traverseDescendents = $n => {
        // console.log('getSubjectParentElement: visiting tag:', $n[0].tagName, ', subjIndx:', subjIndx);
        $n.children().each((idx, el) => {
          if ($matchedEl)
            return;
          if (['PROPERTY', 'PROPERTY-OF'].includes($(el)[0].tagName))
            ++subjIndx;
          if (subjIndx === subjectIndex) {
            $matchedEl = $(el);
            // console.log('getSubjectParentElement: match on tag:', $matchedEl[0].tagName, ', subjIndx:', subjIndx);
            return;
          }
          if ($(el).children().length > 0) {
            traverseDescendents($(el));
          }
        });
        return $matchedEl;
      };  

    return traverseDescendents($node);
  }

  /**
   * Returns any property elements which are the immediate children of 
   * a subject node.
   */
  getSubjectProperties(subjectIndex) {
    throw new Error('Not implemented');
  }

  /**
   * @summary
   * Sets a condition on the current subject node which may be a query, property or property-of element.
   * 
   * @param conditionType {string} - eq | neq | gt | gte | lt | lte | range | neg_range | contains | in | not_in | near
   * @param value {string} - the condition value.
   * @param valueLang {string} - the language of the value, expressed as a two-letter (ISO 639-1) language code.
   * @param valueDataType {string} - the XML schema datatype of the value.
   * 
   * @description
   * The condition is specified using a &lt;cond&gt; element of the form:
   *   &lt;cond type="{conditionType}" neg="{negate}" xml:lang="{valueLang}" datatype="{valueDataType}"&gt;
   *     {value}
   *   &lt;/cond&gt;
   * After setting the condition, the subject node is reset to 1, the view type set to 'text-d' and
   * the view offset set to 0.
   */
  setSubjectCondition(conditionType, value, valueDataType, valueLang = "", negate = false) {
    // value, valueLang, valueDataType are obtained from query string 
    // parameters val, lang and datatype respectively.
    // 
    // Example /fct query string:
    // http://linkeddata.uriburner.com/fct/facet.vsp?
    //   cmd=cond&cond_t=eq&val=2&lang=&datatype=http%3A%2F%2Fwww.w3.org%2F2001%2FXMLSchema%23integer&sid=883402
    // Example FacetReactClient query string:
    // http://localhost:8600/facet/?
    //   action=cond&cond_t=eq&val=2&dataType=http%3A%2F%2Fwww.w3.org%2F2001%2FXMLSchema%23integer&lang=
    // 
    // Equivalent /fct PL routine: fct_set_cond().
    // /fct:
    //   neg ::= 'on' | '1' | 'no' | '' (What a mess!)
    // 


    // TO DO: Check conditionType is one of the allowed values
    let neg = negate ? '1' : '';
    let vdt = valueDataType;
    if (vdt === undefined || vdt === null)
      vdt = '';

    let $subject = this.getSubjectElement();
    let $condition = $(`<cond type="${conditionType}" neg="${neg}" xml:lang="${valueLang}" datatype="${vdt}">${value}</cond>`);
    $subject.append($condition);

    this.setViewSubjectIndex(1);
    this.setViewOffset(0);
    this.setViewType('text-d');
  }

  /**
   * Removes all conditions on the current subject node.
   * @param {number} index - Index (1 based) of subject node for which any attached conditions are to be removed.
   */
  removeSubjectConditions(index) {
    let currentSubjectIndex = this.getViewSubjectIndex();
    this.setViewSubjectIndex(index);
    this.getSubjectElement().find('cond').remove();
    this.setViewSubjectIndex(currentSubjectIndex);
  }

  /**
   * Gets any conditions set on the current subject node. 
   * @param {number} index - Index (1 based) of subject node for which any attached conditions are to be returned.
   * @returns {jQueryObject}
   */
  getSubjectConditionElements(index) {
    let currentSubjectIndex = this.getViewSubjectIndex();
    this.setViewSubjectIndex(index);
    let $conditions = this.getSubjectElement().find('cond');
    this.setViewSubjectIndex(currentSubjectIndex);
    return $conditions;
  }

  /**
   * Returns the query, property or property-of element which has the current focus.
   * @returns {jQueryObject}
   */
  getSubjectElement() {
    return this._root.find('view').parent();
  }

  /** 
   * Adds a class filter as a child of the current subject node.
   * Any existing class filter is overwritten.
   * 
   * @param {string} classIri - The IRI of the class.
   * @param {string} [inferenceContext] - The name of the inference context to use.
   */
  setSubjectClass(classIri, inferenceContext = null) {
    let $subject = this.getSubjectElement();
    let $class = $subject.find('class');
    if ($class.length > 0)
      $class.remove();
    let classAttribs = { iri: classIri };
    if (inferenceContext)
      classAttribs.inference = inferenceContext;
    $class = $('<class/>', classAttribs);
    $subject.append($class);
  }

  /** 
   * Returns a description of any class filter attached to the current subject node. 
   */
  getSubjectClass() {
    // TO DO
  }

  /**
   * Removes any class filter attached to the current subject node.
   */
  removeSubjectClass() {
    // TO DO
  }

  /**
   * Adds a property filter as a child of the current subject node.
   */
  setSubjectProperty() {
    // TO DO
  }

  /** 
   * Returns a description of any property filter attached to the current subject node.
   */
  getSubjectProperty() {
    // TO DO
  }

  /**
   * Removes any property filter attached to the current subject node.
   */
  removeSubjectProperty() {
    // TO DO
  }

  /** 
   * Adds a property-of filter as a child of the current subject node.
   */
  setSubjectPropertyOf() {
    // TO DO
  }

  /**
   * Returns a description of any property-of filter attached to the current subject node.
   */
  getSubjectPropertyOf() {
    // TO DO
  }

  /**
   * Removes any property-of filter attached to the current subject node.
   */
  removeSubjectPropertyOf() {
    // TO DO
  }

}
