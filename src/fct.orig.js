
//** FILE: fct.js **/


var VIEW_TYPE_LIST = "list";
var VIEW_TYPE_LIST_COUNT = "list-count";
var VIEW_TYPE_PROPVAL_LIST = "propval-list";
var VIEW_TYPE_PROPERTIES = "properties";
var VIEW_TYPE_PROPERTIES_IN = "properties-in";
var VIEW_TYPE_TEXT_PROPERTIES = "text-properties";
var VIEW_TYPE_CLASSES = "classes";
var VIEW_TYPE_TEXT = "text";
var VIEW_TYPE_TEXT_D = "text-d";
var VIEW_TYPE_ALPHABET = "alphabet";
var VIEW_TYPE_GEO = "geo";
var VIEW_TYPE_YEARS = "years";
var VIEW_TYPE_MONTHS = "months";
var VIEW_TYPE_WEEKS = "weeks";
var VIEW_TYPE_ENTITIES_LIST = "entities-list";
var VIEW_TYPE_GRAPHS = "graphs";
var VIEW_TYPE_DESCRIBE = "describe";

var NODE_TYPE_PROPERTY = "property";
var NODE_TYPE_PROPERTY_OF = "property-of";
var NODE_TYPE_CLASS = "class";
var NODE_TYPE_TEXT = "text";
var NODE_TYPE_VIEW = "view";
var NODE_TYPE_VALUE = "value";

// CMSB: ATTR_GRAPH_LABEL ('graphLabel') not is fct sources
var ATTR_GRAPH_LABEL = "graphLabel";

var LABEL_ROOT = "root";

var SIZE_LABEL = 40;
var SIZE_RESULT_SET = 30;

var ID_QUERY = "0";
var ID_TEXT = "1";
var ID_VIEW = "2";

// lifespan of query cache item, in hours
var POLICY_CACHE_REFRESH = 0; // TODO: not yet implemented


/* xml root element - because html() does not include the root element and we want to 
 * include <report /> in the output. There may be a better way to do this.
 */
var _root = $('<XMLDocument />');

var query, text, view;

var fct_isDebug = true;

/*
 * Extracts a parameter value from the window.location query string.
 *
 * CMSB: Not pure: tied to  window.location.search
 */
var fct_getUrlParameter = function getUrlParameter(sParam) {
  var sPageURL = window.location.search.substring(1),
    sURLVariables = sPageURL.split('&'),
    sParameterName,
    i;

  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');

    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
    }
  }
}

var fct_isPermalink = false;
var fct_queryTimeout = '5000';

/*
 * CMSB: Pure - not bound to UI
 */
function fct_init(){

  // Simple helper function creates a new element from a name, so you don't have to add the brackets etc.
  $.createElement = function(name)
  {
    return $('<'+name+' />');
  };

  // JQ plugin appends a new element created from 'name' to each matched element.
  $.fn.appendNewElement = function(name)
  {
    this.each(function(i)
    {
      $(this).append('<'+name+' />');
    });
    return this;
  }

  $.fn.appendNewAttribute = function(name, value)
  {
    this.each(function(i)
    {
      $(this).attr(name, value);
    });
    return this;
  }


  /*
   * CMSB: 
   * Parameter qxml indicates a permalink.
   * qxml contains the URLencoded query XML.
   */
  var qxml = fct_getUrlParameter('qxml');

  if(qxml && qxml.length > 0){
    idct = fct_getUrlParameter('idCt');
    fct_isPermalink = true;
    _root.append($.parseHTML(qxml));

  }
  else {
    _root.append
    (
      // one method of adding a basic structure
      $('<query/>').attr('class', ID_QUERY).append
      // (
      //     $('<text class="'+ID_TEXT+'"/>')
      // ).append
      (
        $('<view class="'+ID_VIEW+'"/>')
          .appendNewAttribute('limit', '')
          .appendNewAttribute('type', '')
          .appendNewAttribute('offset', '')
      )
      // example of our plugin
      //.appendNewElement('property')
      //.appendNewAttribute('', '')
    );
  }

  // get a reference to query
  query = _root.find('query');

  text = query.find('text');
  view = query.find('view');


  //setQueryText('VIOS');
  //test();
  //setViewType(VIEW_TYPE_CLASSES);
  setViewLimit(SIZE_RESULT_SET);
  setViewOffset(0);
}

