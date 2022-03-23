const Package = require('../package.json');
const mongoose = require('mongoose');

const DatabaseName = 'Class DataBase';
mongoose.connect("mongodb+srv://USMAN:USMAN@usman.1ag8f.mongodb.net/USMAN?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }, (error,connection) => {
    if (!error) {
        console.log(`\nMogoDb Connected Successfuly at MongoAtlas with Database Name ${DatabaseName}\n`);
        console.log("Your App Has the Following Dependicies\n");
        for (dependencies in Package.dependencies) {
            console.log(dependencies);
        }
    }
    else { console.log('Error: Not Connected to the MongoDb' + error) }
});