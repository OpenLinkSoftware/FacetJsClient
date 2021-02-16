import JXON from '../src/JXON.js';
import { FctResult } from '../src/FctResult.js';

import fakeQry1Response from './fixtures/fct_qry_1_viewtype_text-result.js';
import viewLvl3Request from './fixtures/fct_qry_2_viewtype_list-viewlevel_3-request.js';
import viewLvl3bRequest from './fixtures/fct_qry_3_viewtype_list-viewlevel_3b-request.js';

let qry1Response = FctResult.stripNamespace(fakeQry1Response).replace(/\n/g, '').trim();

describe('JXON', () => {
  describe('#build', () => {
    it('should build a JS object from a simple XML document', () => {
      let testXml = `
        <mydoc>
        <myboolean>true</myboolean>
          <myarray>Cinema</myarray>
          <myarray>Hot dogs</myarray>
          <myarray>false</myarray>
          <myobject>
            <nickname>Jack</nickname>
            <registration_date>Dec 25, 1995</registration_date>
            <privileged_user />
          </myobject>
          <mynumber>99</mynumber>
          <mytext>Hello World!</mytext>
          </mydoc>
      `;

      let domParser = new DOMParser();
      let xmlDoc = domParser.parseFromString(testXml, "text/xml");
      let jxon = new JXON();
      let jsObj = jxon.build(xmlDoc);
      // console.log('jsObj: ', JSON.stringify(jsObj, null, 2));
      expect(Array.isArray(jsObj.mydoc.myarray)).to.be.true;
      expect(jsObj.mydoc.myarray.length).to.equal(3);
    })
  })
})

describe('JXON', () => {
  describe('#build', () => {
    it('should build a JS object from a Facet XML result', () => {
      let domParser = new DOMParser();
      let xmlDoc = domParser.parseFromString(qry1Response, "application/xml");
      let jxon = new JXON();
      let jsObj = jxon.build(xmlDoc);
      // console.log('jsObj: ', JSON.stringify(jsObj, null, 2));
      expect(jsObj.facets.result.row instanceof Array).to.be.true;
      expect(jsObj.facets.result.row.length).to.be.above(0);
    })
  })
})

describe('JXON', () => {
  describe('#build', () => {
    it('should build a JS object from a Facet XML view level 3b request', () => {
      let domParser = new DOMParser();
      let xmlDoc = domParser.parseFromString(viewLvl3bRequest, "application/xml");
      let jxon = new JXON();
      let jsObj = jxon.build(xmlDoc);
      // console.log('jsObj: ', JSON.stringify(jsObj, null, 2));
      expect(jsObj.query.property.property[1].property["@iri"]).to.equal("http://schema.org/material");

      let xmlFromJson = jxon.unbuild(jsObj);
      let re = new RegExp('<query.+><class.+><property iri="http://schema.org/makesOffer">');
      let strXml = new XMLSerializer().serializeToString(xmlFromJson);
      expect(re.test(strXml)).to.be.true;
    })
  })
})

describe('JXON', () => {
  describe('#build', () => {
    it('should build a JS object from a Facet XML view level 3 request', () => {
      let domParser = new DOMParser();
      let xmlDoc = domParser.parseFromString(viewLvl3Request, "application/xml");
      let jxon = new JXON();
      let jsObj = jxon.build(xmlDoc);
      // console.log('jsObj: ', JSON.stringify(jsObj, null, 2));
      expect(jsObj.query.property.property["@iri"]).to.equal("http://www.openlinksw.com/schemas/twitter#follows");

      let xmlFromJson = jxon.unbuild(jsObj);
      // console.log('xmlFromJson: ', xmlFromJson);
      let re = new RegExp('<query.+>.+<property iri="http://schema.org/mentions"><property iri="http://www.openlinksw.com/schemas/twitter#follows">');
      let strXml = new XMLSerializer().serializeToString(xmlFromJson);
      expect(re.test(strXml)).to.be.true;
    })
  })
})