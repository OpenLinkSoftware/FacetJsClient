import $ from "./jquery.module.js";
import { FctResult } from './FctResult.js';
import { FctError } from './FctError.js';
import JXON from "./JXON.js";

// --------------------------------------------------------------------------
//  Defaults

/**
 * The default query timeout (milliseconds) for Facet searches.<br/>
 * @default 60000
 * @see FctQuery#getDefaultQueryTimeout
 */
export const DFLT_QUERY_TIMEOUT = 60000; // milliseconds

/**
 * The default Facet service endpoint for executing Facet queries.<br/>
 * @default "http://linkeddata.uriburner.com/fct/service"
 * @see FctQuery#getDefaultServiceEndpoint
 */
// export const DFLT_SERVICE_ENDPOINT = 'http://linkeddata.uriburner.com/fct/service';
export const DFLT_SERVICE_ENDPOINT = 'http://localhost:8896/fct/service';

/**
 * The default limit on the number of rows returned by a Facet query.<br/>
 * It provides a default value for the &lt;query&gt; element's <code>limit</code> attribute.<br/>
 * @default 50
 * @see FctQuery#getDefaultViewLimit
 */
export const DFLT_VIEW_LIMIT = 50;

/**
 * The default view type (result set view) specified in a Facet query.
 * @default "text-d"
 * @see FctQuery#getDefaultViewType
 */
export const DFLT_VIEW_TYPE = "text-d";

/**
 * Represents a Facet query.
 */
export class FctQuery {

  /** 
   * @summary
   * Creates a Facet query represented by an XML tree.
   * 
   * @description
   * The facets to query on and the desired result set view
   * are described by an XML tree. If <code>sourceXml</code>
   * is supplied, the FacetQuery object is initialized
   * using this XML. If not supplied, a skeleton XML query
   * description is created. It contains the root &lt;query&gt; element
   * with just one child: a &lt;view&gt; element with attributes
   * <code>type</code>, <code>limit</code> and <code>offset</code>
   * initialized to the default view type, the default view limit and 0 respectively.
   * 
   * @param {string} [sourceXml] - XML describing a Facet query to initialize the FctQuery instance with.
   */
  constructor(sourceXml = null) {

    this._defaultQueryTimeout = DFLT_QUERY_TIMEOUT;
    this._defaultServiceEndpoint = DFLT_SERVICE_ENDPOINT;
    this._defaultViewLimit = DFLT_VIEW_LIMIT;
    this._defaultViewType = DFLT_VIEW_TYPE;

    if (!sourceXml) {
      // Create a skeleton XML document
      this._root = $('<XMLDocument />');
      let $query = this._root.append('<query/>').find('query');
      $query.attr('xmlns', 'http://openlinksw.com/services/facets/1.0');
      $query.append('<view/>');
      $query.find('view')
        .attr('type', `${this._defaultViewType}`)
        .attr('limit', `${this._defaultViewLimit}`)
        .attr('offset', '0');
    }
    else {
      let xml = sourceXml.trim();
      let match = xml.match(/^<\?xml.+\?>/i);
      if (match)
        xml = xml.substring(match[0].length).trimStart();
      this._root = $(`<XMLDocument>${xml}</XMLDocument>`);
    }

    this._fctServiceEndpoint = this._defaultServiceEndpoint;
  }
  
  /**
   * The default view type.
   * 
   * @see FctQuery#setViewType
   */
  getDefaultViewType() {
    return this._defaultViewType;
  }

  /**
   * The default query timeout.
   * 
   * @see FctQuery#setQueryTimeout
   */
  getDefaultQueryTimeout() {
    return this._defaultQueryTimeout;
  }

  /**
   * The default service endpoint.
   * 
   * @see FctQuery#setServiceEndpoint
   */
  getDefaultServiceEndpoint() {
    return this._defaultServiceEndpoint;
  }

  /**
   * The default view limit.
   * 
   * @see FctQuery#setViewLimit
   */
   getDefaultViewLimit() {
    return this._defaultViewLimit;
  }

  /** 
   * @summary
   * Returnes the XML representing the Facet query described by this FctQuery instance. 
   * 
   * @description
   * The returned XML forms the HTTP request body of the Facet query to be executed.<br/>
   * <code>toXml</code> is used by <code>FctQuery#execute</code> and may be useful when testing.
   * 
   * @returns {string} 
   * 
   * @see FctQuery#execute
   */
  toXml() {
    let xml = '<?xml version="1.0"?>';
    xml += this._root.find('query').prop('outerHTML');
    return xml;
  }

  /** 
   * @summary
   * Returns the Facet service endpoint being used for Facet queries by this FctQuery instance.
   * 
   * @returns {string} A Facet service endpoint URL
   * 
   * @see FctQuery#setServiceEndpoint
   */
  getServiceEndpoint() {
    return this._fctServiceEndpoint;
  }

