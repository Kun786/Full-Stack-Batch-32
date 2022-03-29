const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 7612;
const Database = require('./config/DataBaseConfiguration');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.text());
app.use(express.raw());
app.use(cors());

//Call Routes
const _UserManagementRoute = require('./routes/UserManagementRoute');
const _UserAuthenticationRoute = require('./routes/UserAuthenticationRoute');

app.use('/UserManagement',_UserManagementRoute);
//Initialize Routes

app.listen(PORT,() => {
    console.log(`app is running ${PORT}`);
})