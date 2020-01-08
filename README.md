# FacetJsClient

2019-Nov-07  
CMSB

A Javascript client for the Virtuoso [Faceted Browsing Service](http://vos.openlinksw.com/owiki/wiki/VOS/VirtuosoFacetsWebService).

FacetJsClient is a Javascript interface to Virtuoso's `/fct/service`.
It is based on the Facet interface used by [VIOS](https://github.com/Vacuity/vios-angular-app), but was written with the aim of creating a client library with no UI dependencies; so that it can be used by any UI framework.

## Setup & Testing
A [Karma](https://karma-runner.github.io/3.0/index.html) test setup is included for testing of the library from within a browser, [Headless Chrome](https://developers.google.com/web/updates/2017/06/headless-karma-mocha-chai) in this case.

* Install the required npm modules using `npm install`.
* To run the tests:
  * Edit `test/test.conf.js` so that `fct_test_endpoint` points to the URL of your test Facet service endpoint. (Default: `http://localhost:8896/fct/service`)
  * `npm test`
* To run the tests in debug mode to allow debugging using Chrome Dev Tools debugger
  * `npm run debug`
  * Point your browser to `http://localhost:9876`, set a breakpoint then refresh the page
* To generate the JSDoc documentation
  * `npm run doc`

## General Approach

The client library includes two main classes: `FctQuery` and `FctResult`.

`FctQuery` builds an XML request body for execution by `/fct/service`. The XML request payload is described by [Faceted Browsing Service](http://vos.openlinksw.com/owiki/wiki/VOS/VirtuosoFacetsWebService). Different elements and attributes of the XML payload are created, read, updated or deleted by various `FctQuery` methods and accessors. The general approach is to use JQuery for manipulating the input XML. To submit the XML request and execute the contained query, use `FctQuery#execute`. On successful execution, `FctQuery#execute` returns a `FctResult` object.

`FctResult` holds the XML response in property `xml`. Rather than use JQuery to retrieve values from the XML, the response is also converted to a Javascript object using [JXON](https://developer.mozilla.org/en-US/docs/Archive/JXON), to allow for easy consumption by a JS client application. This Javascript object is accessible through property `json`. Different properties of the Javascript object, corresponding to different XML elements in the XML response, can be retrieved through various `FctResult` accessors.

`FctQuery#execute` actually returns a Promise which, when fulfilled, returns a `FctResult`. To trigger `FctQuery#execute` from an event handler, use something like:

```
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
```


