const express = require('express');
const Router = express.Router();

//Calling Controller
const {
    UserLogin,
    UserRegister
} = require('../controllers/UserManagementController');

Router.post('/UserLogin',UserLogin);
Router.post('/UserRegister',UserRegister);

module.exports = Router;