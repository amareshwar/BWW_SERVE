const mongoose = require('mongoose');
const properties = require('./properties.json');
const mongoUrl = properties.mongoUrl;

function initializeDB() {
    console.log(mongoUrl);
    mongoose.connect(mongoUrl,{useNewUrlParser : true});

    mongoose.connection.on('connected', () => {
        console.log('Mongo db connected');
    })

    mongoose.connection.on('error', (err) => {
        console.log('Failed to connect to Mongo db.\nReason: ' + err)
    })

    mongoose.connection.on('disconnected', () => {
        console.log('Mongo db disconnedted');
    })
}

exports.initializeDB = initializeDB;