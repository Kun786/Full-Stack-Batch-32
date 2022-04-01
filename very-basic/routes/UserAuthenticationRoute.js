const express = require('express');
const Router = express.Router();

//Calling Controller
const {
    UserLogin,
    UserRegister
} = require('../controllers/UserAutheticationController');

//Calling Middlewares
const { AuthorizedGuard } = require('../libraryfiles/Fucntion');
const { UploadAdminImage } = require('../libraryfiles/UploadMedia');

const { 
    ForgetPasswordRequest, 
    ForgetPasswordResponse, 
    ValidateUserForTokken 
} = require('../controllers/PasswordManagementController');

Router.post('/UserLogin',AuthorizedGuard,UserLogin);
Router.post('/UserRegister',UploadAdminImage.single('Image'),UserRegister);
Router.post('/ForgotPasswordMechanism',ForgetPasswordRequest);
Router.post('/ForgetPasswordResponse/:_UserId/:_Token',ForgetPasswordResponse);
Router.post('/ValidatePasswordToken',ValidateUserForTokken);

module.exports = Router;