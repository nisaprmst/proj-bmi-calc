'use strict';
const response = require(__root + 'helper/response');
const conn = require(__root + 'helper/db');
const getDateTime = require(__root + 'helper/date');
const VerifyToken = require(__root + 'helper/verifyToken');
const express = require("express");
const router = express.Router();

router.get(
    '/all',
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

router.get(
    '/info',
    VerifyToken,
    function(req, res) {
        response.ok(req.user, res)
    }   
);

router.put(
    '/update',
    VerifyToken,
    function(req, res) {
        try {
            const query = 'UPDATE users SET height=' + req.body.height + ', weight=' + req.body.weight + ' WHERE username=\'' + req.user.username + '\'';
            conn.query(query, (err, result) => {
                if (err) {
                    response.error("weight or height not valid", 400, res);
                } else {
                    response.ok('Success update user weight and height', res);
                }
            })
        } catch (error) {
            response.error("Error while updating database", 400, res);
        }
    }
)
module.exports = router;
