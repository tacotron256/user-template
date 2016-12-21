'use strict';

var express = require('express');
var app = express();

app.use(express.static('app'));

app.get('/', function(req, res) {
    res.sendfile('./app/test.html');
});

app.listen(5001);