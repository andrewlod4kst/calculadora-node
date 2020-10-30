var express = require("express");
const axios = require('axios')
const {RouteDivisao} = require("../routes")
var bodyParser = require("body-parser");
var app = express();



app.use(bodyParser.json());

app.use("/",RouteDivisao);

app.listen(8400);
