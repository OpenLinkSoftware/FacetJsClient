// See https://stackoverflow.com/questions/34338411/how-to-import-jquery-using-es6-syntax
import jQuery from '../lib/jquery.js'
window.$ = window.jQuery = jQuery
export default window.jQuery.noConflict(true)
