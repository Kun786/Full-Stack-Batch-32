const express = require('express');
const Router = express.Router();

//Calling Controller
const {
    UserLogin,
    UserRegister
} = require('../controllers/UserAutheticationController');

//Calling Middlewares
const { AuthorizedGuard } = require('../libraryfiles/Fucntion');
const { 
    ForgetPasswordRequest, 
    ForgetPasswordResponse, 
    ValidateUserForTokken 
} = require('../controllers/PasswordManagementController');

Router.post('/UserLogin',AuthorizedGuard,UserLogin);
Router.post('/UserRegister',UserRegister);
Router.post('/ForgotPasswordMechanism',ForgetPasswordRequest);
Router.post('/ForgetPasswordResponse/:_UserId/:_Token',ForgetPasswordResponse);
Router.post('/ValidatePasswordToken',ValidateUserForTokken);

module.exports = Router;