// Done
function getQuery(){
  return _root.find('query'); //TODO: this code needs to be refactored to use getter/setters in place of the calls to _root, also, need to replace the string concats with more efficient routines
}

// Done
function setQueryText(str){
  if(str == VALUE_KEYWORDS_TEXT) {
    str = '';
    $('#keywords').val('');
  }
  query = _root.find('query');
  if( (!str || str.length <= 0) && $(_root.find('query > view')).attr('type') != 'list-count') return;
  if(_root.find('text').length <= 0) {
    query.append('<text class="'+ID_TEXT+'"/>');
    //text = _root.find('text');
  }
  query.find('text').text(str);
  query.find('text').attr('label', str.split('  ').join(' ').split(' ').join(' + '));
}

// Done
function getQueryGraph(){
  var g = _root.find('query').attr('graph');
  //if(!g || g.length <= 0) g = LABEL_ROOT;
  return g;
}

// Done (Ignored)
// CMSB: ATTR_GRAPH_LABEL ('graphLabel') not is fct sources
function getQueryGraphLabel(){
  var g = _root.find('query').attr(ATTR_GRAPH_LABEL);
  //if(!g || g.length <= 0) g = LABEL_ROOT;
  return g;
}

// Done
function setQueryGraph(g, label){
  _root.find('query').attr('graph', g);
  // CMSB: ATTR_GRAPH_LABEL ('graphLabel') not is fct sources
  _root.find('query').attr(ATTR_GRAPH_LABEL, label);
}

// Done
function clearQueryGraph(){
  _root.find('query').removeAttr('graph');
  // CMSB: ATTR_GRAPH_LABEL ('graphLabel') not is fct sources
  _root.find('query').removeAttr(ATTR_GRAPH_LABEL);
}

// Done
function getQueryText(){
  return _root.find('query text').text();
}

// Done
function setViewType(type, q){
  $(q).find('view').attr('type', type);
}

// Done
function setViewLimit(lim){
  _root.find('view').attr('limit', lim);
}

// Done
function setViewOffset(offset){
  _root.find('view').attr('offset', offset);
}

// Done
function getViewType(type){
  return _root.find('view').attr('type');
}

// Done
function getViewLimit(lim){
  return parseInt(_root.find('view').attr('limit'));
}

// Done
function getViewOffset(lim){
  return parseInt(_root.find('view').attr('offset'));
}

// Done
function getSparql(xml){
  return $($(xml).find("fct\\:sparql")[0]).text();
}

function getTime(xml){
  return $($(xml).find("fct\\:time")[0]).text();
}

function getComplete(xml){
  return $($(xml).find("fct\\:complete")[0]).text();
}

function getTimeout(xml){
  return $($(xml).find("fct\\:timeout")[0]).text();
}

function getDbActivity(xml){
  return $($(xml).find("fct\\:db-activity")[0]).text();
}

var fct_sparql, fct_time, fct_complete, fct_timeout, fct_dbActivity;

var fct_dataSpace = "http://lod.openlinksw.com/fct/service";
//var fct_dataSpace = "http://myopenlink.net/fct/service";

