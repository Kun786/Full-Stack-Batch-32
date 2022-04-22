const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 7612;
const path = require('path');
// const Database = require('./config/DataBaseConfiguration');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.text());
app.use(express.raw());
app.use(cors());
app.use('/assets',express.static('assets'));

//Call Routes
const _UserManagementRoute = require('./routes/UserManagementRoute');
const _UserAuthenticationRoute = require('./routes/UserAuthenticationRoute');
const _ProductManagementRoute = require('./routes/ProductManagement');

app.use('/UserManagement',_UserManagementRoute);
app.use('/UserAuthentication',_UserAuthenticationRoute);
app.use('/Product',_ProductManagementRoute);
app.use(express.static(path.join(__dirname,'/public')));
//Initialize Routes


//Serving Front End Form Your Server.js(Express)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
})
//Serving Front End Form Your Server.js(Express)

app.listen(PORT,() => {
    console.log(`app is running ${PORT}`);
})