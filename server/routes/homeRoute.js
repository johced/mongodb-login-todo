const express = require('express');
const route = express.Router();

// *** Import homeController  ***
const homeController = require('../controller/homeController');

// *** Render start page ***
route.get('/', homeController.showStart);

// *** Exports ***
module.exports = route;
