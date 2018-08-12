"use strict";

const express = require('express');
const path = require('path');
const generateReport = require('./generate-report.js');

const app = express();

const staticFilesPath = path.join(__dirname, "public");
const staticFilesMiddleWare = express.static(staticFilesPath);
app.use("/", staticFilesMiddleWare);

const data = [
    {
        "dive_divers": "Anjani Ganase, Christophe Bailhache",
        "dive_end_lat": "16'11.491S",
        "dive_end_lng": "145'53.630E",
        "dive_start_lat": "16'11.316S",
        "dive_start_lng": "145'53.883E",
        "dive_temperature": 0,
        "dive_visibility": 20,
        "duration": 37,
        "end_datetime": "2012-09-16 16:53:00",
        "reef_name": "Opal Reef",
        "start_datetime": "2012-09-16 16:16:00",
    },
    {
        "dive_divers": "Christophe Bailhache, Manuel Gonzalez Rivero",
        "dive_end_lat": "",
        "dive_end_lng": "",
        "dive_start_lat": "",
        "dive_start_lng": "",
        "dive_temperature": 0,
        "dive_visibility": 20,
        "duration": 60,
        "end_datetime": "2012-09-17 11:54:00",
        "reef_name": "Opal Reef",
        "start_datetime": "2012-09-17 10:54:00",
    },
    {
        "dive_divers": "Christophe Bailhache, Manuel Gonzalez Rivero",
        "dive_end_lat": "",
        "dive_end_lng": "",
        "dive_start_lat": "",
        "dive_start_lng": "",
        "dive_temperature": 25.5,
        "dive_visibility": 20,
        "duration": 40,
        "end_datetime": "2012-09-18 14:10:05",
        "reef_name": "Opal Reef",
        "start_datetime": "2012-09-18 13:30:16",
    },
    {
        "dive_divers": "Christophe Bailhache, Manuel Gonzalez Rivero",
        "dive_end_lat": "",
        "dive_end_lng": "",
        "dive_start_lat": "",
        "dive_start_lng": "",
        "dive_temperature": 0,
        "dive_visibility": 0,
        "duration": 43,
        "end_datetime": "2012-09-20 13:26:24",
        "reef_name": "Holmes Reef",
        "start_datetime": "2012-09-20 12:43:39",
    },
    {
        "dive_divers": "Christophe Bailhache, Anjani Ganase",
        "dive_end_lat": "",
        "dive_end_lng": "",
        "dive_start_lat": "",
        "dive_start_lng": "",
        "dive_temperature": 26.4,
        "dive_visibility": 40,
        "duration": 42,
        "end_datetime": "2012-09-20 16:26:02",
        "reef_name": "Holmes Reef",
        "start_datetime": "2012-09-20 15:43:39",
    }
];

app.get("/rest/report", (req, res) => {
    const report = generateReport(data);
    res.json(report);
});

app.listen(3000, () => {
    console.log("Web server listening on port 3000!");
});
