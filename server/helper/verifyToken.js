const jwt = require("jsonwebtoken"); // used to create, sign, and verify tokens
const config = require(__root + "config"); // get our config file
const conn = require('../helper/db');

function verifyToken(req, res, next) {
  // check header or url parameters or post parameters for token
  const token = req.headers["x-access-token"];
  if (!token)
    return res.status(403).send({ auth: false, message: "No token provided." });

  // verifies secret and checks exp
  jwt.verify(token, config.secret, function (err, decoded) {
    if (err)
      return res
        .status(401)
        .send({ auth: false, message: "Failed to authenticate token." });

    // if everything is good, save to request for use in other routes

    next();
  });
}

module.exports = verifyToken;
