'use strict';

var express = require('express');
var path = require('path');

var app = express();

var staticFilesPath = path.join(__dirname, 'public');
var staticFilesMiddleWare = express.static(staticFilesPath);
app.use('/', staticFilesMiddleWare);

app.listen(3000, function () {
    console.log('Web server listening on port 3000!');
});
