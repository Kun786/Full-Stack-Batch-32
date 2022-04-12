const express = require('express');
const Router = express.Router();

//initializing controllers
const { AddProduct } = require('../controllers/ProductManagamentController');

//Defining Routes

Router.post('/AddProduct',AddProduct);

module.exports = Router;