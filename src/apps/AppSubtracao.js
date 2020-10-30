var express = require("express");
const axios = require('axios')
const {RouteSubtracao} = require("../routes")
var bodyParser = require("body-parser");
var app = express();



app.use(bodyParser.json());

app.use("/",RouteSubtracao);

app.listen(8200);
