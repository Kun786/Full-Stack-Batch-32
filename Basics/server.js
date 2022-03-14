const express = require('express');
const app = express();

const PORT = 8787;

app.listen(PORT, ()=> {
    console.log(`Your App is Running ${PORT}`);
})