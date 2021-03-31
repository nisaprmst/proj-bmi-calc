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
