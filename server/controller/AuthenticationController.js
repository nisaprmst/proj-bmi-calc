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
  async function(req, res) {
    try {
      const checkUsernameQuery = 'SELECT * FROM users WHERE username=\'' + req.body.username + '\'';
      const username = await conn.query(checkUsernameQuery);
      if (username.rows.length > 0) return response.error("Username has been used", 406, res);
      const checkEmailQuery = 'SELECT * FROM users WHERE email=\'' + req.body.email + '\'';
      const email = await conn.query(checkEmailQuery);
      if (email.rows.length > 0) return response.error("Email has been used", 406, res);
      const hashedPassword = bcrypt.hashSync(req.body.password, 8);
      const date = getDateTime.getDate()
      const values = '(' + '\'' + req.body.username + '\',\'' + req.body.email + '\',\'' + hashedPassword + '\',\'' + req.body.name + '\',\'' + req.body.birth_date + '\',\'' + req.body.height + '\',\'' + req.body.weight + '\',\'' + "USER" + '\',\'' + date + '\',' + 1 + ')';
      const queryInsert = 'INSERT INTO users (username, email, password, name, birth_date, height, weight, role, log_date, log_count) VALUES ' + values;
      conn.query(queryInsert,  (err, user) => {
        if (err) response.error(values, 401, res);
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
          return response.ok(result, res);
        } else {
          return response.error('Error token', 401, res);
        }
      }); 
    } catch (error) {
      return response.error("Error registering user", 401, res);
    }
  }
);

router.post(
  '/login',
  async function (req, res) {
    try {
      console.log("Database_URL ", process.env.DATABASE_URL);
      console.log("miar");
      const checkUsernameQuery = 'SELECT * FROM users WHERE username=\'' + req.body.username + '\'';
      const user = await conn.query(checkUsernameQuery);
      if (!user) return response.error("Error from database server", 401, res);
      if (user.rows.length < 1) return response.error("No user found.", 401, res);
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
          return response.error(result, 401, res);
      }
      // check log date
      const todayDate = getDateTime.getDate();
      if (!getDateTime.isDateNow(user.rows[0].log_date)) {
        const query = 'UPDATE users SET log_date=\'' + todayDate + '\', log_count=' + 1 + ' WHERE username=\'' + req.body.username + '\'';
        conn.query(query, (err, result) => {
          if (err) {
            return response.error("update log date and count failed", 400, res);
          }
        });
      } else {
        const newLog = user.rows[0].log_count + 1;
        const query = 'UPDATE users SET log_count=' + newLog + ' WHERE username=\'' + req.body.username + '\'';
        conn.query(query, (err, result) => {
          if (err) {
            return response.error("update log count failed", 400, res);
          }
        });
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
          return response.ok(result, res);
      } else {
          return response.error('Error token', 401, res);
      }
    } catch (e) {
      return response.error('Error login', 401, res);
    }
  }
);

router.post(
  '/logout',
  function(req, res) {
    let result = {
        auth: false,
        token: null
    };
    return response.ok(result, res);
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
    return response.ok(result, res);
  }
)

module.exports = router;