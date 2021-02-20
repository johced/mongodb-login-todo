// *** Import controllers ***
const loginController = require('../controller/loginController');
const route = require('./homeRoute');

// *** Login ***
route.get('/login', loginController.login_get);

// *** Export ***
module.exports = route;
