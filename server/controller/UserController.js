'use strict';
const response = require(__root + 'helper/response');
const conn = require(__root + 'helper/db');
const getDateTime = require(__root + 'helper/date');
const VerifyToken = require(__root + 'helper/verifyToken');
const express = require("express");
const router = express.Router();

router.get(
    '/',
    VerifyToken,
    function(req, res) {
        conn.query('SELECT * FROM users', (err, result) => {
            if (err) {
                response.error(err, 400, res)
            } else {
                response.ok(result.rows, res)
            }
        })
    }   
);
module.exports = router;
