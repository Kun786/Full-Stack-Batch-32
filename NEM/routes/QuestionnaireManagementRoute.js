const express = require('express');
const Router = express.Router();

//Yahan main controller ko initialize karon ga
const {
    TestController
} = require('../controllers/TestController');

const { 
    PostApi,
    UserLogin,
    GetData,
    ReadFile,
    PostTestData,
    MakeQuestionnaire
} = require('../controllers/DummyCrudController');

Router.post('/TestController',TestController);
Router.post('/PostApi',PostApi);
Router.post('/UserLogin',UserLogin);
Router.get('/GetData',GetData);
Router.get('/ReadFile',ReadFile);
Router.post('/PostTestData',PostTestData);
Router.post('/MakeQuestionnaire',MakeQuestionnaire);

module.exports = Router;