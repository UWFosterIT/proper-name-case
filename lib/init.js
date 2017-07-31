#! /usr/bin/env node
require('babel-register')({
  ignore: false,
  only:   '/proper-name-case\/lib/'
});
var pnc = require('./main');
module.exports = pnc;
