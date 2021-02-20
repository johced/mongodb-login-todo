// *** Import controllers ***
const loginController = require('../controller/loginController');
const route = require('./homeRoute');

// *** Login ***
route.get('/login', loginController.login_get);
route.post('/login', loginController.login_post);

// *** Export ***
module.exports = route;
