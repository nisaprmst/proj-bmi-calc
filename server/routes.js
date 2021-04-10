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
    app.route('/api/information/:infoId')
        .get(information.getInfoById);
    app.route('/api/information/delete')
        .post(information.deleteInfoById);
    app.route('/api/information/add')
        .post(information.addInfo);
};