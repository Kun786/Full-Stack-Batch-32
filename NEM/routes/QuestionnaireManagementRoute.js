const express = require('express');
const Router = express.Router();

//Yahan main controller ko initialize karon ga
const {
    TestController
} = require('../controllers/TestController');

Router.post('/TestController',TestController);

module.exports = Router;