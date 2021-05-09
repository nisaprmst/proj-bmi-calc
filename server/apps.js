const express = require('express');
const app = express();
const bp = require('body-parser');
global.__root   = __dirname + '/';
const InformationController = require(__root + 'controller/InformationController');
const AuthController = require(__root + 'controller/AuthenticationController');
const UserController = require(__root + 'controller/UserController');

const cors = require('cors');

app.get('/api', function (req, res) {
    console.log(req.body)
  res.status(200).send('API works.');
});

app.use(cors());
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
app.use('/api/information', InformationController);
app.use('/api/auth', AuthController);
app.use('/api/user', UserController);

module.exports = app;