'use strict';

module.exports = function(app) {
    const user = require('./controller/UserController')

    app.route('/api/index')
        .get(user.index);

    app.route('/api/users')
        .get(user.getAllUser);
};