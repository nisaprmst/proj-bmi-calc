require('dotenv').config({path: __dirname + '/.env'});
const express = require('express'),
    app = express(),
    port = process.env.PORT,
    bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var routes = require('./routes');
routes(app);

app.listen(port);
console.log('Server running on port:' + port);