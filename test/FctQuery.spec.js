import { FctQuery } from '../src/FctQuery.js';
import { FctResult } from '../src/FctResult.js';
import FctUiUtil from '../src/FctUiUtil.js';
import { fct_test_env }  from './test.conf.js';
import $ from "../src/jquery.module.js";

import fixtureFctQry1 from './fixtures/fct_qry_1_viewtype_classes-request.js';
import fixtureFctQry2 from './fixtures/fct_qry_2_viewtype_list-viewlevel_3-request.js';
import fixtureFctQry3 from './fixtures/fct_qry_3_viewtype_list-viewlevel_3b-request.js';

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

  describe('#queryDescription', () => {
    it('should provide a SPARQL-like description of the query expressed by the XML', () => {
      let fctQuery = new FctQuery(fixtureFctQry3);
      let fctUiUtil = new FctUiUtil();
      let qryDesc = fctQuery.queryDescription(fctUiUtil);

      /* 
      for (const htmlSnippet of qryDesc)
      {
        console.log();
        console.log('------------------------------');
        console.log('Snippet:');
        console.log(JSON.stringify(htmlSnippet, null, '  '));
      };
      */

      expect(qryDesc.length).to.equal(8);
      expect(qryDesc[0].text).to.equal('?s1 is a <http://schema.org/Business>');
      expect(qryDesc[1].text).to.equal('?s1 <http://schema.org/makesOffer> ?s2');
      expect(qryDesc[2].text).to.equal('?s2 <http://schema.org/businessFunction> ?s3');
      expect(qryDesc[3].text).to.equal('?s3 = <http://purl.org/goodrelations/v1#Dispose>');
      expect(qryDesc[4].text).to.equal('?s2 <http://schema.org/itemOffered> ?s4');
      expect(qryDesc[5].text).to.equal('?s4 is a <http://schema.org/Product>');
      expect(qryDesc[6].text).to.equal('?s4 <http://schema.org/material> ?s5');
      expect(qryDesc[7].text).to.equal('?s5 = "asbestos"');
    });
  });

  describe.only('#queryDescriptionAttachActions', () => {
    it('TO DO: REMOVE', () => {
      let fctQuery = new FctQuery(fixtureFctQry3);
      let fctUiUtil = new FctUiUtil();
      let qryDesc = fctQuery.queryDescription(fctUiUtil);

      // ISSUE: This replaces all hrefs in the template, not a selected href.
      let qryDescSetNoOpHref = (qryDesc) => {
        if (qryDesc.template.includes('{{href}}')) {
          qryDesc.template = qryDesc.template.replace(/\{\{href\}\}/g, '#');
        }
      };

      // ISSUE: This sets the handler for all hrefs in the template, not a selected href.
      let qryDescSetClickHndlr = (qryDesc, onClickAttrVal) => {
        if (qryDesc.template.includes('<a ')) {
          qryDesc.template = qryDesc.template.replace(/<a /, `<a onClick=${onClickAttrVal} `);
        }
      };

      // !!!! Instead of handleClick  use React router with query params
      // !!!! https://learnwithparam.com/blog/how-to-handle-query-params-in-react-router/

      // console.log('qryDesc:',  qryDesc);
      for (const desc of qryDesc)
      {
        console.log();
        console.log('------------------------------');
        console.log('Snippet:');
        console.log(JSON.stringify(desc, null, '  '));

        qryDescSetNoOpHref(desc);
        qryDescSetClickHndlr(desc, "{handleClick}");
        console.log('New template: ', desc.template);

        /*
        if (desc.actionContexts) {
          let htmlSnippet = desc.template;
          for (const ac of desc.actionContexts) {
            ;
          }
        }
       */
      }

      expect(qryDesc.length).to.equal(8);
    });
  });

});

