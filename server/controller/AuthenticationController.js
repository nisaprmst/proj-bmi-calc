'use strict';
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require(__root + 'config');
const response = require(__root + 'helper/response');
const conn = require(__root + 'helper/db');
const getDateTime = require(__root + 'helper/date');
const VerifyToken = require(__root + 'helper/verifyToken');
const express = require("express");
const e = require('express');
const router = express.Router();
const { google } = require('googleapis');
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.CLIENT_ID);


router.post(
  '/register',
  async function(req, res) {
    try {
      if (req.body.token) {
        // auth google
        const token = req.body.token;
        const accessToken = req.body.accessToken;
        const ticket = await client.verifyIdToken({
          idToken: token,
          audience: process.env.CLIENT_ID
        });
        const { email, given_name, family_name, sub } = ticket.getPayload();    
        const checkEmailQuery = 'SELECT * FROM users WHERE email=\'' + email + '\'';
        const checkEmail = await conn.query(checkEmailQuery);
        if (checkEmail.rows.length > 0) return response.error("Email has been used", 406, res);
        const { OAuth2 } = google.auth;
        const oauth2Client = new OAuth2();
        oauth2Client.setCredentials({ access_token: accessToken });
        const peopleAPI = google.people({
            version: 'v1',
            auth: oauth2Client
        })
        const { data } = await peopleAPI.people.get({
          resourceName: 'people/me',
          personFields: 'birthdays,ageRanges',
        })
        const { birthdays } = data
        req.body.username = email;
        req.body.password = sub;
        req.body.name = given_name + ' ' + family_name;
        req.body.email = email;
        if (birthdays[0].date.year) {
          req.body.birth_date = birthdays[0].date.year + '-' + birthdays[0].date.month + '-' + birthdays[0].date.day;
        } else {
          req.body.birth_date = 1990 + '-' + birthdays[0].date.month + '-' + birthdays[0].date.day;
        }
        req.body.height = 0;
        req.body.weight = 0;
      } else {
        const checkUsernameQuery = 'SELECT * FROM users WHERE username=\'' + req.body.username + '\'';
        const username = await conn.query(checkUsernameQuery);
        if (username.rows.length > 0) return response.error("Username has been used", 406, res);
        const checkEmailQuery = 'SELECT * FROM users WHERE email=\'' + req.body.email + '\'';
        const email = await conn.query(checkEmailQuery);
        if (email.rows.length > 0) return response.error("Email has been used", 406, res);
      }
      const hashedPassword = bcrypt.hashSync(req.body.password, 8);
      const date = getDateTime.getDate()
      const values = '(' + '\'' + req.body.username + '\',\'' + req.body.email + '\',\'' + hashedPassword + '\',\'' + req.body.name + '\',\'' + req.body.birth_date + '\',\'' + req.body.height + '\',\'' + req.body.weight + '\',\'' + "USER" + '\',\'' + date + '\',' + 1 + ')';
      const queryInsert = 'INSERT INTO users (username, email, password, name, birth_date, height, weight, role, log_date, log_count) VALUES ' + values;
      const insert = await conn.query(queryInsert);
      if (!insert) return response.error("Error inserting user to database", 406, res);
      const newUserQuery = 'SELECT * FROM users WHERE username=\'' + req.body.username + '\'';
      const newUser = await conn.query(newUserQuery);
      if (!newUser) return response.error("Error from database server", 401, res);
      let weightQUery = '';
      let addWeight = null;
      for (let input_date=0; input_date<7; input_date++) {
        weightQUery = 'INSERT INTO weights (input_date, weight, id_user) VALUES (' + input_date + ',' + req.body.weight + ',' + newUser.rows[0].id + ')'
        addWeight = await conn.query(weightQUery);
        if (!addWeight) return response.error("Error adding weight record", 400, res);
      }
      // create a token
      const token = jwt.sign({ username: req.body.username }, config.secret, {
        expiresIn: 86400 // expires in 24 hours
      });
      if (token) {
        const result = {
            auth: true,
            token,
            role: 'USER'
        }
        return response.ok(result, res);
      } else {
        return response.error('Error token', 401, res);
      }
    } catch (error) {
      return response.error("Error registering user", 401, res);
    }
  }
);

router.post(
  '/login',
  async function (req, res) {
    try {
      let user;
      if (req.body.token) {
        // auth google
        const token = req.body.token;
        const ticket = await client.verifyIdToken({
          idToken: token,
          audience: process.env.CLIENT_ID
        });
        const { email } = ticket.getPayload();    
        const checkEmailQuery = 'SELECT * FROM users WHERE email=\'' + email + '\'';
        user = await conn.query(checkEmailQuery);
        if (!user) return response.error("Error from database server", 401, res);
      } else {
        const checkUsernameQuery = 'SELECT * FROM users WHERE username=\'' + req.body.username + '\'';
        user = await conn.query(checkUsernameQuery);
        if (!user) return response.error("Error from database server", 401, res);
        if (user.rows.length < 1)  {
          const checkEmailQuery = 'SELECT * FROM users WHERE email=\'' + req.body.username + '\'';
          user = await conn.query(checkEmailQuery);
          if (!user) return response.error("Maaf, server sedang error.", 401, res);
          if (user.rows.length < 1)  {
            return response.error("Pengguna tidak ditemukan!", 401, res);
          }
        }
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
            return response.error("Password salah!", 401, res);
        }
      }
      // check log date
      const todayDate = getDateTime.getDate();
      let firstLogin = false;
      if (!getDateTime.isDateNow(user.rows[0].log_date)) {
        firstLogin = true;
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
      // if monday and first login, delete all weight record
      // TODO: if user just logged in after a week (not monday) 
      if (getDateTime.isTodayMonday() && firstLogin) {
        const deleteQuery = 'DELETE FROM weights WHERE id_user=' + user.rows[0].id;
        const deleted = await conn.query(deleteQuery);
        if (!deleted) return response.error("Error while deleting all weights data", 400, res);
        // add weight to record
        const input_date = getDateTime.getDayNumber();
        const weightQUery = 'INSERT INTO weights (input_date, weight, id_user) VALUES (' + input_date + ',' + user.rows[0].weight + ',' + user.rows[0].id + ')'
        const addWeight = await conn.query(weightQUery);
        if (!addWeight) return response.error("Error adding weight record", 400, res);
      }
      // if user is found and password is valid
      // create a token
      const token = jwt.sign({ username: user.rows[0].username }, config.secret, {
        expiresIn: 17280000, // expires in 24 hours
      });
      // return the information including token as JSON
      if (token) {
          let result = {
              auth: true,
              token,
              role: user.rows[0].role
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
        token: req.headers["x-access-token"],
        role: req.user.role
    };
    return response.ok(result, res);
  }
)

module.exports = router;