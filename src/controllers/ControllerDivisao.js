const Controller = require("./Controller")
const axios = require('axios')

class ControllerDivisao extends Controller{
	constructor(){
		super();
		this.SUB_IP = process.env.SUB_IP;
	}
	
	divisao(){
		return async (req,res) => {
			var cont = 0;
			var n1 = req.body.num1;
			while(n1 >= req.body.num2){
				var response = await axios.post(this.SUB_IP, {num1: n1, num2: req.body.num2});
				var result = response.data;
				n1 = result.result;
				cont += 1;
			}
			res.setHeader('Content-Type', 'application/json');
			res.json({result:cont});
		}
	}

}

module.exports = ControllerDivisao
