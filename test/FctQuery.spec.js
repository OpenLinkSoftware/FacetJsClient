import { FctQuery } from '../src/FctQuery.js';
import { FctResult } from '../src/FctResult.js';
import { fct_test_env }  from './test.conf.js';
import $ from "../src/jquery.module.js";

import fixtureFctQry1 from './fixtures/fct_qry_1_viewtype_classes-request.js';
import fixtureFctQry2 from './fixtures/fct_qry_2_viewtype_list-viewlevel_3-request.js';
import fixtureFctQry3 from './fixtures/fct_qry_3_viewtype_list-viewlevel_3b-request.js';
import fixtureFctQry4 from './fixtures/fct_qry_4_viewtype_list-request.js';

describe('FctQuery', () => {
  describe('#constructor', () => {
    it('should return a partially formed query element', () => {
      let fctQuery = new FctQuery();
      let queryXml = fctQuery.toXml();
      assert.equal(
        ('<?xml version="1.0"?>' +
          '<query xmlns="http://openlinksw.com/services/facets/1.0">' +
          '<view type="text" limit="" offset="">' +
          '</view>' +
          '</query>').trim(),
        queryXml);
    });
  });

  describe('#queryText (set)', () => {
    it('should set the query text', () => {
      const fctQuery = new FctQuery();
      const qryTxt = 'Linked Data';
      fctQuery.queryText = qryTxt;
      expect(fctQuery.queryText).to.equal(qryTxt);
    });
  });

  describe('#queryText()', () => {
    it('should return the set query text', () => {
      const fctQuery = new FctQuery();
      fctQuery.queryText = 'linked data';
      expect(fctQuery.queryText).to.equal('linked data');
    });
    it('should return an empty string if element <text> is removed', () => {
      const fctQuery = new FctQuery();
      fctQuery.queryText = 'linked data';
      expect(fctQuery.queryText).to.equal('linked data');
      fctQuery.removeQueryText();
      expect(fctQuery.queryText).to.equal('');
    });
    it('should return an empty string if element <text> is not present', () => {
      const fctQuery = new FctQuery();
      expect(fctQuery.queryText).to.equal('');
    });
  });

  describe('#setViewLimit', () => {
    it('should set the query view limit', () => {
      const fctQuery = new FctQuery();
      const limit = 15;
      fctQuery.setViewLimit(limit);
      // assert.equal(fctQuery.getViewLimit(), limit);
      expect(fctQuery.getViewLimit()).to.equal(limit);
    });

    it.skip('should reject a negative limit', () => {
      // TO DO
    });

    it.skip('should error if the view element is not present', () => {
      // TO DO
      // Delete the view element prior to setting a limit
    });
  });

  describe('#setSameAs/#getSameAs/#removeSameAs', () => {
    it("should return null if 'same-as' attribute is absent", () => {
      const fctQuery = new FctQuery();
      expect(fctQuery.getSameAs()).to.be.null;
    });
    
    it("should set 'same-as' attribute to 'yes' or 'no'", () => {
      let regex; 
      const fctQuery = new FctQuery();

      fctQuery.setSameAs(true);
      regex = new RegExp(/same-as="yes"/);
      expect(regex.test(fctQuery.toXml())).to.be.true;

      fctQuery.setSameAs(false);
      regex = new RegExp(/same-as="no"/);
      expect(regex.test(fctQuery.toXml())).to.be.true;
    });

    it("should return null if 'same-as' attribute is removed", () => {
      const fctQuery = new FctQuery();
      fctQuery.setSameAs(true);
      expect(fctQuery.getSameAs()).to.be.true;
      fctQuery.removeSameAs();
      expect(fctQuery.getSameAs()).to.be.null;
    });
  });

  describe.skip('#execute', () => {
    it('should return a FctResult instance on success', async () => {
      const fctQuery = new FctQuery();
      fctQuery.setServiceEndpoint(fct_test_env.fct_test_endpoint);
      fctQuery.queryText = 'virtuoso';
      fctQuery.setViewLimit(50);

      const qryResult = await fctQuery.execute();
      // console.log('#execute: qryResult:', qryResult);
      expect(qryResult instanceof FctResult).to.be.true;
      expect(/^select /.test(qryResult.sparql)).to.be.true;
    });
  });

  describe('#getViewSubjectIndex', () => {
    it('should return the index of the current implicit subject node', () => {
      let fctQuery;
      fctQuery = new FctQuery(fixtureFctQry1);
      expect(fctQuery.getViewSubjectIndex()).to.equal(1);
      fctQuery = new FctQuery(fixtureFctQry2);
      expect(fctQuery.getViewSubjectIndex()).to.equal(3);
      fctQuery = new FctQuery(fixtureFctQry3);
      expect(fctQuery.getViewSubjectIndex()).to.equal(4);
    });
  });

  describe('#setViewSubjectIndex', () => {
    it('should change the index of the current implicit subject node', () => {
      let fctQuery;
      fctQuery = new FctQuery(fixtureFctQry3);
      expect(fctQuery.getViewSubjectIndex()).to.equal(4);
      
      fctQuery.setViewSubjectIndex(1);
      // console.log(fctQuery.toXml());
      expect(fctQuery.getViewSubjectIndex()).to.equal(1);

      fctQuery.setViewSubjectIndex(3);
      // console.log(fctQuery.toXml());
      expect(fctQuery.getViewSubjectIndex()).to.equal(3);

      expect(() => fctQuery.setViewSubjectIndex(0)).to.throw();
      expect(() => fctQuery.setViewSubjectIndex(99)).to.throw();
    });
  });

  describe.only('#queryFilterDescriptors', () => {
    it('should provide SPARQL-like filter descriptors for fixture FctQry3', () => {
      let fctQuery = new FctQuery(fixtureFctQry3);
      let rFilterDesc = fctQuery.queryFilterDescriptors();

      expect(rFilterDesc.length).to.equal(8);
      /* TO DO: Add assertions
      expect(rFilterDesc[0].text).to.equal('?s1 is a <http://schema.org/Business>');
      expect(rFilterDesc[1].text).to.equal('?s1 <http://schema.org/makesOffer> ?s2');
      expect(rFilterDesc[2].text).to.equal('?s2 <http://schema.org/businessFunction> ?s3');
      expect(rFilterDesc[3].text).to.equal('?s3 = <http://purl.org/goodrelations/v1#Dispose>');
      expect(rFilterDesc[4].text).to.equal('?s2 <http://schema.org/itemOffered> ?s4');
      expect(rFilterDesc[5].text).to.equal('?s4 is a <http://schema.org/Product>');
      expect(rFilterDesc[6].text).to.equal('?s4 <http://schema.org/material> ?s5');
      expect(rFilterDesc[7].text).to.equal('?s5 = "asbestos"');
      */

      for (const filterDesc of rFilterDesc)
      {
        console.log('-- Filter ----------------------------');
        console.log(JSON.stringify(filterDesc, null, '  '));
      };
    });

    it('should provide SPARQL-like filter descriptors for fixture FctQry4', () => {
      let fctQuery = new FctQuery(fixtureFctQry4);
      let rFilterDesc = fctQuery.queryFilterDescriptors();

      // expect(rFilterDesc.length).to.equal(8); // TO DO - Add assertions

      for (const filterDesc of rFilterDesc)
      {
        console.log('-- Filter ----------------------------');
        console.log(JSON.stringify(filterDesc, null, '  '));
      };

    });

  });

});