  /** 
   * @summary
   * Sets the Facet service endpoint to use for Facet queries by this FctQuery instance.
   * 
   * @param {string} fctSvcUrl - A Facet service endpoint URL
   * 
   * @see FctQuery#getServiceEndpoint
   */
  setServiceEndpoint(fctSvcUrl) {
    // TO DO: Check fctSvcUrl is a URL
    this._fctServiceEndpoint = fctSvcUrl;
  }

  /**
   * @summary
   * Gets the graph attribute of the &lt;query&gt; element.
   * 
   * @description
   * The graph attribute is optional and may not be present.
   * 
   * @returns {string} The URI of the graph, if any, the Facet search is restricted to.
   * 
   * @see FctQuery#clearQueryGraph
   * @see FctQuery#setQueryGraph
   */
  getQueryGraph() {
    return this._root.find('query').attr('graph');
  }

  /**
   * @summary
   * Sets the graph attribute of the &lt;query&gt; element.
   * 
   * @description
   * If the attribute is omitted, all graphs are searched.<br/>
   * If the attribute is present, the search is restricted to the given graph URI.
   * 
   * @param {string} [graphUri] - The URI of the graph to search.
   * 
   * @see FctQuery#getQueryGraph
   * @see FctQuery#clearQueryGraph
   */
  setQueryGraph(graphUri) {
    // TO DO: Check graphUri is a URI
    this._root.find('query').attr('graph', graphUri);
  }

  /**
   * @summary
   * Removes any constraint on the graphs searched by the Facet query.
   * 
   * @description 
   * Deletes any <code>graph</code> attribute present on the &lt;query&gt; element.
   * 
   * @see FctQuery#getQueryGraph
   * @see FctQuery#setQueryGraph
   */
  clearQueryGraph() {
    this._root.find('query').removeAttr('graph');
  }

  /** 
   * @summary
   * 
   * Returns any query timeout set.
   * 
   * @returns {integer} timeout (milliseconds)
   * 
   * @see FctQuery#clearQueryTimeout
   * @see FctQuery#setQueryTimeout
   */
  getQueryTimeout() {
    return this._root.find('query').attr('timeout');
  }

  /** 
   * @summary
   * Sets a query timeout.
   * 
   * @description
   * The query timeout is set by adding a <code>timeout</code> attribute 
   * on the &lt;query&gt; element.
   * 
   * @param {integer} no_of_msec - The query timeout to be set (milliseconds).
   * 
   * @see FctQuery#getQueryTimeout
   * @see FctQuery#clearQueryTimeout
   */
  setQueryTimeout(no_of_msec) {
    // TO DO: Check no_of_msec is a positive integer
    this._root.find('query').attr('timeout', no_of_msec);
  }

  /**
   * @summary
   * Removes any query timeout which may have been set. 
   * 
   * @description
   * The timeout is removed by deleting any <code>timeout</code> attribute 
   * of the &lt;query&gt; element.
   *
   * @see FctQuery#getQueryTimeout
   * @see FctQuery#setQueryTimeout
   */
  clearQueryTimeout() {
    this._root.find('query').removeAttr('timeout');
  }

  /**
   * @summary
   * Returns any inference context set for the query.
   * 
   * @returns {string} An inference context name
   * 
   * @see FctQuery#clearSubjectInference
   * @see FctQuery#setSubjectInference
   */
  getSubjectInference() {
    return this._root.find('query').attr('inference');
  }

  /** 
   * @summary
   * Sets an inference context to be used by the query.
   * 
   * @description
   * <code>rdfsRuleSetName</code> is the name of an inference context
   * declared using Virtuoso's <code>rdfs_rule_set</code> SQL command.<br/>
   * <code>setSubjectInference</code> sets attribute <code>inference</code>
   * on the &lt;query&gt; element.
   * 
   * @param {string} rdfsRuleSetName - The name of the inference rule set
   * 
   * @see FctQuery#getSubjectInference
   * @see FctQuery#clearSubjectInference
   */
  setSubjectInference(rdfsRuleSetName) {
    // TO DO: Check rdfsRuleSetName is a non-empty string
    this._root.find('query').attr('inference', rdfsRuleSetName);
  }

  /** 
   * @summary
   * Removes any inference context set for the query.
   * 
   * @description
   * Deletes any attribute <code>inference</code> on the &lt;query&gt; element.
   * 
   * @see FctQuery#getSubjectInference 
   * @see FctQuery#setSubjectInference
   */
  clearSubjectInference() {
    this._root.find('query').removeAttr('inference');
  }

