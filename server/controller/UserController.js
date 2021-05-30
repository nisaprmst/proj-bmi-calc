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
    '/delete-user',
    VerifyToken,
    function(req, res) {
        conn.query('DELETE FROM users WHERE role=\'USER\'', (err, result) => {
            if (err) {
                return response.error(err, 400, res)
            } else {
                return response.ok("Success deleting all user", res)
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
    async function(req, res) {
        try {
            const query = 'UPDATE users SET height=' + req.body.height + ', weight=' + req.body.weight + ' WHERE username=\'' + req.user.username + '\'';
            const updated = await conn.query(query);
            if (!updated) return response.error("weight or height not valid", 400, res);

            const input_date = getDateTime.getDayNumber();
            const weightQUery = 'UPDATE weights SET weight=' + req.body.weight+  'WHERE id_user=' + req.user.id + ' AND input_date>=' + input_date;
            const addWeight = await conn.query(weightQUery);
            if (!addWeight) return response.error("Error adding weight record", 400, res);

            return response.ok('Success update user weight and height', res);
        } catch (error) {
            return response.error("Error while updating profil", 400, res);
        }
    }
)

router.put(
    '/change-password',
    VerifyToken,
    function(req, res) {
        try {
            const hashedPassword = bcrypt.hashSync(req.body.newPassword, 8);
            const query = 'UPDATE users SET password=\'' + hashedPassword + '\'' + ' WHERE username=\'' + req.user.username + '\'';
            conn.query(query, (err, result) => {
                if (err) {
                    return response.error("Password not valid", 400, res);
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
