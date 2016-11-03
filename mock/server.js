// Get the "server" version of superagent
var request = require('superagent');
var config = require('./superagent-mock-config');

var logger = function(log)  {
  console.log('superagent call', log);
};

// Before tests
var superagentMock = require('superagent-mock')(request, config, logger);
