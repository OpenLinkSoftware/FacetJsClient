# FacetJsClient

2021-Feb-09  
CMSB

A Javascript client for the [Virtuoso Faceted Browsing Service](http://vos.openlinksw.com/owiki/wiki/VOS/VirtuosoFacetsWebService).

FacetJsClient is a Javascript interface to Virtuoso's /fct/service. It aims to be a client library with no UI dependencies with a view to it being usable by any UI framework. [FacetReactClient](https://github.com/cblakeley/FacetReactClient) provides a React-based UI to the Virtuoso Faceted Browsing Service, using FacetJsClient for its underpinnings.

See also:

  * branch [develop](https://github.com/OpenLinkSoftware/FacetJsClient/tree/develop)
  * [JSDoc documentation](https://www.openlinksw.com/DAV/Public/FacetJsClient/doc/index.html)

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