// returns a Java hashCode, see here: https://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/
String.prototype.hashCode = function(){
  var hash = 0;
  if (this.length == 0) return hash;
  for (i = 0; i < this.length; i++) {
    char = this.charCodeAt(i);
    hash = ((hash<<5)-hash)+char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash;
}
// TODO: need to implement a super-fast server-side cache as a fallback if the local cache does not contain the query
// the last resort is to execute the query against the cluster
// save the remote cached value locally
var fct_cache = {}; // results will be cached in this object
var fct_isCache = true;

function removeCacheItem(id){
  try{
    resp = localStorage.removeItem(id);
  }
  catch(err){ // TODO: what if localstorage is available, but something else went wrong on this try
    delete cache.id;
  }
}

function fct_removeVariableData(query){
  query.find('*').removeAttr('class');
  query.removeAttr('timeout');
  return query;
}

function fct_query(q, viewType, opt){
  fct_isCache = $('#isCache').is(':checked');
  fct_isDebug = $('#isDebug').is(':checked');
  fct_queryTimeout = $('#queryTimeout :selected').attr('value');
  //console.clear();
  setViewType(viewType, q);
  //q = _root.find('query *').removeAttr('class'); // be sure semantically equivalent queries are non-unique
  //console.log('query: ' + _root.find('query').prop('outerHTML'));
  q = q.clone();
  if(fct_isDebug) console.log("Query: " + $(q).prop('outerHTML') );
  if(q.children.length == 2 && q.find('text').text() == '') q.find('text').remove(); // POI: root query should  have missing text element rather than blank text node, the /fct returns distinct results for each
  q = fct_removeVariableData(q);
  var qstr = q.prop('outerHTML');
  var id = (qstr) ? (qstr).hashCode() : 0;
  q.attr('timeout', fct_queryTimeout);
  var resp;
  if(fct_isCache){
    try{
      resp = localStorage.getItem(id);
    }
    catch(err){ // TODO: what if localstorage *is* available, but something else went wrong on this try
      resp = fct_cache[id];
    }
  }

  if (resp != null) { // if exist on cache
    switch(viewType){
      case VIEW_TYPE_LIST: {
        fct_handleListResults(resp, opt);
      } break;
      case VIEW_TYPE_LIST_COUNT: {
        fct_handleListCountResults(resp, opt);
      } break;
      case VIEW_TYPE_TEXT: {
        fct_handleTextResults(resp, opt);
      }; break;
      case VIEW_TYPE_CLASSES: {
        fct_handleClassesResults(resp, opt);
      }; break;
      case VIEW_TYPE_PROPERTIES: {
        fct_handlePropertiesResults(resp, opt);
      }; break;
      case VIEW_TYPE_PROPERTIES_IN: {
        fct_handlePropertiesInResults(resp, opt);
      }; break;
      case VIEW_TYPE_TEXT_PROPERTIES: {
        fct_handleTextPropertiesResults(resp, opt);
      }; break;
      case VIEW_TYPE_GRAPHS: {
        fct_handleGraphResults(resp, opt);
      }; break;
    }
    fct_updatePermalink();
    return;
  }
  var req = $.ajax({
    url: fct_dataSpace,
    data: $(q).prop('outerHTML'),
    type: 'POST',
    contentType: "text/xml",
    dataType: "text", // POI: can't do dataType: xml, since the service sometimes returns malformed XML
    cache: fct_isCache,
    success : function(xml) {
      //xml = xml.replace('fct:','');

      /* there's a bug that causes "filter ..." to appear at the beginning of the response body, sometimes
      for example, this query

      <query class='0'><text class="1">Sherman</text><property iri="http://www.openlinksw.com/schema/attribution#providedBy"><value iri="http://www.linkedin.com#this" datatype="uri"></value></property><view class="2" limit="30" type="list-count" offset="0"></view></query>

      */
      if(!xml.startsWith('<')) xml = xml.substring(xml.indexOf('<'));
      xml = xml.replace('fct:facets ', 'fct:facets fct:timestamp="' + new Date().getTime() + '" ')

      //console.log("it works");

      fct_sparql = getSparql(xml);
      fct_time = getTime(xml);
      fct_complete = getComplete(xml);
      fct_timeout = getTimeout(xml);
      fct_dbActivity = getDbActivity(xml);
      /**/
      if(fct_isDebug){
        console.log("Sparql: " + fct_sparql );
        console.log("Time: " + fct_time );
        console.log("Complete: " + fct_complete );
        console.log("Timeout: " + fct_timeout );
        console.log("Db Activity: " + fct_dbActivity );
        console.log("View Type: " + viewType);
      }

      if(fct_complete === 'no') {
        fct_handleIncompleteResults($("fct\\:row", xml).length, opt, viewType, fct_sparql, fct_time, fct_complete, fct_timeout, fct_dbActivity);
        if(fct_isDebug) console.log('Results incomplete! Cache id: ' + id); // TODO: need to handle this by asking the user to increase the timeout of this query
      }
      if(fct_complete === 'yes' || isAcceptableResults($("fct\\:row", xml).length)) { // POI: don't cache incomplete results, should this be the policy? I clicked phone on the below link, and got no results and incomplete error, but it cached the results
        // so I had to turn cache off (or increase timeout) to get the actual list, but when I turn cache back on, I get the empty results that were cached on the timeout response
        // http://myopenlink.net/DAV/home/sdmonroe/poc_draft.html?groupBy=GROUPBY-NONE&showMe=properties&qxml=%3Cquery%20class%3D%220%22%20graph%3D%22%22%20graphlabel%3D%22%22%3E%3Cclass%20class%3D%22-589865979%22%20iri%3D%22http%3A%2F%2Flinkedgeodata.org%2Fontology%2FShop%22%20label%3D%22Shop%22%3E%3C%2Fclass%3E%3Ctext%20class%3D%221%22%20label%3D%22%22%3E%3C%2Ftext%3E%3Cview%20class%3D%222%22%20limit%3D%2230%22%20type%3D%22properties%22%20offset%3D%220%22%3E%3C%2Fview%3E%3C%2Fquery%3E

        if(fct_isCache){
          try{
            localStorage.setItem(id, xml);
          }
          catch(err){
            fct_cache[id] = xml;
          }
        }
      }

      switch(viewType){
        case VIEW_TYPE_LIST: {
          fct_handleListResults(xml, opt);
        } break;
        case VIEW_TYPE_LIST_COUNT: {
          fct_handleListCountResults(xml, opt);
        } break;
        case VIEW_TYPE_TEXT: {
          fct_handleTextResults(xml, opt);
        }; break;
        case VIEW_TYPE_CLASSES: {
          fct_handleClassesResults(xml, opt);
        }; break;
        case VIEW_TYPE_PROPERTIES: {
          fct_handlePropertiesResults(xml, opt);
        }; break;
        case VIEW_TYPE_PROPERTIES_IN: {
          fct_handlePropertiesInResults(xml, opt);
        }; break;
        case VIEW_TYPE_TEXT_PROPERTIES: {
          fct_handleTextPropertiesResults(xml, opt);
        }; break;
        case VIEW_TYPE_GRAPHS: {
          fct_handleGraphResults(xml, opt);
        }; break;
      }

    },
    error : function (xhr, ajaxOptions, thrownError){
      if(fct_isDebug){
        console.log(xhr.status);
        console.log(thrownError);
        if(xhr.status == 500) alert('Server error');
      }
      fct_handleError(xhr, ajaxOptions, thrownError);
    }
  });
  fct_updatePermalink();
  return req;
}

function isAcceptableResults(sz){
  return sz >= 0.7 * SIZE_RESULT_SET;
}

function fct_handleIncompleteResults(resultSize, opt, viewType, fct_sparql, fct_time, fct_complete, fct_timeout, fct_dbActivity){
  if(resultSize > 0) return;
  $('#timeoutLabel').addClass('incompleteAlert');

  var componentId;
  switch(viewType){
    case VIEW_TYPE_LIST: {
      componentId = 'groupByTable';
    } break;
    case VIEW_TYPE_LIST_COUNT: {
      if(!opt) {
        componentId = 'groupByMenu';
      }
      else {
        if(opt.tag == TAG_PROPERTY){
          componentId = 'showMeTable';
        }
        else if(opt.tag == TAG_PROPERTY_OF){
          componentId = 'showMeTable';
        }
        else if(opt.tag == TAG_CLASS){
          componentId = 'showMeTable';
        }
        else{
          componentId = 'groupByTable';
        }
      }

    } break;
    case VIEW_TYPE_TEXT: {
      componentId = 'groupByTable';
    }; break;
    case VIEW_TYPE_CLASSES: {
      componentId = 'showMeTable';
    }; break;
    case VIEW_TYPE_PROPERTIES: {
      if(opt == OPT_SEND_TO_GROUP_BY){
        componentId = 'groupByTable';
      }
    }; break;
    case VIEW_TYPE_PROPERTIES_IN: {
      componentId = 'showMeTable';
    }; break;
    case VIEW_TYPE_TEXT_PROPERTIES: {
      componentId = 'showMeTable';
    }; break;
    case VIEW_TYPE_GRAPHS: {
      componentId = 'showMeTable';
    }; break;
  }

  $('#'+componentId).addClass('incompleteComponentAlert');
  setTimeout(function(){
    $('#timeoutLabel').removeClass('incompleteAlert');
    $('#'+componentId).removeClass('incompleteComponentAlert');
  }, 2000);
}


function fct_handleError(xhr, ajaxOptions, thrownError){
  $('*').removeClass('loading');
}

function fct_updatePermalink(){
  $('#permalink').attr('href', this_endpoint + '?' +
    '&dataSpace=' + encodeURIComponent( $('#dataSpaceMenu :selected').attr('value') ) +
    '&groupBy=' + encodeURIComponent( $('#groupByMenu :selected').attr('value') ) +
    '&showMe=' + $('#showMeMenu :selected').attr('value') +
    '&qxml=' + encodeURIComponent(_root.find('query').prop('outerHTML'))
  ); //+ '&idCt=' + idCt


  // TODO: this only works in HTML5 compatible browsers, need to support older browsers also

  if(!fct_isDebug){
    history.pushState(
      {},
      'VIOS: ' + _root.find('query text').text(),
      $('#permalink').attr('href')
    );
  }
}

function fct_handleListResults(xml, opt){
  if(!opt) {
  }
  else {
    loadInstances(xml, opt);
    $('#' + opt.parentId).removeClass('loading');
    $('#keywords').removeClass('loading');
  }
}

function fct_handleListCountResults(xml, opt){
  if(!opt) {
    $('#describe').attr('src', '');
    //  $('#'+viewType+'').empty();
    loadGroupByResults(xml);
    $('#groupByMenu').removeClass('loading');
    $('#keywords').removeClass('loading');
  }
  else {
    if(opt.tag == TAG_PROPERTY){
      loadPropertyValues(xml, opt);
      $('#' + opt.parentId).removeClass('loading');
      $('#keywords').removeClass('loading');
    }
    else if(opt.tag == TAG_PROPERTY_OF){
      loadPropertyOfValues(xml, opt);
      $('#' + opt.parentId).removeClass('loading');
      $('#keywords').removeClass('loading');
    }
    else if(opt.tag == TAG_CLASS){
      loadClassInstances(xml, opt);
      $('#' + opt.parentId).removeClass('loading');
      $('#keywords').removeClass('loading');
    }
  }
}

function fct_handleTextResults(xml, opt){
  loadTextResults(xml);
  $('#groupByMenu').removeClass('loading');
  $('#keywords').removeClass('loading');
  //fct_updatePermalink();
}

function fct_handleClassesResults(xml, opt){
  loadCategoriesResults(xml);
  $('#showMeMenu').removeClass('loading');
}

function fct_handlePropertiesResults(xml, opt){
  if(opt == OPT_SEND_TO_GROUP_BY){
    // $('#'+viewType+'').empty();
    loadGroupByMenu(xml);
    $('#groupByMenu').removeClass('loading');

    if(qGroupBy && qGroupBy.length > 0){
      var qgb = decodeURIComponent(qGroupBy);
      selectMenuItem('groupByMenu', qgb);
      //selectGroupBy(true);
      //if(isDebug) console.log('groupByLoaded: ' + qgb + ', old value:' + qGroupBy);
      //doQuery(keywords);
      //selectGroupBy();
    }
    else {
      //if(isDebug) console.log('groupByNotLoaded: ' + qgb + ', old value:' + qGroupBy);
    }

  }
  else {
    loadPropertiesResults(xml);
    $('#showMeMenu').removeClass('loading');
  }
}

function fct_handlePropertiesInResults(xml, opt){
  loadPropertiesInResults(xml);
  $('#showMeMenu').removeClass('loading');
}

function fct_handleTextPropertiesResults(xml, opt){
  loadPropertiesResults(xml);
  $('#showMeMenu').removeClass('loading');
}

function fct_handleGraphResults(xml, opt){
  loadGraphResults(xml);
  $('#showMeMenu').removeClass('loading');
}

function hasMainFocus(id){
  //if(id == ID_TEXT) id = ID_QUERY;
  var test = $(_root.find('.'+ID_QUERY+ ' view')).parent();
  var ret = test.attr('class');
  /*if($(test).attr('class') == ID_TEXT){
    ret = q.find('view');
    //console.log('query ('+ret+'): ' + query.html());
  }*/
  return ret == id;
}

function getMainFocus(){
  return $(_root.find('.'+ID_QUERY + ' view')).parent();
}

function getFocus(q){
  return q.find('view').parent();
}

function takeFocus(tar, q){
  //console.log('tarid: ' + $(tar).attr('class') + ' qId: ' + $(q).attr('class'));
  $(q).find('view').appendTo(tar);
}

function takeMainFocus(id){

  //if(id == ID_TEXT) id = ID_QUERY;
  takeFocus( _root.find('.'+id), getFocus(query));
  //console.log('query after take focus: ' + $('query').html());

  getFocus(query).find('view').attr('offset', 0);
  getMainFocus().find('view').attr('offset', 0);
  page = 0;


  doQuery(getQueryText());
  //$('#breadcrumbs').find('td').removeClass('focus');
  //$('#facetCollector').find('td').removeClass('focus');
  //$('#nav'+((id == ID_QUERY) ? ID_TEXT : id) ).addClass('focus');

}

function remove(id){
  // give focus to parent if hasFocus
  // remove from the query
  // remove from breadcrumbs and facetCollector
  // re-run the query
  //query = _root.find('query');

  if(id == ID_QUERY) {
    if(!_root.find('query').attr('graph') || _root.find('query').attr('graph').length <= 0){ // POI: in the directory structure, the graph is below the keywords, and repository is above the keywords, and root is root
      $(_root.find('query text')).remove(); // POI: the /fct API returns different results depending on if <text> has empty string value, or if <text> is missing
      clearKeywords();
    }
    else{
      clearQueryGraph();
    }
  }
  else {
    takeMainFocus($(_root.find('.'+id )).parent().attr('class'));
    $(_root.find('.'+id )).remove();
  }

  doQuery(getQueryText());

}

function removeValue(id){
  var tar = _root.find('.'+id + ' > value')
  if(tar.length > 0) tar.remove();
  else{
    tar = _root.find('.'+id + ' > class')
    if(tar.length > 0) tar[0].remove();
  }
  //query = _root.find('query');
  doQuery(getQueryText());
}

function setValue(id, val, valLabel, datatype){
  val = deSanitizeLabel(val);
  valLabel = deSanitizeLabel(valLabel);
  var p = getMainFocus();

  //if(p.attr('id') == ID_QUERY) clearKeywords();

  var v_found = false;
  var v = _root.find('.'+p.attr('class') + ' > value');
  if(v.length <= 0) {
    v = $.createElement('value');
  }
  else v_found = true;
  v.attr('label', valLabel);
  v.text(val);
  if(datatype && datatype.length > 0) v.attr('datatype', datatype);
  //v.attr('same_as', 'yes');
  _root.find('.'+p.attr('class')).append(v);


  getFocus(query).find('view').attr('offset', 0);
  getMainFocus().find('view').attr('offset', 0);
  page = 0;

  //if(fct_isDebug) console.log('setView query: ' + query.html());
  //query = _root.find('query');

  doQuery(getQueryText());

  //getFocus(query).append(p);
}

function setPropertyValue(id, nodeName, contextId, propIRI, propLabel, val, valLabel, datatype){
  val = deSanitizeLabel(val);
  valLabel = deSanitizeLabel(valLabel);
  var p = $.createElement(nodeName); // nodeName is property or property-of
  p.attr('class', contextId);
  p.attr('iri', propIRI);
  p.attr('label', propLabel);

  if(contextId == ID_QUERY) clearKeywords();

  var v = $.createElement('value');
  v.attr('class', id);
  v.attr('label', valLabel);
  v.text(val);
  if(datatype && datatype.length > 0) v.attr('datatype', datatype);
  p.append(v);
  getFocus(query).append(p);

  getFocus(query).find('view').attr('offset', 0);
  getMainFocus().find('view').attr('offset', 0);
  page = 0;

  //if(fct_isDebug) console.log('setView query: ' + query.html());
  //query = _root.find('query');

  doQuery(getQueryText());

  //getFocus(query).append(p);
}

function addPropertyFacet(id, prop, propLabel, val, valLabel, datatype){
  if(val) val = deSanitizeLabel(val);
  var p = $.createElement('property');
  p.attr('class', id);
  p.attr('iri', prop);
  p.attr('label', propLabel);
  if(val){
    var v = $.createElement('value');
    v.attr('label', valLabel);
    v.text(val);
    if(datatype && datatype.length > 0) v.attr('datatype', datatype);
    //v.attr('same_as', 'yes');
    p.append(v);
  }
  //prop.attr('exclude', 'yes');
  //console.log('focus: ' + getFocus().attr('label'));

  getFocus(query).find('view').attr('offset', 0);
  getMainFocus().find('view').attr('offset', 0);
  page = 0;

  getFocus(query).append(p);
  //takeFocus(p, getFocus(query));
  //takeFocus(query, getFocus(query));
  doQuery(getQueryText());
}

function addPropertyOfFacet(id, prop, propLabel, val, valLabel, datatype){
  if(val) val = deSanitizeLabel(val);
  var p = $.createElement('property-of');
  p.attr('class', id);
  p.attr('iri', prop);
  p.attr('label', propLabel);
  if(val){
    var v = $.createElement('value');
    v.attr('label', valLabel);
    v.text(val);
    if(datatype && datatype.length > 0) v.attr('datatype', datatype);
    //v.attr('same_as', 'yes');
    p.append(v);
  }
  //prop.attr('exclude', 'yes');
  //console.log('focus: ' + getFocus().attr('label'));

  getFocus(query).find('view').attr('offset', 0);
  getMainFocus().find('view').attr('offset', 0);
  page = 0;

  getFocus(query).append(p);
  //takeFocus(p, getFocus(query));
  //takeFocus(query, getFocus(query));
  doQuery(getQueryText());
}

function addClassFacet(id, clazz, label){
  //clazz = deSanitizeLabel(clazz);
  var c = $.createElement('class');
  c.attr('class', id);
  c.attr('iri', clazz);
  c.attr('label', label);
  //prop.attr('exclude', 'yes');
  //console.log('focus: ' + getFocus().attr('label'));

  getFocus(query).find('view').attr('offset', 0);
  getMainFocus().find('view').attr('offset', 0);
  page = 0;

  getFocus(query).prepend(c); // POI: 'prepend' to ensure the last one added is the first returned by $.find() 
  //takeFocus(p, getFocus(query));
  //takeFocus(query, getFocus(query));
  doQuery(getQueryText());
}

function setGraphFacet(graph, graphLabel){
  setQueryGraph(graph, graphLabel);
  doQuery(getQueryText());
}

function removeGraphFacet(graph){
  clearQueryGraph();
  doQuery(getQueryText());
}
