var http = require('http');
var express = require('express');
var port = process.env.port || 3000;
var app = express();
var cateRoute = require('./routes/cate');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');


mongoose.connect('mongodb://localhost:27017/news', { useNewUrlParser: true, useUnifiedTopology: true }, function(err) {
    if (err) {
        console.log('Error to connect to MongoDB')
    } else {
        console.log('Connect to MongoDB Succesfully')
    }
});
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', cateRoute);



http.createServer(app).listen(port);

console.log("App is running on port: " + port);