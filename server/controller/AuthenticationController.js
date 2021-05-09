'use strict';
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require(__root + 'config');
const response = require(__root + 'helper/response');
const conn = require(__root + 'helper/db');
const getDateTime = require(__root + 'helper/date');
const VerifyToken = require(__root + 'helper/verifyToken');
const AuthRole = require(__root + 'helper/authorization');
const Role = require(__root + 'helper/role');
const express = require("express");
const router = express.Router();


router.post(
  '/register',
  function(req, res) {
    let hashedPassword = bcrypt.hashSync(req.body.password, 8);
    let values = '(' + '\'' + req.body.username + '\',\'' + req.body.email + '\',\'' + hashedPassword + '\',\'' + req.body.name + '\',\'' + req.body.birth_date + '\',\'' + req.body.height + '\',\'' + req.body.weight + '\')'
    let queryInsert = 'INSERT INTO users (username, email, password, name, birth_date, height, weight) VALUES ' + values;
    conn.query(queryInsert,  (err, user) => {
      if (err) response.error(err, 401, res);
      // create a token
      console.log(user);
      let token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // expires in 24 hours
      });
      if (token) {
        let result = {
            auth: true,
            token
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
    let query = 'SELECT FROM users WHERE email=' + req.body.email;
    conn.query(query, (err, user) => {
        if (err) response.error("Error on the server.", 401, res);
        if (!user) response.error("No user found.", 401, res);
        // check if the password is valid
        const passwordIsValid = bcrypt.compareSync(
          req.body.password,
          user.password
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
        const token = jwt.sign({ id: user._id }, config.secret, {
          expiresIn: 17280000, // expires in 24 hours
        });
        // return the information including token as JSON
        if (token) {
            let result = {
                auth: true,
                token
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

module.exports = router;