  /** 
   * @summary
   * Returns the current <code>same-as</code> attribute setting for the query, 
   * or null if not set. 
   * 
   * @returns {boolean|null}
   * 
   * @see FctQuery#clearSubjectSameAs
   * @see FctQuery#setSubjectSameAs
  */
  getSubjectSameAs() {
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

  /** 
   * @summary
   * Enables/disables <code>owl:sameAs</code> link handling.
   * 
   * @description
   * If enabled, <code>owl:sameAs</code> links will be considered in the query evaluation.<br/>
   * Sets attribute <code>same-as(="yes"|"no"</code>) on the <code>query</code> element.
   * 
   * @param {boolean} boolFlag - Turn same-as handling on/off.
   * 
   * @see FctQuery#getSubjectSameAs
   * @see FctQuery#clearSubjectSameAs
   */
  setSubjectSameAs(boolFlag) {
    if (typeof boolFlag != 'boolean')
      throw new Error('arg boolFlag must be boolean');
    let yesNo = boolFlag ? 'yes' : 'no'
    this._root.find('query').attr('same-as', yesNo);
  }

  /**
   * @summary 
   * Removes any <code>same-as</code> handling enabled for the query.
   * 
   * @description
   * The same-as handling is removed by deleting any <code>same-as</code> 
   * attribute of the <query> element.
   * 
   * @see FctQuery#getSubjectSameAs
   * @see FctQuery#setSubjectSameAs
   */
  clearSubjectSameAs() {
    this._root.find('query').removeAttr('same-as');
  }

  /**
   * @summary 
   * Returns the root &lt;query&gt; element of the current Facet XML.
   *
   * @description
   * Allows a client to do their own jQuery-based handling of the complete Facet query XML.<br/>
   * The returned jQuery object may also be useful when testing.
   * 
   * @returns {jQueryObject}
   * 
   * @see FctQuery#getElementSubject
   * @see FctQuery#getElementSubjectParent
   * @see FctQuery#getElementsSubjectConditions
   */
  getElementQuery() {
    return this._root.find('query');
  }

  /** 
   * @summary
   * Get/set the search text for Facet to query on.
   * 
   * @description
   * Gets the text pattern contained in the
   * <code>&lt;text&gt;</code> element of the Facet input XML.
   * 
   * @returns {string} 
   *
   * @see FctQuery#removeText
   * @see FctQuery#addText
   */
  getText() {
    return this._root.find('query text').text();
  }

  /** 
   * @summary
   * Sets the search text for Facet to query on.
   * 
   * @description
   * Sets the text pattern contained in the
   * <code>&lt;text&gt;</code> element of the Facet input XML.
   * 
   * @param {string} str - The search text
   * 
   * @see FctQuery#getText
   * @see FctQuery#removeText
   */
  addText(str) {
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

  /** 
   * @summary
   * Removes element &lt;text&gt;
   * 
   * @see FctQuery#getText
   * @see FctQuery#addText
   */
  removeText() {
    // TO DO: return necessary?
    return this._root.find('query text').remove();
  }

  /**
   * @summary
   * Gets the <code>property</code> attribute of the <code>&lt;text&gt;</code> element.
   * 
   * @returns {string} 
   * 
   * @see FctQuery#clearTextProperty 
   * @see FctQuery#setTextProperty
   */
  getTextProperty() {
    return this._root.find('query text').attr('property');
  }

  /**
   * @summary
   * Sets the <code>property</code> attribute of the <code>&lt;text&gt;</code> element.
   * 
   * @description
   * If the attribute is set, the text pattern searched for by Facet
   * must occur as a value of this RDF property. If not set, the search text can appear
   * as the value of any property.<br/>
   * Attribute <code>property</code> must contain a URL.
   * 
   * @param {string} propertyIri
   * 
   * @see FctQuery#getTextProperty
   * @see FctQuery#clearTextProperty 
   */
  setTextProperty(propertyIri) {
    // TO DO: Check propertyIri is an IRI
    this._root.find('query text').attr('property', propertyIri);
  }

  /** 
   * @summary
   * Removes any <code>property</code> attribute on the <code>&lt;text&gt;</code> element.
   * 
   * @see FctQuery#getTextProperty
   * @see FctQuery#setTextProperty 
   */
  clearTextProperty() {
    this._root.find('query text').removeAttr('property');
  }

  /**
   * @summary 
   * Removes a filter from the Facet XML.
   * 
   * @param {integer} filterId - A 0-based ID identifying the filter.
   * 
   * @description
   * If the removed node contained the &lt;view&gt; element, 
   * a new &lt;view&gt; element is created at the top level,
   * as a child of &lt;query&gt;, because &lt;view&gt; must always exist.
   * The limit attribute of the reinstated &lt;view&gt; remains unchanged.
   */
  removeFilter(filterId) {
    let rFilterDesc = this.queryFilterDescriptors();
    if (filterId < 0 || filterId >= rFilterDesc.length)
      throw new Error(`filterId (${filterId}) out of range`);
    const limit = this.getViewLimit();
    let $nodeToRemove = rFilterDesc[filterId].$node;
    $nodeToRemove.remove();
    if (this._root.find('view').length === 0) {
      let $replacementView = $(`<view type="${this._defaultViewType}" limit="${limit}" offset="0"/>`);
      this._root.find('query').append($replacementView);
    }
  }

  /** 
   * @summary
   * Returns the current limit on the number of rows returned by a query.
   * 
   * @description
   * A limit of 0 indicates no limit. 
   * 
   * @returns {number}
   * 
   * @see FctQuery#setViewLimit
   */
  getViewLimit() {
    let limit = parseInt(this._root.find('view').attr('limit'));
    if (Number.isNaN(limit)) // limit attribute is not present, i.e. no limit
      limit = 0;
    return limit;
  }

  /** 
   * @summary
   * Sets a limit on the number of rows returned by a query.
   * 
   * @description
   * A limit of 0 indicates no limit. The complete result set is returned.
   * 
   * @param {number} limit - The number of rows to restrict the query result to.
   * 
   * @see FctQuery#getViewLimit
   */
  setViewLimit(limit) {
    if (typeof limit !== 'number' || !Number.isInteger(limit) || limit < 0)
      throw new Error('limit must be a positive integer');
    if (limit === 0)
      this._root.find('view').removeAttr('limit');
    else
      this._root.find('view').attr('limit', limit);
  }

  /** 
   * @summary
   * Get the current view offset.
   * 
   * @returns {number}
   * 
   * @see FctQuery#setViewOffset
   */
  getViewOffset() {
    return parseInt(this._root.find('view').attr('offset'));
  }

  /**
   * @summary 
   * Skips the given number of matches from the start of the query result.
   * 
   * @param {number} offset - The number of result set rows to skip.
   * 
   * @see FctQuery#getViewOffset
   */
  setViewOffset(offset) {
    // TO DO: Check offset is positive int
    this._root.find('view').attr('offset', offset);
  }

  /**
   * @summary
   * Returns the text of a Facet &lt;value&gt; element.
   * 
   * @param {object} $valueElement - A JQuery object identifying the <value> element.
   * @returns {string}
   * 
   * @description
   * <p>The returned string may be an RDF literal or an IRI.
   * A literal may have an accompanying datatype (e.g. <code>^^&lt;int&gt;</code>) 
   * or a language tag (e.g. <ccode>@fr</code>), depending on the <value> 
   * element's @datatype or @lang attribute value.</p>
   * 
   * <p>IRIs are returned wrapped by angle brackets.
   * An IRI value is indicated by the presence of a "^^&lt;uri&gt;" type specifier attached to the
   * &lt;value&gt; element's contents, or by a @datatype attribute value of "uri", "url" or "iri".</p>
   * 
   * <p>The text of the &lt;value&gt; element is specified either as the content of the element, or
   * in a @val attribute with an empty element.</p>
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
   * An index n is returned where n is the effective subject node s<sub>n</sub> of the current view.<br>
   * e.g. n = 1, 2 ... n identifies subject nodes s<sub>1</sub>, s<sub>2</sub> ... s<sub>n</sub>
   * 
   * <p>A &lt;query&gt;, &lt;property&gt; or &lt;property-of&gt; element equates to a subject-arc
   * pair:<br>
   * <code>s<sub>n</sub> --(query)-->, s<sub>n</sub> --(property)--> or s<sub>n</sub> --(property-of)--></code><br>
   * in the 'metagraph' described by the Facet input XML.</p>
   * 
   * <p>The single &lt;view&gt; element allowed in the input XML can be a child of
   * &lt;query&gt;, &lt;property&gt; or &lt;property-of&gt;. The position of the &lt;view&gt; element
   * implicitly identifies the s<sub>n</sub> that should have the current focus in the Facet UI
   * when adding or removing filters. The s<sub>n</sub> appear in the SPARQL corresponding
   * to the input XML as subject node variables, ?s1, ?s2 etc.</p>
   * 
   * <p>The position of the &lt;view&gt; element also specifies which s<sub>n</sub> is presented in 
   * the result set by adjusting the select list of the query described by the XML. 
   * The result set can serve as a pick list for setting filters on s<sub>n</sub> to further 
   * refine the search for the set of entities identified by s<sub>1</sub>.</p>
   * 
   * <p>Each &lt;query&gt;, &lt;property&gt; or &lt;property-of&gt; element implicitly introduces
   * a new s<sub>n</sub>. We can identifiy the s<sub>n</sub> (or rather n) which the &lt;view&gt; element 
   * identifies as having the current focus by counting the occurrences of 
   * these elements until we reach the one which has &lt;view&gt; as a child.</p>
   * 
   * @see FctQuery#setViewSubjectIndex
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
   * @summary
   * Makes the &lt;view&gt; element a child of the implicit subject identified by the given index.
   * 
   * @description
   * Moves the &lt;view&gt; element in the Facet input XML, in effect changing the
   * subject node described by numerous Facet responses. It also implies a change of focus in 
   * the Facet UI to the implicit subject node query variable which has the given index.
   * 
   * @param {number} index - Index (1 based) of subject node to receive the focus.
   * 
   * @see FctQuery#getViewSubjectIndex
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

  /** 
   * @summary
   * Gets the current view type set for the query.
   * 
   * @returns {string}
   * 
   * @see FctQuery#setViewType
   */
  getViewType() {
    return this._root.find('view').attr('type');
  }

  /**
   * @summary
   * Sets the view type for the query.
   * 
   * @description
   * The view type determines the set of fields and information returned by the Facet query.<br/>
   * Permitted values for the view type are:<br/>
   * <ul><li>
   *     alphabet, describe, geo, list, list-count, months, properties, 
   *     properties-in, classes, text, text-d, weeks, years
   * </li></ul>
   * <code>setViewType</code> sets the <code>type</code> attribute of the &lt;view&gt; element.
   * Any existing <code>offset</code> and <code>limit</code> attributes stay unchanged.
   * 
   * @param {string} type - A string identifying the view type
   * 
   * @see FctQuery#getViewType
   */
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
   * @description
   * Executes the Facet query described by the FctQuery instance.
   * 
   * @returns {Promise} A FctResult instance containing the query result or a FctError.
   * @see FctError
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
    let qryTimeout = this.getQueryTimeout() || this.getDefaultQueryTimeout();
    // console.log('FctQuery#execute: input XML: ', this.toXml());
    return new Promise((resolve, reject) => {
      $.ajax({
        url: this._fctServiceEndpoint,
        data: this.toXml(),
        type: 'POST',
        contentType: 'text/xml',
        dataType: 'xml',
        timeout: qryTimeout,
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
        let httpStatusText = errorThrown || 'unknown';
        let httpStatusCode = jqXHR.status;
        // let statusText = textStatus || 'unknown';
        // let responseHeaders = jqXHR.getAllResponseHeaders();
        reject(new FctError(
          "Ajax request failed.",
          httpStatusText,
          httpStatusCode,
          jqXHR.responseText,
          jqXHR.responseXML
        )
        );
      };
    });
  }

  /**
   * @private
   */
  queryDescription_describeChildNodes(opt) {
    // Equivalent of /fct PL routine fct_query_info_1.
    let $e = $(opt.$currentNode).children();
    for (let i = 0; i < $e.length; i++) {
      let newOpt = {
        $currentNode: $($e[i]),
        level: opt.level + 1
      };

      this.queryDescription_describeNode({ ...opt, ...newOpt });
    }
  }

  /**
   * @private
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

      this.queryDescription_describeChildNodes({ ...opt, ...newOpt });
    }
    else if (nodeName === "class") {
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
    else if (nodeName === "text" || nodeName === "text-d") {
      let text = opt.$currentNode.text();
      let propertyUri = opt.$currentNode.attr('property');
      let viewType = '';

      if (opt.this_s === opt.ctx) {
        // The current node has the focus, so there must be a <view> element.
        viewType = opt.$currentNode.parent().children('view').attr('type');
      }

      if (propertyUri) {
        // STATUS: Complete, Tested: // TO DO: Remove
        // Unadorned template/filter:
        //   ?${n} has {propertyUri} containing text {textValue}
        let qryFilter = {
          $node: opt.$currentNode,
          template: '?${n} has {propertyUri} containing text {textValue}',
          s: { type: "variable", value: `?s${opt.this_s}` },
          p: { type: "operator", value: `has [[${propertyUri}]] containing text` },
          o: { type: "literal", value: text }
        };
        opt.inout.filterDescs.push(qryFilter);
      }
      else if (viewType === 'properties') {
        // STATUS: Complete, Tested: // TO DO: Remove
        // Unadorned template/filter:
        //   ?${n} is the subject of any predicate where the object is associated with {textValue}
        let limit = this.getViewLimit();
        let qryFilter = {
          $node: opt.$currentNode,
          template: '?${n} is the subject of any predicate where the object is associated with {textValue}',
          s: { type: "variable", value: `?s${opt.this_s}` },
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
      else if (viewType === 'properties-in') {
        // STATUS: Complete, Tested: // TO DO: Remove
        // Unadorned template/filter:
        //   ?${n} is the object of any predicate where the subject is associated with {textValue}
        let limit = this.getViewLimit();
        let qryFilter = {
          $node: opt.$currentNode,
          template: '?${n} is the object of any predicate where the subject is associated with {textValue}',
          s: { type: "variable", value: `?s${opt.this_s}` },
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
      else {
        // STATUS: Complete, Tested: // TO DO: Remove
        // Unadorned template/filter:
        //   ?${n} has any predicate with object {textValue}
        let limit = this.getViewLimit();
        let qryFilter = {
          $node: opt.$currentNode,
          template: '?${n} has any predicate with object {textValue}',
          s: { type: "variable", value: `?s${opt.this_s}` },
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
    else if (nodeName === "property") {
      // STATUS: Complete, Tested: // TO DO: Remove
      // Unadorned template/filter: 
      //   ?${n} [does not have property] {propertyUri} ?${n+1}
      opt.inout.max_s++;
      let predicate = opt.$currentNode.attr('exclude') === 'yes' ? 'does not have property' : '';
      let propertyUri = opt.$currentNode.attr('iri');
      let qryFilter = {
        $node: opt.$currentNode,
        template: '?${n} [does not have property] {propertyUri} ?${n+1}',
        s: { type: "variable", value: `?s${opt.this_s}` },
        p: { type: "operator", value: `${predicate} [[${propertyUri}]]`.trim() },
        o: { type: "variable", value: `?s${opt.inout.max_s}` }
      };
      opt.inout.filterDescs.push(qryFilter);

      let newOpt = {
        this_s: opt.inout.max_s
      };

      this.queryDescription_describeChildNodes({ ...opt, ...newOpt });
    }
    else if (nodeName === "property-of") {
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

      this.queryDescription_describeChildNodes({ ...opt, ...newOpt });
    }
    else if (nodeName === "value") {
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
    else if (nodeName === "cond") {
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
      else if (cond_t === 'contains') {
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
    else if (nodeName === "cond-parm") {
      // TO DO
      console.log("FctQuery#queryDescription_describeNode: UNHANDLED: nodeName === 'cond-parm'");
    }
    else if (nodeName === "cond-range") {
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
   * <p>Each element of the returned array contains a filter condition descriptor.
   * The filter conditions are held in separate array elements so 
   * that the UI can associate controls with each filter, to allow a user to 
   * manipulate each individually, e.g. a button to drop a particular filter.</p>
   * 
   * <p>FctQuery is intended to be UI independent.
   * <code>queryFilterDescriptors</code> returns descriptors in the form of
   * SPARQL-like<br> <code>subject + predicate + object</code> property sets.
   * These <code>s-p-o</code> properties may contain placeholders in order to keep
   * FctQuery independent of the UI and so that values for these placeholders
   * can be injected later by the UI layer.</p>
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
   * @summary
   * Returns a short text description of the current view type set for the query.
   * 
   * @description
   * The short description is intended for use in a UI to assist a user.
   * 
   * @returns {string}
   * 
   * @todo Implement
   */
  getViewDescription() {
    // Equivalent to /fct PL routine fct_view_info() // TO DO: Remove
    // TO DO
    throw new Error('Not implemented');
  }

  /**
   * @summary
   * Adds a <code>&lt;property&gt;</code> element to the Facet input XML.
   * 
   * @param {string} propertyUri - The URI of the property. 
   * @param {number} subjectIndex - The index of the implicit subject that the property will belong to.
   * @param {boolean} exclude - If true, sets attribute <code>exclude="yes"</code>. If false, omits the attribute.
   * @param {boolean} sameAs - If true, sets <code>attribute same_as="yes"</code>. If false, omits the attribute.
   * @param {string} inferenceContext - The name of the inference context to use. 
   *     If present, sets attribute <code>inference="{inferenceContext}"</code>.
   * 
   * @returns {number} The subject index of the scope enclosed by the new <code>&lt;property&gt;</code> element
   */
  addProperty(propertyUri, subjectIndex, exclude = false, sameAs = false, inferenceContext = null) {
    return this.addPropertyOrPropertyOf('property', propertyUri, subjectIndex, exclude, sameAs, inferenceContext);
  }

  /**
   * @summary
   * Adds a <code>&lt;property-of&gt;</code> element to the Facet input XML.
   * 
   * @param {string} propertyUri - The URI of the property. 
   * @param {number} subjectIndex - The index of the implicit subject that the property will belong to.
   * @param {boolean} exclude - If true, sets attribute <code>exclude="yes"</code>. If false, omits the attribute.
   * @param {boolean} sameAs - If true, sets attribute <code>same_as="yes"</code>. If false, omits the attribute.
   * @param {string} inferenceContext - The name of the inference context to use. 
   *     If present, sets attribute <code>inference="{inferenceContext}"</code>.
   * 
   * @returns {number} The subject index of the scope enclosed by the new <code>&lt;property-of&gt;</code> element
   */
  addPropertyOf(propertyUri, subjectIndex, exclude = false, sameAs = false, inferenceContext = null) {
    return this.addPropertyOrPropertyOf('property-of', propertyUri, subjectIndex, exclude, sameAs, inferenceContext);
  }

  /**
   * @summary
   * The number of subject nodes in the query XML.
   * 
   * @returns {number}
   * 
   * @description
   * An implicit subject node is introduced by an appropriate enclosing element 
   * (<code>query</code>, <code>property</code>, <code>property-of</code>). 
   * <code>property</code> and <code>property-of</code> need not have a
   * child element in order to be counted as introducing a new subject node.
   * The child element could be added at a later time before query submission.
   */
  getSubjectCount() {
    let cSubjects = 1;
    let traverseChildren = $n => {
      // console.log('getSubjectCount: current tag:', $n[0].tagName, ', cSubjects:',  cSubjects);
      $n.children().each((idx, el) => {
        if (['PROPERTY', 'PROPERTY-OF'].includes($(el)[0].tagName)) {
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
   * @summary
   * Get the parent element of a subject node.
   * 
   * @param {number} subjectIndex - The index of the subject node.
   * 
   * @returns {jQueryObject} A jQuery object containing the parent element.
   * 
   * @description
   * Returns the element which provides the context for a given subject node.
   * 
   * @see FctQuery#getElementSubject
   * @see FctQuery#getElementsSubjectConditions
   * @see FctQuery#getElementQuery
   */
  getElementSubjectParent(subjectIndex) {
    // console.log('FctQuery#getElementSubjectParent: in: subjectIndex:', subjectIndex);
    if (typeof subjectIndex !== 'number')
      throw new Error('subjectIndex must be a number');
    let maxSubjIndx = this.getSubjectCount();
    if (subjectIndex <= 0 || subjectIndex > maxSubjIndx)
      throw new Error('subjectIndex out of range');

    let $node = this._root.find('query');
    if (subjectIndex === 1)
      return $node;

    let subjIndx = 1;
    let $matchedEl = null;
    let traverseDescendents = $n => {
      // console.log('getElementSubjectParent: visiting tag:', $n[0].tagName, ', subjIndx:', subjIndx);
      $n.children().each((idx, el) => {
        if ($matchedEl)
          return;
        if (['PROPERTY', 'PROPERTY-OF'].includes($(el)[0].tagName))
          ++subjIndx;
        if (subjIndx === subjectIndex) {
          $matchedEl = $(el);
          // console.log('getElementSubjectParent: match on tag:', $matchedEl[0].tagName, ', subjIndx:', subjIndx);
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
   * @summary
   * Sets a condition on the current subject node which may be a query, property or property-of element.
   * 
   * @param conditionType {string} - eq | neq | gt | gte | lt | lte | range | neg_range | contains | in | not_in | near
   * @param value {string} - the condition value.
   * @param valueDataType {string} - the XML schema datatype of the value.
   * @param valueLang {string} - the language of the value, expressed as a two-letter (ISO 639-1) language code.
   * 
   * @see FctQuery#addValue
   * 
   * @description
   * The condition is specified using a &lt;cond&gt; element of the form:<br>
   * <pre>
   *   &lt;cond type="{conditionType}" neg="{negate}" xml:lang="{valueLang}" datatype="{valueDataType}"&gt;
   *     {value}
   *   &lt;/cond&gt;
   * </pre>
   * After setting the condition, the subject node is reset to 1, the view type set to 'text-d' and
   * the view offset set to 0.
   */
  addCondition(conditionType, value, valueDataType, valueLang = "", negate = false) {
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

    let $subject = this.getElementSubject();

    // Remove any existing cond element
    // Can multiple value elements be present provided the conditions don't conflict?
    $subject.find('cond').remove();

    let $condition = $(`<cond type="${conditionType}" neg="${neg}" xml:lang="${valueLang}" datatype="${vdt}">${value}</cond>`);
    $subject.append($condition);

    this.setViewSubjectIndex(1);
    this.setViewOffset(0);
    this.setViewType('text-d');
  }

  /**
   * @summary
   * Removes all conditions on the given subject node.
   * 
   * @param {number} index - Index (1 based) of subject node for which any attached conditions are to be removed.
   */
  removeSubjectConditions(index) {
    let currentSubjectIndex = this.getViewSubjectIndex();
    this.setViewSubjectIndex(index);
    this.getElementSubject().find('cond').remove();
    this.setViewSubjectIndex(currentSubjectIndex);
  }

  /**
   * @summary
   * Gets any conditions set on the given subject node. 
   * 
   * @param {number} index - Index (1 based) of subject node for which any attached conditions are to be returned.
   *
   * @returns {jQueryObject}
   * 
   * @see FctQuery#getElementSubjectParent
   * @see FctQuery#getElementSubject
   * @see FctQuery#getElementQuery
   */
  getElementsSubjectConditions(index) {
    let currentSubjectIndex = this.getViewSubjectIndex();
    this.setViewSubjectIndex(index);
    let $conditions = this.getElementSubject().find('cond');
    this.setViewSubjectIndex(currentSubjectIndex);
    return $conditions;
  }

  /**
   * @summary
   * Returns the query, property or property-of element which has the current focus.
   * 
   * @returns {jQueryObject}
   * 
   * @see FctQuery#getElementSubjectParent
   * @see FctQuery#getElementsSubjectConditions
   * @see FctQuery#getElementQuery
   */
  getElementSubject() {
    return this._root.find('view').parent();
  }

  /** 
   * @summary
   * Adds a class filter as a child of the current subject node.
   * 
   * @description
   * Any existing class filter, i.e. <code>&lt;class&gt;</code> element, is overwritten.
   * 
   * @param {string} classIri - The IRI of the class.
   * @param {string} [inferenceContext] - The name of the inference context to use.
   * 
   * @see FctQuery#getSubjectClass
   * @see FctQuery#clearSubjectClass
   */
  addClass(classIri, inferenceContext = null) {
    let $subject = this.getElementSubject();
    let $class = $subject.find('class');
    if ($class.length > 0)
      $class.remove();
    let classAttribs = { iri: classIri };
    if (inferenceContext)
      classAttribs.inference = inferenceContext;
    $class = $('<class/>', classAttribs);
    $subject.append($class);
  }

  // -- Private methods -----------------------------------------------------

  /**
   * @private
   * Adds a property or property-of element.
   * 
   * propertyName - The name of the element: "property" or "property-of"
   * propertyUri - The URI of the property. 
   * subjectIndex - The index of the implicit subject that the property or property-of element will belong to.
   * exclude - If true, sets attribute exclude="yes".
   * sameAs - If true, sets attribute same_as="yes". If false, omits the attribute.
   * inferenceContext - The name of the inference context to use. If present, sets attribute inference="{inferenceContext}".
   * 
   * returns the subjectIndex of the scope enclosed by the new property or property-of element
   */
  addPropertyOrPropertyOf(propertyName, propertyUri, subjectIndex, exclude = false, sameAs = false, inferenceContext = null) {
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

    if (!['property', 'property-of'].includes(propertyName))
      throw new Error(`propertyName (${propertyName}) out of range.`);
    if (subjectIndex > this.getSubjectCount())
      throw new Error(`subjectIndex (${subjectIndex}) out of range.`);

    let newPropAttribs = { iri: propertyUri };
    if (exclude)
      newPropAttribs.exclude = "yes";
    if (sameAs)
      newPropAttribs.same_as = "yes";
    if (inferenceContext)
      newPropAttribs.inference = inferenceContext;
    let $newProp = $(`<${propertyName}/>`, newPropAttribs);
    let $parent = this.getElementSubjectParent(subjectIndex);
    $parent.append($newProp);
    return getPropertySubjectIndex($newProp);
  }

  /**
   * @summary
   * Sets a condition on the current subject node which may be a query, property or property-of element.
   * 
   * @param {string} value - the condition value.
   * @param {string} [conditionType='eq'] - eq | neq | gt | gte | lt | lte | range | neg_range | contains | in | not_in | near
   * @param {string} [valueDataType=''] - the XML schema datatype of the value.
   * @param {string} [valueLang=''] - the language of the value, expressed as a two-letter (ISO 639-1) language code.
   *
   * @description
   * The condition is specified using a &lt;value&gt; element of the form:
   * <pre>
   *   &lt;value type="{conditionType}" neg="{negate}" xml:lang="{valueLang}" datatype="{valueDataType}"&gt;
   *     {value}
   *   &lt;/value&gt;
   * </pre>
   *  {value} must be enclosed in quotes. (A /fct bug.)
   * 
   * After setting the condition, the subject node is reset to 1 and the view offset set to 0.
   */
  addValue(
    value,
    conditionType = "eq",
    valueDataType = "",
    valueLang = "",
  ) {
    // TO DO: Document <value> and <cond>.
    // Element <value> is similar to <cond>. It accepts the same attributes
    // 'datatype', 'xml:lang' and 'op', but not 'neg'.

    // ISSUE: 
    // the content of <value> must be quoted, otherwise /fct returns nothing.
    if (!value || (typeof value !== 'string'))
      throw new Error("value parameter must be a non-empty string.");

    let val = value;
    if (!(val.startsWith('"') && val.endsWith('"')))
      val = '"' + val + '"';

    // TO DO: Check conditionType is one of the allowed values
    let vdt = valueDataType;
    if (vdt === undefined || vdt === null)
      vdt = '';

    // If attribute type is omitted, /fct assumes op="eq". 
    // Remove any existing value element
    // Can multiple value elements be present provided the conditions don't conflict?
    let $subject = this.getElementSubject();
    $subject.find('value').remove();
    let $value = $(`<value type="${conditionType}" xml:lang="${valueLang}" datatype="${vdt}">${val}</value>`);
    $subject.append($value);

    this.setViewSubjectIndex(1);
    this.setViewOffset(0);
  }
}
