'use strict';
const response = require(__root + 'helper/response');
const bcrypt = require('bcryptjs');
const conn = require(__root + 'helper/db');
const getDateTime = require(__root + 'helper/date');
const VerifyToken = require(__root + 'helper/verifyToken');
const express = require("express");
const router = express.Router();

router.put(
    '/add',
    VerifyToken,
    async function(req, res) {
        try {
            const query = 'UPDATE users SET weight=' + req.body.weight + ' WHERE username=\'' + req.user.username + '\'';
            const updated = await conn.query(query);
            if (!updated) return response.error("Weight is not valid", 400, res);
            // add weight to record
            const input_date = getDateTime.getDayNumber();
            const weightQUery = 'UPDATE weights SET weight=' + req.body.weight+  'WHERE id_user=' + req.user.id + 'AND input_date>=' + input_date;
            const addWeight = await conn.query(weightQUery);
            if (!addWeight) return response.error("Error adding weight record", 400, res);
            // all done
            return response.ok('Success update user weight', res);
        } catch (error) {
            return response.error("Error while adding weight", 400, res);
        }
    }
)

router.get(
    '/',
    VerifyToken,
    async function(req, res) {
        try {
            const query = 'SELECT * FROM weights WHERE id_user=' + req.user.id;
            const data = await conn.query(query);
            if (!data) return response.error("Error database", 400, res);
            const weights = data.rows;
            const days = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];
            let ret = [];
            // input dari senin sampe awal input
            for (let entry = 0; entry < 7; entry++) {
                ret.push({
                    label : days[entry],
                    y : weights[entry].weight
                });
            }
            return response.ok(ret, res);
        } catch (e) {
            return response.error("Error while getting all weights", 400, res);
        }
    }
)

module.exports = router;