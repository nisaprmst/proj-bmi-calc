'use strict';
const response = require('../helper/response')
const conn = require('../helper/db')
const getDateTime = require('../helper/date')

exports.getAllInfo = function(req, res) {
    conn.query('SELECT * FROM informations', (err, result) => {
        if (err) {
            response.error(err, 400, res)
        } else {
            response.ok(result.rows, res)
        }
    })
};

exports.addInfo = function(req, res) {
    let date = getDateTime.getDateTime()
    let title = req.body.title
    let content = req.body.content
    let queryInsert = 'INSERT INTO informations (created_date, title, content) VALUES (' + '\'' + date + '\',\'' + title + '\',\'' + content + '\')'
    conn.query(queryInsert , (err, result) => {
        if (err) {
            response.error(err, 400, res)
        } else {
            response.ok("Success inserting information", res)
        }
    })
}

exports.getInfoById = function(req, res) {
    let id = req.params.infoId
    let querySelect = 'SELECT * FROM informations WHERE id=' + id
    console.log(querySelect)
    conn.query(querySelect, (err, result) => {
        if (err) {
            response.error(err, 400, res)
        } else {
            response.ok(result.rows, res)
        }
    })
};

exports.deleteInfoById = function(req, res) {
    let id = req.body.id
    let queryDelete = 'DELETE FROM informations WHERE id=' + id
    console.log(queryDelete)
    conn.query(queryDelete, (err, result) => {
        if (err) {
            response.error(err, 400, res)
        } else {
            response.ok("Success deleting information " + id, res)
        }
    })
}