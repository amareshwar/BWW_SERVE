const express = require('express');
const bodyparser = require('body-parser');
const morgan = require('morgan');
const helmet = require('helmet');
const { initializeDB } = require('./mongoConnection.js');
const properties = require('./properties.json');
const app = express();

app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan('tiny'));

initializeDB();
const portNumber = properties.portNumber;
app.listen(portNumber, () => {
    console.log('Listening on port number: ' + portNumber);
});