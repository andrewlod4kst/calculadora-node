var express = require("express");
const axios = require('axios')
const {RouteSoma} = require("../routes")
var bodyParser = require("body-parser");
var app = express();



app.use(bodyParser.json());

app.use("/",RouteSoma);

app.listen(8100);
