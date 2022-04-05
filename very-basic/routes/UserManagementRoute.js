const express = require('express');
const Router = express.Router();

//Initialize Controllers
const {
    AddUser,
     GetUser,
     DeleteUser,
     UpdateUser,
     UpdateUserById,
     DeleteUserById,
     AddNewFather,
     DeleteSubDocument,
     UpdateSubDocumentParticularKey
} = require('../controllers/UserManagementController');

//Library Files Initializition
const { GuradRoute } = require('../libraryfiles/Guard') 


//Call Routes
Router.post('/AddUser',GuradRoute,AddUser);
Router.get('/GetUser',GetUser);
Router.post('/UpdateUserById/:_UserId',UpdateUserById);
Router.post('/DeleteUser',DeleteUser);
Router.delete('/DeleteUserById/:_UserId',DeleteUserById);
Router.post('/AddNewFather/:_UserId',AddNewFather);
Router.post('/DeleteSubDocument/:_DocumentId/:_SubDocumentId',DeleteSubDocument);
Router.post('/UpdateSubDocumentParticularKey/:_DocumentId/:_SubDocumentId',UpdateSubDocumentParticularKey);

module.exports = Router;