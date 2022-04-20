const express = require('express');
var bodyParser = require('body-parser');
const multer = require('multer')
const route = require('../src/router/route');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer().any())


const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://shailesh123:rYbeOdoWZtY9NdKU@cluster0.e1ege.mongodb.net/group22Database-DB?retryWrites=true&w=majority", { useNewUrlParser: true })
    .then(() => console.log('mongodb running and connected'))
    .catch(err => console.log(err))

app.use('/', route);

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});