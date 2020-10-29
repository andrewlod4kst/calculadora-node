var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.json());

app.post("/", async (req,res) => {
	res.setHeader('Content-Type', 'application/json');
	res.json({result:req.body.num1 - req.body.num2});
});

app.listen(8200);
