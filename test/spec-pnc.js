import chai           from 'chai';
import properNameCase from '../lib/main';
import testData       from './test-data';

const expect = chai.expect;

// Convert name
describe('When converting to proper name case', function () {
  it('conversions are handled correctly', async function () {
    for (let name of testData.names) {
      const converted = properNameCase.convert(name.input);
      console.log(`${name.input} converts to ${name.output}`);
      expect(converted).to.eql(name.output);
    }
  });

});
