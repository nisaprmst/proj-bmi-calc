'use strict';

module.exports = function(app) {
    const user = require('./controller/UserController')
    const information = require('./controller/InformationController')

    // user
    app.route('/api/index')
        .get(user.index);

    app.route('/api/users')
        .get(user.getAllUser);

    // information
    app.route('/api/informations')
        .get(information.getAllInfo);
    app.route('/api/add-information')
        .post(information.addInfo);
};