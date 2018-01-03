"use strict";

var express = require('express');
var app = express();

app.get("/", (req, res) => {
    res.send("This is a web page!");
});

app.listen(3000, () => {
    console.log("Web server listening on port 3000!");
});
