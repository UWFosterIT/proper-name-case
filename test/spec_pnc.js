let chai           = require('chai');
let properNameCase = require('../index');
let testData       = require('./test_data');

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
