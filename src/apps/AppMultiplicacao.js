var express = require("express");
const axios = require('axios')
const {RouteMultiplicacao} = require("../routes")
var bodyParser = require("body-parser");
var app = express();



app.use(bodyParser.json());

app.use("/",RouteMultiplicacao);

app.listen(8300);
