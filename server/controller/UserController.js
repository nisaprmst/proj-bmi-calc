'use strict';
const response = require(__root + 'helper/response');
const bcrypt = require('bcryptjs');
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
                return response.error(err, 400, res)
            } else {
                return response.ok(result.rows, res)
            }
        })
    }   
);

router.get(
    '/info',
    VerifyToken,
    function(req, res) {
        return response.ok(req.user, res)
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
                    return response.error("weight or height not valid", 400, res);
                } else {
                    return response.ok('Success update user weight and height', res);
                }
            })
        } catch (error) {
            return response.error("Error while updating profil", 400, res);
        }
    }
)

router.put(
    '/change-password',
    VerifyToken,
    function(req, res) {
        console.log(req.body.newPassword);
        try {
            const hashedPassword = bcrypt.hashSync(req.body.newPassword, 8);
            const query = 'UPDATE users SET password=\'' + hashedPassword + '\'' + ' WHERE username=\'' + req.user.username + '\'';
            conn.query(query, (err, result) => {
                if (err) {
                    return response.error("password not valid", 400, res);
                } else {
                    return response.ok('Success update password', res);
                }
            })
        } catch (error) {
            return response.error("Error while updating password", 400, res);
        }
    }
)
module.exports = router;
