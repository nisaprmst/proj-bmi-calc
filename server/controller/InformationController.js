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
        conn.query('SELECT * FROM informations', (err, result) => {
            if (err) {
                response.error(err, 400, res)
            } else {
                response.ok(result.rows, res)
            }
        });
    }
);

router.post(
    '/add',
    VerifyToken,
    function(req, res) {
        let date = getDateTime.getDateTime()
        let title = req.body.title
        let content = req.body.content
        let img_url = req.body.img_url
        let queryInsert = 'INSERT INTO informations (created_date, title, content, img_url) VALUES (' + '\'' + date + '\',\'' + title + '\',\'' + content + '\',\'' + img_url + '\')'
        conn.query(queryInsert , (err, result) => {
            if (err) {
                response.error(err, 400, res)
            } else {
                response.ok(result, res)
            }
        })
    }
);

router.get(
    '/:infoId',
    VerifyToken,
    function(req, res) {
        let id = req.params.infoId
        let querySelect = 'SELECT * FROM informations WHERE id=' + id
        conn.query(querySelect, (err, result) => {
            if (err) {
                response.error(err, 400, res)
            } else {
                response.ok(result.rows, res)
            }
        })
    }
);

router.post(
    '/delete',
    VerifyToken,
    function(req, res) {
        let id = req.body.id
        let queryDelete = 'DELETE FROM informations WHERE id=' + id
        conn.query(queryDelete, (err, result) => {
            if (err) {
                response.error(err, 400, res)
            } else {
                response.ok("Success deleting information " + id, res)
            }
        })
    }
);

module.exports = router;
