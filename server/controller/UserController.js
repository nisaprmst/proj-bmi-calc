'use strict';
const response = require(__root + 'helper/response');
const conn = require(__root + 'helper/db');
const getDateTime = require(__root + 'helper/date');
const VerifyToken = require(__root + 'helper/verifyToken');
const AuthRole = require(__root + 'helper/authorization');
const Role = require(__root + 'helper/role');
const express = require("express");
const router = express.Router();

router.get(
    '/',
    VerifyToken,
    AuthRole(Role.User),
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
