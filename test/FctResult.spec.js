import { FctQuery } from '../src/FctQuery.js';
import { FctResult } from '../src/FctResult.js';
import { fct_test_env }  from './test.conf.js';

describe('FctResult', () => {

  let qryResult;

  before(() => {
    return new Promise((resolve) => {
      const fctQuery = new FctQuery();
      fctQuery.setServiceEndpoint(fct_test_env.fct_test_endpoint);
      fctQuery.queryText = 'virtuoso';
      fctQuery.setViewLimit(50);      
      fctQuery.execute().then(res => {
        qryResult = res;
        // console.log('qryResult:', qryResult)
        resolve();
      });
    })
  })

  describe('#constructor', () => {
    it('should convert the input XML query result to a JS object.', () => {
      expect(qryResult instanceof FctResult).to.be.true;
      // console.log('qryResult.json: ', JSON.stringify(qryResult.json, null, 2));
      expect(qryResult.json.facets.result.row.column instanceof Array).to.be.true;
      expect(qryResult.json.facets.result.row.column.length).to.be.above(0);
    });
  });

  describe('#sparql', () => {
    it('should return the SPARQL query which generated the resultset.', () => {
      expect(/^select /i.test(qryResult.sparql)).to.be.true;
    });
  });

});