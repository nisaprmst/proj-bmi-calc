require('dotenv').config({path: __root + '.env'});
module.exports = {
    'secret': process.env.SECRETKEY
};