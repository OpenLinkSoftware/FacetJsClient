import { 
    FctQuery, 
    DFLT_QUERY_TIMEOUT, DFLT_SERVICE_ENDPOINT, DFLT_VIEW_LIMIT, DFLT_VIEW_TYPE 
  } from '../src/FctQuery.js';
import { FctResult } from '../src/FctResult.js';
import { FctError } from '../src/FctError.js';
import { fct_test_env } from './test.conf.js';
import $ from "../src/jquery.module.js";

import fixtureFctQry1 from './fixtures/fct_qry_1_viewtype_classes-request.js';
import fixtureFctQry2 from './fixtures/fct_qry_2_viewtype_list-viewlevel_3-request.js';
import fixtureFctQry3 from './fixtures/fct_qry_3_viewtype_list-viewlevel_3b-request.js';
import fixtureFctQry4 from './fixtures/fct_qry_4_viewtype_list-request.js';
import fixtureFctQry5 from './fixtures/fct_qry_5_viewtype_list-request.js';
import fixtureFctQry6 from './fixtures/fct_qry_6_eq_condition-request.js';

describe('FctQuery', () => {
  describe('#constructor', () => {
    it('should return a partially formed query element', () => {
      let fctQuery = new FctQuery();
      let queryXml = fctQuery.toXml();
      let expectedQueryXml = '<?xml version="1.0"?>' +
        '<query xmlns="http://openlinksw.com/services/facets/1.0">' +
        `<view type="${fctQuery.getDefaultViewType()}" limit="${fctQuery.getDefaultViewLimit()}" offset="0">` +
        '</view>' +
        '</query>'.trim();
      assert.equal(expectedQueryXml, queryXml);
    });
  });

  describe('#addText', () => {
    it('should set the query text', () => {
      const fctQuery = new FctQuery();
      const qryTxt = 'Linked Data';
      fctQuery.addText(qryTxt);
      expect(fctQuery.getText()).to.equal(qryTxt);
    });
  });

  describe('#getText', () => {
    it('should return the set query text', () => {
      const fctQuery = new FctQuery();
      fctQuery.addText('linked data');
      expect(fctQuery.getText()).to.equal('linked data');
    });
    it('should return an empty string if element <text> is removed', () => {
      const fctQuery = new FctQuery();
      fctQuery.addText('linked data');
      expect(fctQuery.getText()).to.equal('linked data');
      fctQuery.removeText();
      expect(fctQuery.getText()).to.equal('');
    });
    it('should return an empty string if element <text> is not present', () => {
      const fctQuery = new FctQuery();
      expect(fctQuery.getText()).to.equal('');
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

  describe('#setSubjectSameAs/#getSubjectSameAs/#clearSubjectSameAs', () => {
    it("should return null if 'same-as' attribute is absent", () => {
      const fctQuery = new FctQuery();
      expect(fctQuery.getSubjectSameAs()).to.be.null;
    });

    it("should set 'same-as' attribute to 'yes' or 'no'", () => {
      let regex;
      const fctQuery = new FctQuery();

      fctQuery.setSubjectSameAs(true);
      regex = new RegExp(/same-as="yes"/);
      expect(regex.test(fctQuery.toXml())).to.be.true;

      fctQuery.setSubjectSameAs(false);
      regex = new RegExp(/same-as="no"/);
      expect(regex.test(fctQuery.toXml())).to.be.true;
    });

    it("should return null if 'same-as' attribute is removed", () => {
      const fctQuery = new FctQuery();
      fctQuery.setSubjectSameAs(true);
      expect(fctQuery.getSubjectSameAs()).to.be.true;
      fctQuery.clearSubjectSameAs();
      expect(fctQuery.getSubjectSameAs()).to.be.null;
    });
  });

  // describe.only('#execute', () => {
  describe('#execute', () => {
    it('should return a FctResult instance on success', async () => {
      const fctQuery = new FctQuery();
      fctQuery.setServiceEndpoint(fct_test_env.fct_test_endpoint);
      fctQuery.addText('virtuoso');
      fctQuery.setViewLimit(50);

      const qryResult = await fctQuery.execute();
      expect(qryResult instanceof FctResult).to.be.true;
      expect(/^select /.test(qryResult.sparql)).to.be.true;
    });

    it('should return an FctError instance on failure', async () => {
      // badXml: <view> element is missing.
      const badXml = `
        <?xml version="1.0"?>
        <query xmlns="http://openlinksw.com/services/facets/1.0">
          <text>skiing</text>
        </query>`;

      const fctQuery = new FctQuery(badXml);
      fctQuery.setServiceEndpoint(fct_test_env.fct_test_endpoint);
      try {
        await fctQuery.execute();
      }
      catch (error) {
        error.should.have.property("name", "FctError");
        error.should.have.property("httpStatusCode", 500);
        error.should.have.property("responseJson");
      }
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

  describe('#queryFilterDescriptors', () => {
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

      for (const filterDesc of rFilterDesc) {
        console.log('-- Filter ----------------------------');
        console.log(JSON.stringify(filterDesc, null, '  '));
      };
    });

    it('should provide SPARQL-like filter descriptors for fixture FctQry4', () => {
      let fctQuery = new FctQuery(fixtureFctQry4);
      let rFilterDesc = fctQuery.queryFilterDescriptors();

      // expect(rFilterDesc.length).to.equal(8); // TO DO - Add assertions

      for (const filterDesc of rFilterDesc) {
        console.log('-- Filter ----------------------------');
        console.log(JSON.stringify(filterDesc, null, '  '));
      };

    });

    it('should provide SPARQL-like filter descriptors for fixture FctQry6', () => {
      let fctQuery = new FctQuery(fixtureFctQry6);
      let rFilterDesc = fctQuery.queryFilterDescriptors();

      // expect(rFilterDesc.length).to.equal(?); // TO DO - Add assertions

      for (const filterDesc of rFilterDesc) {
        console.log('-- Filter ----------------------------');
        console.log(JSON.stringify(filterDesc, null, '  '));
      };

    });

  });

  describe('#addProperty', () => {
    it('for subject node ?s1', () => {
      const query1 = `
        <?xml version="1.0"?>
        <query xmlns="http://openlinksw.com/services/facets/1.0" inference="" same-as="">
          <text>linked data</text>
          <view type="classes" limit="20" offset=""/>
        </query>
      `;

      let subjIndx // The subject index introduced by a new property or property-of element.
      let fctQuery = new FctQuery(query1);

      subjIndx = fctQuery.addProperty('http://schema.org/makesOffer', 1);
      // console.log('Test #addProperty: subjIndx1:', subjIndx);
      expect(subjIndx).to.equal(2);

      subjIndx = fctQuery.addProperty('http://schema.org/businessFunction', 2);
      // console.log('Test #addProperty: subjIndx2:', subjIndx);
      expect(subjIndx).to.equal(3);

      subjIndx = fctQuery.addProperty('http://schema.org/itemOffered', 2);
      // console.log('Test #addProperty: subjIndx3:', subjIndx);
      expect(subjIndx).to.equal(4);

      subjIndx = fctQuery.addProperty('http://schema.org/material', 4);
      // console.log('Test #addProperty: subjIndx4:', subjIndx);
      expect(subjIndx).to.equal(5);
    });
  });

  describe('#getSubjectCount', () => {
    it('should return the number of implicit subject nodes in the query XML', () => {
      const query1 = `
      <?xml version="1.0"?>
      <query xmlns="http://openlinksw.com/services/facets/1.0">
        <!-- Nesting level 1: implied variable ?s1 -->
        <class iri="http://schema.org/Business" />
        <property iri="http://schema.org/makesOffer">
          <!-- Nesting level 2: implied variable ?s2 -->
          <property iri="http://schema.org/businessFunction">
            <!-- Nesting level 3.1: implied variable ?s3 -->
            <value datatype="uri">http://purl.org/goodrelations/v1#Dispose</value>
          </property>
          <property iri="http://schema.org/itemOffered">
            <!-- Nesting level 3.2: implied variable ?s4 -->
            <view type="list" limit="100" />
            <class iri="http://schema.org/Product" />
            <property iri="http://schema.org/material">
              <!-- Nesting level 4: implied variable ?s5 -->
              <value>asbestos</value>
            </property>
          </property>
        </property>
      </query>
      `;

      const query2 = `
      <?xml version="1.0"?>
      <query xmlns="http://openlinksw.com/services/facets/1.0">
        <class iri="http://schema.org/Business" />
        <property iri="http://schema.org/itemOffered">
          <view type="list" limit="100" />
          <property iri="http://schema.org/material">
            <value>gold</value>
          </property>
        </property>
      </query>
      `;

      const query3 = `
      <?xml version="1.0"?>
      <query xmlns="http://openlinksw.com/services/facets/1.0">
        <class iri="http://schema.org/Business" />
        <view type="list" limit="100" />
        <property iri="http://schema.org/itemOffered">
          <property iri="http://schema.org/material">
          </property>
        </property>
      </query>
      `;

      let fctQuery;
      fctQuery = new FctQuery(query1);
      expect(fctQuery.getSubjectCount()).to.equal(5);

      fctQuery = new FctQuery(query2);
      expect(fctQuery.getSubjectCount()).to.equal(3);

      fctQuery = new FctQuery(query3);
      expect(fctQuery.getSubjectCount()).to.equal(3);

    });
  });

  describe('#getElementSubjectParent', () => {

    const query1 = `
    <?xml version="1.0"?>
    <query xmlns="http://openlinksw.com/services/facets/1.0">
      <!-- Nesting level 1: implied variable ?s1 -->
      <class iri="http://schema.org/Business" />
      <property iri="http://schema.org/makesOffer">
        <!-- Nesting level 2: implied variable ?s2 -->
        <property iri="http://schema.org/businessFunction">
          <!-- Nesting level 3.1: implied variable ?s3 -->
          <value datatype="uri">http://purl.org/goodrelations/v1#Dispose</value>
        </property>
        <property iri="http://schema.org/itemOffered">
          <!-- Nesting level 3.2: implied variable ?s4 -->
          <view type="list" limit="100" />
          <class iri="http://schema.org/Product" />
          <property iri="http://schema.org/material">
            <!-- Nesting level 4: implied variable ?s5 -->
            <value>asbestos</value>
          </property>
        </property>
      </property>
    </query>
    `;

    it('should error if subjectIndex is not numeric', () => {
      let fctQuery = new FctQuery();
      expect(() => fctQuery.getElementSubjectParent('a')).to.throw();
    });

    it('should error if subjectIndex is out of range', () => {
      let fctQuery = new FctQuery(query1);
      expect(() => fctQuery.getElementSubjectParent(0)).to.throw();
      expect(() => fctQuery.getElementSubjectParent(6)).to.throw();
    });

    it('should return the parent element of a subject node', () => {
      let fctQuery = new FctQuery(query1);
      let $node;

      $node = fctQuery.getElementSubjectParent(1);
      expect($node[0].tagName).to.equal('QUERY');

      $node = fctQuery.getElementSubjectParent(4);
      expect($node[0].tagName).to.equal('PROPERTY');
      expect($node.attr('iri')).to.equal('http://schema.org/itemOffered');

      $node = fctQuery.getElementSubjectParent(3);
      expect($node[0].tagName).to.equal('PROPERTY');
      expect($node.attr('iri')).to.equal('http://schema.org/businessFunction');
    });

  });

  describe('#addCondition', () => {
    it('should create an XML <cond> element', () => {
      let fctQuery = new FctQuery(fixtureFctQry5);
      let subjectIndex = fctQuery.getViewSubjectIndex();
      // console.log('#addCondition: before setting condition: ', fctQuery.toXml());
      fctQuery.addCondition('eq', '27', 'http://www.w3.org/2001/XMLSchema#integer');
      // addCondition resets the subject index to 1
      // console.log('#addCondition: after setting condition: ', fctQuery.toXml());

      let $conditions = fctQuery.getElementsSubjectConditions(subjectIndex);
      expect($($conditions[0]).text()).to.equal('27');
      expect($conditions[0].tagName).to.equal('COND');
    });
  });

  describe('#removeSubjectConditions', () => {
    it('should remove all conditions on a subject', () => {
      let fctQuery = new FctQuery(fixtureFctQry5);
      let subjectIndex = fctQuery.getViewSubjectIndex();
      fctQuery.addCondition('eq', '27', 'http://www.w3.org/2001/XMLSchema#integer');
      // console.log('#removeSubjectConditions: after setting condition: ', fctQuery.toXml());
      let $conditions = fctQuery.getElementsSubjectConditions(subjectIndex);
      expect($conditions.length).to.equal(1);

      fctQuery.removeSubjectConditions(subjectIndex)
      // console.log('#removeSubjectCondition: after removing condition: XML: ', fctQuery.toXml());
      $conditions = fctQuery.getElementsSubjectConditions(subjectIndex);
      expect($conditions.length).to.equal(0);
    });
  });

  describe('#removeFilter', () => {
    it('should remove the filter with the given index', () => {
      let fctQuery = new FctQuery(fixtureFctQry5);
      let subjectIndex = fctQuery.getViewSubjectIndex();
      expect(subjectIndex).to.equal(2);

      fctQuery.addCondition('eq', '27', 'http://www.w3.org/2001/XMLSchema#integer');

      let re = new RegExp(
        '</text>\\s*<property iri="http://www.openlinksw.com/ski_resorts/schema#advanced_slopes">\\s*' +
        '<cond type="eq".+>27</cond>\\s*</property>\\s*<view.+>');
      expect(re.test(fctQuery.toXml())).to.be.true;

      let rFilterDesc = fctQuery.queryFilterDescriptors();
      expect(rFilterDesc.length).to.equal(3);
      /*
      console.log('#removeFilter: before removing filter: ', fctQuery.toXml());
      for (const filterDesc of rFilterDesc) {
      console.log('-- Filter ----------------------------');
      console.log(JSON.stringify(filterDesc, null, '  '));
      };
      */

      fctQuery.removeFilter(1);
      rFilterDesc = fctQuery.queryFilterDescriptors();
      expect(rFilterDesc.length).to.equal(1);
      /*
      console.log('#removeFilter: after removing filter: ', fctQuery.toXml());
      for (const filterDesc of rFilterDesc) {
        console.log('-- Filter ----------------------------');
        console.log(JSON.stringify(filterDesc, null, '  '));
      };
      */

      re = new RegExp(
        '</text>\\s*<view.+>'
      );
      expect(re.test(fctQuery.toXml())).to.be.true;
    });
  });

  describe('#addPropertyOf', () => {
    it('for subject node ?s1', () => {
      const query1target = `
        <?xml version="1.0"?>
        <query xmlns="http://openlinksw.com/services/facets/1.0">
          <class iri="http://xmlns.com/foaf/0.1/Person" />
          <property-of iri="http://xmlns.com/foaf/0.1/knows">
            <property-of iri="http://xmlns.com/foaf/0.1/knows">
              <property iri="http://xmlns.com/foaf/0.1/name">
                <value>"Melvin Carvalho"</value>
              </property>
            </property-of>
          </property-of>
          <view type="list" limit="100" />
        </query>
      `;

      const query1 = `
      <?xml version="1.0"?>
      <query xmlns="http://openlinksw.com/services/facets/1.0">
        <class iri="http://xmlns.com/foaf/0.1/Person" />
        <view type="list" limit="100" />
      </query>
    `;

      let subjIndx // The subject index introduced by a new property or property-of element.
      let fctQuery = new FctQuery(query1);

      subjIndx = fctQuery.addPropertyOf('http://xmlns.com/foaf/0.1/knows', 1);
      expect(subjIndx).to.equal(2);

      subjIndx = fctQuery.addPropertyOf('http://xmlns.com/foaf/0.1/knows', 2);
      expect(subjIndx).to.equal(3);

      subjIndx = fctQuery.addProperty('http://xmlns.com/foaf/0.1/name', 3);
      expect(subjIndx).to.equal(4);

      fctQuery.setViewSubjectIndex(subjIndx);
      fctQuery.addValue("eq", 'Melvin Carvalho');
      // TO DO: Add assertions

      // console.log(`XML:`, fctQuery.toXml()); // TO DO: Remove

      // fctQuery.setViewOffset(0);
    });
  });

  describe('Check defaults on a new FctQuery instance', () => {
    let fctQuery = new FctQuery();
    it('Default view type should be set', () => {
      expect(fctQuery.getDefaultViewType()).to.equal(DFLT_VIEW_TYPE);
    });
    it('Default view limit should be set', () => {
      expect(fctQuery.getDefaultViewLimit()).to.equal(DFLT_VIEW_LIMIT);
    });
    it('Default query timeout should be set', () => {
      expect(fctQuery.getDefaultQueryTimeout()).to.equal(DFLT_QUERY_TIMEOUT);
    });
    it('Default service endpoint should be set', () => {
      expect(fctQuery.getDefaultServiceEndpoint()).to.equal(DFLT_SERVICE_ENDPOINT);
    });
  });

});