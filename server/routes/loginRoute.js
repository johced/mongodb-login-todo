// *** Import controllers ***
const registerController = require('../controller/registerController');
const loginController = require('../controller/loginController');
const resetController = require('../controller/resetController');
const route = require('./homeRoute');

// register
route.get('/register', registerController.register_get);
route.post('/register', registerController.register_post);

// *** Login ***
route.get('/login', loginController.login_get);
route.post('/login', loginController.login_post);

// reset password
route.get('/reset', resetController.reset_get);
route.post('/reset', resetController.reset_post);

//resetPasswordForm
route.get('/reset/:cryptoUrl', resetController.verifyCryptoUrl_get);
route.post('/resetPasswordForm', resetController.resetPasswordForm_post);

// *** Export ***
module.exports = route;
