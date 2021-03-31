'use strict';
const response = require('../helper/response')
const conn = require('../helper/db')

exports.getAllUser = function(req, res) {
    conn.query('SELECT * FROM users', (err, result) => {
        if (err) {
            response.error(err, 400, res)
        } else {
            response.ok(result.rows, res)
        }
    })
};

exports.index = function(req, res) {
    response.ok("Hello, World!", res)
};