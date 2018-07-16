"use strict";

const express = require('express');
const path = require('path');

const app = express();

const staticFilesPath = path.join(__dirname, "public");
const staticFilesMiddleWare = express.static(staticFilesPath);
app.use("/", staticFilesMiddleWare);

app.listen(3000, () => {
    console.log("Web server listening on port 3000!");
});
