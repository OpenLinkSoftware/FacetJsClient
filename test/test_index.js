// See https://github.com/webpack/docs/wiki/usage-with-karma
//
// require all modules ending in ".spec.js" from the
// current directory and all subdirectories
//
// Every test file is required using the require.context and compiled with webpack into one test bundle.
var testsContext = require.context(".", true, /\.spec\.js$/);
testsContext.keys().forEach(testsContext);