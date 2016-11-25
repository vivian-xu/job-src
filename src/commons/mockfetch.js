import ajax from 'superagent';
import mock from 'superagent-mock';
import mockconfig from '../mock/superagent-mock-config';

let logger = function(log) {
  console.log('superagent call', log);
};

mock(ajax, mockconfig, logger);

console.log('this is in mockfetch.js');
