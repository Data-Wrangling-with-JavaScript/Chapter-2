'use strict';

var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('This is a web page!');
});

app.listen(3000, function () {
    console.log('Web server listening on port 3000!');
});
