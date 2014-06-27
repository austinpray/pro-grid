'use strict';

var assert = require('assert')
  , clientValidator = require('../lib/clientvalidator')
  , uuid = require('node-uuid');

describe('clientValidator', function() {
  var validRow = 1;
  var validCol = 1;
  var validColor = '#fff';
  var validApiKey = uuid.v4();
  var dimensions = 32;

  it('should validate when given valid data', function() {
    var data = {row: validRow, col: validCol, color: validColor, apiKey: validApiKey};
    assert(clientValidator(data, dimensions) === true);
  });

  it('should not validate when given invalid row', function() {
    var data = {row: 1000, col: validCol, color: validColor, apiKey: validApiKey};
    assert(clientValidator(data, dimensions) === false);
  });

  it('should not validate when given invalid column', function() {
    var data = {row: validRow, col: 1000, color: validColor, apiKey: validApiKey};
    assert(clientValidator(data, dimensions) === false);
  });

  it('should not validate when given invalid color', function() {
    var data = {row: validRow, col: validCol, color: '#abababab', apiKey: validApiKey};
    assert(clientValidator(data, dimensions) === false);
  });

  it('should not validate when given invalid api key', function() {
    var data = {row: validRow, col: validCol, color: validColor, apiKey: 123123123};
    assert(clientValidator(data, dimensions) === false);
  });

});
