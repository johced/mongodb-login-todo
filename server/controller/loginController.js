const User = require('../model/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// *** Login ***
exports.login_get = (req, res) => {
  if (req.cookies.jwtToken) return res.redirect('/todolist');
  try {
    res.render('login.ejs', { message: '' });
  } catch (err) {
    console.log(err);
  }
};
