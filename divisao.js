var express = require("express");
const axios = require('axios')
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.json());

app.post("/", async (req,res) => {
	var cont = 0;
	var n1 = req.body.num1;
	while(n1 >= req.body.num2){
		response = await axios.post("http://subtracao:8200/", {num1: n1, num2: req.body.num2});
		result = response.data;
		n1 = result.result;
		cont += 1;
	}
	res.setHeader('Content-Type', 'application/json');
	res.json({result:cont});
});

app.listen(8400);
