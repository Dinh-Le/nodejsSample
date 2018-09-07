// Knex.js - First demo
// -------------------------------------------------------------
// /index.js
const express = require('express');
var cors = require('cors');
const app = express();

app.use(cors());
// Do you understand why utilizing body parser here will make it usable
// in routes/api/people.js ?
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const apiRoute = require('./routes/api'); // means index.js in there!!!
app.use('/api', apiRoute);
/*
app.get('/', function(req,res) {
 res.send('Hello World of Knex!');
});
*/
app.listen('8000', function () {
    console.log("info", 'Server is running at port : ' + 8000);
});