var express = require("express");
const axios = require('axios')
var bodyParser = require("body-parser");
var app = express();



app.use(bodyParser.json());

app.post("/soma", async (req,res) => {
	res.setHeader('Content-Type', 'application/json');
	response = await axios.post("http://soma:8100/", req.body);
	res.json(response.data);
});

app.post("/sub", async (req,res) => {
	res.setHeader('Content-Type', 'application/json');
	response = await axios.post("http://subtracao:8200/", req.body);
	res.json(response.data);
});

app.post("/multi", async (req,res) => {
	res.setHeader('Content-Type', 'application/json');
	response = await axios.post("http://multiplicacao:8300/", req.body);
	res.json(response.data);
});

app.post("/div", async (req,res) => {
	res.setHeader('Content-Type', 'application/json');
	response = await axios.post("http://divisao:8400/", req.body);
	res.json(response.data);
});

app.listen(8000);
