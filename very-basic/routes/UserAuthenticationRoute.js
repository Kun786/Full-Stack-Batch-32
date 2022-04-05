const express = require('express');
const Router = express.Router();

//Calling Controller
const {
    UserLogin,
    UserRegister,
    GetUser
} = require('../controllers/UserAutheticationController');

//Calling Middlewares
const { UploadAdminImage } = require('../libraryfiles/UploadMedia');
const { AuthorizeUser } = require('../libraryfiles/Authorization');

const { 
    ForgetPasswordRequest, 
    ForgetPasswordResponse, 
    ValidateUserForTokken,
} = require('../controllers/PasswordManagementController');

Router.post('/UserLogin',UserLogin);
Router.post('/UserRegister',UploadAdminImage.single('Image'),UserRegister);
Router.post('/ForgotPasswordMechanism',ForgetPasswordRequest);
Router.post('/ForgetPasswordResponse/:_UserId/:_Token',ForgetPasswordResponse);
Router.post('/ValidatePasswordToken',ValidateUserForTokken);
Router.get('/GetUser',AuthorizeUser,GetUser);

module.exports = Router;