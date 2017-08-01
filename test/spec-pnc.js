import chai           from 'chai';
import properNameCase from '../lib/main';
import testData       from './test-data';

const expect = chai.expect;

// Convert name
describe('When converting to proper name case', function () {
  it('conversions are handled correctly', function () {
    for (let name of testData.names) {
      const converted = properNameCase.convert(name.input);
      expect(converted).to.eql(name.output);
    }
  });

});
