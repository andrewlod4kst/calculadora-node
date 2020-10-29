var express = require("express");
const axios = require('axios')
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.json());

app.post("/", async (req,res) => {
	var cont = 0;
	var acc = 0;
	while(cont < req.body.num1){
		response = await axios.post("http://soma:8100/", {num1: acc, num2: req.body.num2});
		result = response.data;
		acc = result.result;
		cont += 1;
	}
	res.setHeader('Content-Type', 'application/json');
	res.json({result:acc});
});

app.listen(8300);
