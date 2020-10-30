var express = require("express");
const axios = require('axios')
const {RouteCalculadora} = require("../routes")
var bodyParser = require("body-parser");
var app = express();



app.use(bodyParser.json());

app.use("/",RouteCalculadora);

app.listen(8000);
