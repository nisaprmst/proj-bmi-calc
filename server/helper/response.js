'use strict';

exports.ok = function(values, res) {
  var data = {
      'status': 200,
      'values': values
  };
  res.json(data);
  res.end();
};

exports.error = function(values, code, res) {
  var data = {
      'status': code,
      'values': values
  };
  res.json(data);
  res.end();
};