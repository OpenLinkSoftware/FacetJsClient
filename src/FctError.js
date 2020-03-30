import JXON from "./JXON.js";

/**
 * Represents a Facet error reported by the Facet service.
 */
export class FctError extends Error {

  /** 
   * An error object describing a error returned by the Facet service in response to
   * a failed Facet service HTTP request.
   * 
   * @param {string} message - Error message.
   * @param {string} httpStatusText - The HTTP status text corresponding to the HTTP status code. 
   * @param {number} httpStatusCode - The HTTP status code returned by the server.
   * @param {string} responseText - The response body as text.
   * @param {string} [responseXml] -  The response body as XML (if available)
   * 
   * @description
   * responseText may contain XML. If so, this is contained as parsed XML in responseXml.
   * responseXml is converted to a JS object contained in responseJson. responseJson represents
   * a Facet server error, described by property 'error'.
   * <ul>
   *   <li>error - An object containing the following properties:
   *     <ul>
   *       <li>code - The Virtuoso error code.</li>
   *       <li>message - A short server message.</li>
   *       <li>diagnostics - Detailed information about the error source.</li>
   *     </ul>
   *   </li>
   * </ul>
   * 
   * @see FctQuery#execute
   */
  constructor(message, httpStatusText, httpStatusCode, responseText, responseXml) {
    super(message);
    this.name = 'FctError';
    this.httpStatusText = httpStatusText;
    this.httpStatusCode = httpStatusCode;
    this.responseText = responseText ? responseText.trim() : responseText;
    this.responseJson = null;

    if (responseXml) {
      try {
        this.responseJson = (new JXON).build(responseXml);
      }
      catch (e) {
      }
    }
  }
}