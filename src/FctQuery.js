import $ from "./jquery.module.js";
import { FctResult } from '../src/FctResult.js';

// TO DO: 
// - Ensure FCT_QUERY_AJAX_TIMEOUT is greater than the 
//   the timeout specified in the query body.
// - Make configurable
const FCT_QUERY_AJAX_TIMEOUT = 60000; // milliseconds

const ID_QUERY = "0";
const ID_TEXT = "1";
const ID_VIEW = "2";

/**
 * Represents a Facet query.
 */
export class FctQuery {

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
      // Set the default view type to 'text'.
      $query.find('view').attr('type', 'text').attr('limit', '').attr('offset', '');
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
    // TO DO:
    // Are the different child elements of <query> / <property> / <property-of> mutually
    // exclusive, or can they be combined? 
    // e.g. Does setting a <text> child element require first removing an existing child elements?
    if (!str || str.length === 0)
      return;
    let $query = this._root.find('query');
    if ($query.length === 0)
      throw Error('query element missing');
    // if ($(this._root.find('query > view')).attr('type') != 'list-count')
    //  return;
    if ($query.find('text').length === 0) {
      // $query.append('<text class="' + ID_TEXT + '"/>');
      $query.append('<text/>');
    }
    $query.find('text').text(str);
    // $query.find('text').attr('label', str.split('  ').join(' ').split(' ').join(' + '));
  }

  /** */
  removeQueryText() {
    return this._root.find('query text').remove();
  }

  /** 
   * Removes a filter from the Facet XML.
   * @param {integer} filterId - A 0-based ID identifying the filter.
   */
  removeQueryFilter(filterId) {
    // TO DO
  }

  /** */
  getViewLimit() {
    return parseInt(this._root.find('view').attr('limit'));
  }

  /** */
  setViewLimit(lim) {
    // TO DO: Check limit is positive int
    this._root.find('view').attr('limit', lim);
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
  getValue($valueElement) {
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
        value = `&lt;${match[1]}&gt;`;
    }
    else if (['uri', 'url', 'iri'].includes(dataType)) {
      value = `&lt;${val}&gt;`;
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
      value = `"${val}"^^&lt;${dataType}&gt;`;
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
    console.log('FctQuery#setViewSubjectIndex: index:', index); // TO DO: Remove
    return; // TO DO: Remove
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
    // type ::= properties | properties-in | classes | text |
    //          list | list-count | alphabet | geo | describe |
    //          years | months | weeks 
    //
    // TO DO:
    // Are the limit and offset attrs mandatory for the view element?
    // If so, they must be set here.
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

    return new Promise((resolve, reject) => {
      $.ajax({
        url: this._fctSvcEndpoint,
        data: this.toXml(),
        type: 'POST',
        contentType: 'text/xml',
        dataType: 'xml', 
        timeout: FCT_QUERY_AJAX_TIMEOUT,
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
    // TO DO: Emit <ul class="qryInfoLevel{opt.level}">
    for (let i = 0; i < $e.length; i++)
    {
      let newOpt = {
        $currentNode: $($e[i]),
        level: opt.level + 1
      };
  
      this.queryDescription_describeNode({...opt, ...newOpt});
    }
    // TO DO: Emit </ul>
  }

  /**
   * Returns a SPARQL-like description of a particular node in the Facet XML.
   * @returns {string}
   */
  queryDescription_describeNode(opt) {
    // Equivalent to /fct PL routine fct_query_info.
    
    let console_indent = " ".repeat(opt.level * 4);
    let nodeName = opt.$currentNode.get(0).nodeName.toLowerCase();
    let htmlTemplateText = template => $(`<span>${template}</span>`).text().replace(/\s+/g, ' ').trim();

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
      // STATUS: Complete: // TO DO: Remove
      let predicate = opt.$currentNode.attr('exclude') === 'yes' ? 'is not a' : 'is a';
      let classUri = opt.$currentNode.attr('iri');

      // Unadorned template/filter:
      //   ?${n} is [not] a {classUri}
      let qryVariableAction = opt.uiUtil.fctQryVariableAction(opt.this_s, opt.ctx);
      let snippet = 
      {
        unadornedTemplate: '?${n} is [not] a {classUri}',
        template:
          `${qryVariableAction.snippet} ${predicate} ${opt.uiUtil.fctClassUriFrag(classUri)}`,
        actionContexts:
          [
            qryVariableAction.context,
          ]
      };
      snippet.text = htmlTemplateText(snippet.template);
      opt.inout.txt.push(snippet);
      opt.inout.cno++;
    }
    else if (nodeName === "text" || nodeName === "text-d")
    {
      let text = opt.$currentNode.text();
      let propertyUri = opt.$currentNode.attr('property');
      let viewType = '';

      if(opt.this_s === opt.ctx)
      {
        // The current node has the focus, so there must be a <view> element.
        viewType = opt.$currentNode.parent().children('view').attr('type');
      }

      if (propertyUri)
      {
        // STATUS: Complete: // TO DO: Remove
        // Unadorned template/filter:
        //   ?${n} has {propertyUri} containing text "{textValue}"
        let qryVariableAction = opt.uiUtil.fctQryVariableAction(opt.this_s, opt.ctx);
        let snippet = {
          unadornedTemplate: '?${n} has {propertyUri} containing text "{textValue}"',
          template:
            `${qryVariableAction.snippet} has ${opt.uiUtil.fctPropertyUriFrag(propertyUri)} ` +
            "containing text " +
            `${opt.uiUtil.fctTextValueFrag(text)}`,
          actionContexts:
            [
              qryVariableAction.context,
            ]
        };
        snippet.text = htmlTemplateText(snippet.template);
        opt.inout.txt.push(snippet);
      }
      else if (viewType === 'properties')
      {
        // STATUS: Complete: // TO DO: Remove
        // Unadorned template/filter:
        //   ?${n} is the subject of any predicate where the object is associated with {textValue}"

        let limit = this.getViewLimit();
        let qryVariableAction = opt.uiUtil.fctQryVariableAction(opt.this_s, opt.ctx);
        let setViewPropertiesAction = opt.uiUtil.fctSetViewTextPropertiesAction(limit, opt.inout.cno);
        let snippet = {
          unadornedTemplate: '?${n} is the subject of any predicate where the object is associated with {textValue}',
          template: 
            `${qryVariableAction.snippet} is the ` + 
            `${opt.uiUtil.fctSubjectTerm()} of any ${setViewPropertiesAction.snippet} ` +
            `where the ${opt.uiUtil.fctObjectTerm()} is associated with ` +
            `${opt.uiUtil.fctTextValueFrag(text)}`,
          actionContexts:
            [
              qryVariableAction.context,
              setViewPropertiesAction.context,
            ]
        };
        snippet.text = htmlTemplateText(snippet.template);
        opt.inout.txt.push(snippet);
      }
      else if (viewType === 'properties-in')
      {
        // STATUS: Complete: // TO DO: Remove
        // Unadorned template/filter:
        //   ?${n} is the object of any predicate where the subject is associated with {textValue}"

        let limit = this.getViewLimit();
        let qryVariableAction = opt.uiUtil.fctQryVariableAction(opt.this_s, opt.ctx);
        let setViewPropertiesAction = opt.uiUtil.fctSetViewTextPropertiesAction(limit, opt.inout.cno);
        let snippet = {
          unadornedTemplate: '?${n} is the object of any predicate where the subject is associated with {textValue}',
          template: 
            `${qryVariableAction.snippet} is the ` + 
            `${opt.uiUtil.fctObjectTerm()} of any ${setViewPropertiesAction.snippet} ` +
            `where the ${opt.uiUtil.fctSubjectTerm()} is associated with ` +
            `${opt.uiUtil.fctTextValueFrag(text)}`,
          actionContexts:
            [
              qryVariableAction.context,
              setViewPropertiesAction.context,
            ]
        };
        snippet.text = htmlTemplateText(snippet.template);
        opt.inout.txt.push(snippet);
      }
      else
      {
        // STATUS: Complete: // TO DO: Remove
        // Unadorned template/filter:
        //   ?${n} has any predicate with object {textValue}"

        let limit = this.getViewLimit();
        let qryVariableAction = opt.uiUtil.fctQryVariableAction(opt.this_s, opt.ctx);
        let setViewPropertiesAction = opt.uiUtil.fctSetViewTextPropertiesAction(limit, opt.inout.cno);
        let snippet = {
          unadornedTemplate: '?${n} has any predicate with object {textValue}',
          template: 
            `${qryVariableAction.snippet} has ` + 
            `${setViewPropertiesAction.snippet} ` +
            `with ${opt.uiUtil.fctObjectTerm()} ` +
            `${opt.uiUtil.fctTextValueFrag(text)}`,
          actionContexts:
            [
              qryVariableAction.context,
              setViewPropertiesAction.context,
            ]
        };
        snippet.text = htmlTemplateText(snippet.template);
        opt.inout.txt.push(snippet);
      }
    }
    else if (nodeName === "property")
    {
      // STATUS: Complete: // TO DO: Remove
      opt.inout.max_s++;
      let predicate = opt.$currentNode.attr('exclude') === 'yes' ? 'does not have property' : '';
      let propertyUri = opt.$currentNode.attr('iri');
      let qryVariableAction = opt.uiUtil.fctQryVariableAction(opt.this_s, opt.ctx);
      let qryVariableAction2 = opt.uiUtil.fctQryVariableAction(opt.inout.max_s, opt.ctx);
      let snippet = {
        unadornedTemplate: '?${n} [does not have property] {propertyUri} ?${n+1}',
        template:
          `${qryVariableAction.snippet} ${predicate} ${opt.uiUtil.fctPropertyUriFrag(propertyUri)} ` +
          `${qryVariableAction2.snippet}`,
        actionContexts:
          [
            qryVariableAction.context,
            qryVariableAction2.context,
          ]
      };
      snippet.text = htmlTemplateText(snippet.template);
      opt.inout.txt.push(snippet);

      let newOpt = {
        this_s: opt.inout.max_s
      };

      this.queryDescription_describeChildNodes({ ...opt, ...newOpt });
    }
    else if (nodeName === "property-of")
    {
      // STATUS: Complete: // TO DO: Remove
      opt.inout.max_s++;
      let propertyUri = opt.$currentNode.attr('iri');
      let qryVariableAction = opt.uiUtil.fctQryVariableAction(opt.this_s, opt.ctx);
      let qryVariableAction2 = opt.uiUtil.fctQryVariableAction(opt.inout.max_s, opt.ctx);
      let snippet = {
        unadornedTemplate: '?${n+1} {propertyUri} ?${n}',
        template:
          `${qryVariableAction2.snippet} ${opt.uiUtil.fctPropertyUriFrag(propertyUri)} ` +
          `${qryVariableAction.snippet}`,
        actionContexts:
          [
            qryVariableAction2.context,
            qryVariableAction.context,
          ]
      };
      snippet.text = htmlTemplateText(snippet.template);
      opt.inout.txt.push(snippet);

      let newOpt = {
        this_s: opt.inout.max_s
      };

      this.queryDescription_describeChildNodes({...opt, ...newOpt});
    }
    else if (nodeName === "value")
    {
      // STATUS: Incomplete: // TO DO: Remove
      let qryVariableAction = opt.uiUtil.fctQryVariableAction(opt.this_s, opt.ctx);
      let op = opt.$currentNode.attr('op') || '=';
      let literalOrIri = this.getValue(opt.$currentNode);
      let snippet = {
        unadornedTemplate: '?${n} {op} ${literalOrIri}',
        template:
          `${qryVariableAction.snippet} ${op} ${literalOrIri}`,
        actionContexts:
          [
            qryVariableAction.context,
          ]
      };
      snippet.text = htmlTemplateText(snippet.template);
      opt.inout.txt.push(snippet);
      opt.inout.cno++;
    }
    else if (nodeName === "cond-parm")
    {
      // TO DO
      console.log("FctQuery#queryDescription_describeNode: UNHANDLED: nodeName === 'cond-parm'");
    }
    else if (nodeName === "cond")
    {
      // TO DO
      console.log("FctQuery#queryDescription_describeNode: UNHANDLED: nodeName === 'cond'");
    }
    else if (nodeName === "cond-range")
    {
      // TO DO
      console.log("FctQuery#queryDescription_describeNode: UNHANDLED: nodeName === 'cond-range'");
    }
  }

  /**
   * @summary
   * Generates a SPARQL-like description of the current Facet query and filter
   * conditions.
   * 
   * @param {object} fctUiUtil - An instance of FctUiUtil
   * @returns {string[]} Array of HTML strings describing the query
   * 
   * @description
   * Each element of the returned array contains a filter condition wrapped
   * in HTML. The filter conditions are deliberately held in separate
   * array elements so that the UI can associate controls with each filter
   * to allow a user to manipulate each individually, e.g. a button to
   * drop a particular filter.
   * 
   * FctQuery is intended to be UI independent.
   * queryDescription uses FctUiUtil to generate these HTML snippets. 
   * The snippets contain placeholders {{...}} for HTML attribute
   * values such as class, href etc. The intent is that these placeholders keep
   * FctQuery independent of the UI and that values for these placeholders
   * will be injected as late as possible by the UI layer itself.
   */
  queryDescription(fctUiUtil) {
    // Equivalent to /fct PL routine fct_top()

    let descripParams = { 
      // in: {object} fctUiUtil - an instance of FctUiUtil
      uiUtil: fctUiUtil,
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
        // inout: {int} max_s - the maximum index of the implicit subject nodes s(n) implied by the XML 
        max_s: 0, 
        // inout: {int} cno - index of a filter condition / predicate ??? Used to identify a condition e.g. when dropping the condition.
        cno: 0 
      }
    };
    this.queryDescription_describeNode(descripParams);
    return descripParams.inout.txt;
  }

  /**
   * 
   */
  viewDescription() {
    // Equivalent to /fct PL routine fct_view_info() // TO DO: Remove
    // TO DO
  }

  /**
   * 
   */
  getFilterDescriptors() {
    // TO DO: Replace hardcoded data!

    const qryFilters = [
      {
        s: { type: "variable", value: "?s1" },
        p: { type: "operator", value: "is a" },
        o: { type: "uri", value: "http://schema.org/Business", curie: "schema:Business"}
      },
      {
        s: { type: "variable", value: "?s1" },
        p: { type: "uri", value: "http://schema.org/makesOffer", curie: "schema:makesOffer" },
        o: { type: "variable", value: "?s2"}
      },
      {
        s: { type: "variable", value: "?s2" },
        p: { type: "uri", value: "http://schema.org/businessFunction", curie: "schema:businessFunction" },
        o: { type: "variable", value: "?s3"}
      },
      {
        s: { type: "variable", value: "?s3" },
        p: { type: "operator", value: "==" },
        o: { type: "uri", value: "http://purl.org/goodrelations/v1#Dispose", curie: "gr:Dispose" }
      },
      {
        s: { type: "variable", value: "?s2" },
        p: { type: "uri", value: "http://schema.org/itemOffered", curie: "schema:itemOffered"},
        o: { type: "variable", value: "?s4" }
      },
      {
        s: { type: "variable", value: "?s4" },
        p: { type: "operator", value: "is a"},
        o: { type: "variable", value: "?s4" }
      }, 
      {
        s: { type: "variable", value: "?s4" },
        p: { type: "uri", value: "http://schema.org/material", curie: "schema:material"},
        o: { type: "variable", value: "?s5" }
      },
      {
        s: { type: "variable", value: "?s5" },
        p: { type: "operator", value: "==" },
        o: { type: "literal", value: "asbestos" }
      }
    ];

    return qryFilters;
  }
}
