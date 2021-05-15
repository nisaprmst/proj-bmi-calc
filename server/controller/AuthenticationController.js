'use strict';
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require(__root + 'config');
const response = require(__root + 'helper/response');
const conn = require(__root + 'helper/db');
const getDateTime = require(__root + 'helper/date');
const VerifyToken = require(__root + 'helper/verifyToken');
const express = require("express");
const router = express.Router();


router.post(
  '/register',
  function(req, res) {
    const hashedPassword = bcrypt.hashSync(req.body.password, 8);
    const values = '(' + '\'' + req.body.username + '\',\'' + req.body.email + '\',\'' + hashedPassword + '\',\'' + req.body.name + '\',\'' + req.body.birth_date + '\',\'' + req.body.height + '\',\'' + req.body.weight + '\',\'' + "USER" + '\')'
    const queryInsert = 'INSERT INTO users (username, email, password, name, birth_date, height, weight, role) VALUES ' + values;
    conn.query(queryInsert,  (err, user) => {
      if (err) response.error(err, 401, res);
      // create a token
      const token = jwt.sign({ username: req.body.username }, config.secret, {
        expiresIn: 86400 // expires in 24 hours
      });
      if (token) {
        const result = {
            auth: true,
            token,
            username: req.body.username
        }
        response.ok(result, res);
      } else {
        response.error('Error token', 401, res);
      }
    }); 
  }
);

router.post(
  '/login',
  function (req, res) {
    let query = 'SELECT * FROM users WHERE username=\'' + req.body.username + '\'';
    conn.query(query, (err, user) => {
        if (err) return response.error("Error on the server.", 401, res);

        if (!user.rows[0]) return response.error("No user found.", 401, res);
        const pass = user.rows[0].password;
        // check if the password is valid
        const passwordIsValid = bcrypt.compareSync(
          req.body.password,
          pass
        );
        if (!passwordIsValid) {
            let result = {
                auth: false,
                token: null
            }
            response.error(result, 401, res);
        }
        // if user is found and password is valid
        // create a token
        const token = jwt.sign({ username: req.body.username }, config.secret, {
          expiresIn: 17280000, // expires in 24 hours
        });
        // return the information including token as JSON
        if (token) {
            let result = {
                auth: true,
                token,
                username: req.body.username
            }
            response.ok(result, res);
        } else {
            response.error('Error token', 401, res);
        }
    });
  }
);

router.post(
  '/logout',
  function(req, res) {
    let result = {
        auth: false,
        token: null
    };
    response.ok(result, res);
  }
);

router.get(
  '/verify',
  VerifyToken,
  function(req, res) {
    let result = {
        auth: true,
        token: req.headers["x-access-token"]
    };
    response.ok(result, res);
  }
)

module.exports = router;