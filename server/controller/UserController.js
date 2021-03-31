'use strict';
const response = require('../helper/response')


exports.index = function(req, res) {
    response.ok("Hello, World!", res)
};