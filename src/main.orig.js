//** FILE: main.js **/

var GROUP_BY_NONE_LABEL = "no particular field";
var GROUP_BY_NONE_VALUE = "GROUPBY-NONE";

var GROUP_BY_TEXT_LABEL = "text matches";
var GROUP_BY_TEXT_VALUE = "GROUPBY-TEXT";

var ID_SHOW_ME = "showMe";
var ID_GROUP_BY = "groupBy";
var ID_RECORD = "record";
var ID_MY_RECORDS = "myRecords";

var VALUE_MANAGED_RECORD = "Managed Record";
var VALUE_RECORD_MANAGER = "Record Manager";

var VALUE_ANON_NODE = "[&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]";
var VALUE_KEYWORDS_TEXT = "Click 'Explore' to view root"
//var VALUE_ROOT = 'root';

var OPT_SEND_TO_GROUP_BY = 1;

var TAG_PROPERTY = 'p';
var TAG_PROPERTY_OF = 'q';
var TAG_CLASS = 'c';
var TAG_LIST = 'l';
var TAG_GRAPH = 'g';

var this_endpoint = "http://myopenlink.net/DAV/home/sdmonroe/poc_draft.html";
var qGroupBy, qShowMe, qdataSpace;


function init(){
  fct_init(); // this method must be the first method called by the implementation of the fct_ framework

  $('#keywords').val(VALUE_KEYWORDS_TEXT);
  $('#dsroot').attr('title', fct_dataSpace);

  qGroupBy = fct_getUrlParameter('groupBy'); // the loading of gGroupBy is done in doQuery
  qShowMe = fct_getUrlParameter('showMe');
  qdataSpace = fct_getUrlParameter('dataSpace');

  if(qdataSpace && qdataSpace.length > 0){
    selectMenuItem('dataSpaceMenu', qdataSpace);
  }
  if(qShowMe && qShowMe.length > 0) {
    selectMenuItem('showMeMenu', qShowMe);
    qShowMe = null;
  }
  if(fct_isPermalink) doQuery(getQueryText());
}

function clearKeywords(){
  $("#keywords").val('');
  _root.find('text').remove();
  //text=undefined;
}

function sanitizeLabel(label){
  label = label.split('\'').join("&amp;apos;");
  label = label.split('&#39;').join("&amp;apos;");
  label = label.replaceAll('"', '\"');
  label = label.replaceAll('\\', '\\\\');
  //label = label.split('_').join(" ");
  return label;
}

function deSanitizeLabel(label){
  label = label.split('&amp;apos;').join("\'");
  label = label.split('&amp;apos;').join("&#39;");
  return label;
}

function processLabel(label, value, datatype, labelSize){
  if(!labelSize) labelSize = SIZE_LABEL;
  label = label.trim();
  if(label.length <= 0){
    label = value;
  }
  if(label.lastIndexOf("/") == label.length - 1){
    label = label.substring(0, label.length-1);
  }
  else{
    label = label.substring(label.lastIndexOf("/")+1);
  }
  if(label.lastIndexOf("#") == label.length - 1){
    label = label.substring(0, label.length-1);
  }
  else{
    label = label.substring(label.lastIndexOf("#")+1);
  }

  if(label.length > 1) {
    if(label.length > labelSize){
      label = label.substring(0, labelSize) + " ...";
    }
    label = label.split('_').join(" ");
    // POI: remove reserved chars, these will change in PoC
    //label = label.replaceAll('/', ' - ');
    label = label.replaceAll('[', ' - ');
    label = label.replaceAll(']', ' - ');
    try{
      label = decodeURIComponent((label + '').replace(/\+/g, '%20'));
    }
    catch(err){

    }
  }
  return label;
}

function getHostName(url) {
  var match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
  if (match != null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0) {
    return match[2];
  }
  else {
    return null;
  }
}

function test(){
  // create 'Alice'
  var newProperty = $.createElement('property');
  // add 'name' element using standard jQuery
  newProperty.append($('<property />').text('Alice'));
  // add 'grade' element using our helper
  newProperty.append($.createElement('view').text(''));

  // add 'Alice' to <text />
  query.append(newProperty);

  // create 'Bob'
  newProperty = $.createElement('property-of');
  newProperty.append($('<value />').text('Bob'));
  newProperty.append($.createElement('value').text('Bob'));

  // add 'Bob' to <students />
  query.append(newProperty);

  // display the markup as text
  if(fct_isDebug) console.log(_root.html());
}


var idCt = 11; // numbers 1 - 10 are reserved
function createId(){
  //return idCt++;
  return uuid().hashCode(); // TODO: is there a less expensive way?
}

function uuid() {
  return crypto.getRandomValues(new Uint32Array(4)).join('-');
}

function doFirstKeywords(){
  if($('#keywords').val() == VALUE_KEYWORDS_TEXT) {
    $('#keywords').val('');
  }
  $('#keywords').removeClass('keywordsDefault');
}

function doExplore(keywords){
  if(keywords.startsWith('http://') || keywords.startsWith('https://')){
    //addPropertyFacet(createId(), '[rdf:type]', 'type');
    var p = $.createElement('property');
    p.attr('class', createId());
    p.attr('iri', '[rdf:type]');
    p.attr('label', 'type');
    //getQuery().append(p);
    setValue(0, keywords, processLabel(keywords), 'uri');
  }
  else {
    doQuery(keywords);
  }

}
var dqct = 0;
function doQuery(keywords){
  //console.log("keywords:" + keywords);
  setQueryText(keywords);

  //var q = query.clone();
  //selectMenuItem('groupByMenu', GROUP_BY_NONE_VALUE);

  $('#groupByMenu').addClass('loading');
  fct_query(query, VIEW_TYPE_PROPERTIES, OPT_SEND_TO_GROUP_BY);

  selectShowMe(false);


  // POI: load the groupby list concurrently except if this is the first
  // load of the page, and the 'groupBy' parameter is present, in this case
  // load the groupby list after the groupByMenu has finished loading, to
  // ensure the value of the 'groupBy' parameter is availiable in the drop-down
  //console.log('ct doQuery: ' + dqct);

  if(dqct == 2){ // POI: the initial load sequence is over after two calls to doQuery, if this fact ever changes, the groupby load from the permalink will break
    qGroupBy = undefined;
    $('#keywords').addClass('loading');
    fct_query(query, VIEW_TYPE_LIST_COUNT);
  }
  else {
    dqct++;
  }

  //clearKeywords();

  buildNavPath();
}

function selectMenuItem(id, value){
//  $('#'+id+' option[value=\''+ value +'\']').prop('selected', true); // POI: use escapeSelector if id=groupByMenu, since the values are URIs, which contain special chars
  $('#'+id).val(value).change(); // POI: use escapeSelector if id=groupByMenu, since the values are URIs, which contain special chars
}

function selectdataSpace(){
  fct_dataSpace = $('#dataSpaceMenu :selected').attr('value') + '/fct/service';
  doQuery(getQueryText());
}
