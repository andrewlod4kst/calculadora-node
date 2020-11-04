const Controller = require("./Controller")
const axios = require('axios')

class ControllerMultiplicacao extends Controller{
	constructor(){
		super();
		this.SOMA_IP = process.env.SOMA_IP;
	}
	
	multiplicacao(){
		return async (req,res) => {
			var cont = 0;
			var acc = 0;
			while(cont < req.body.num1){
				var response = await axios.post(this.SOMA_IP, {num1: acc, num2: req.body.num2});
				var result = response.data;
				acc = result.result;
				cont += 1;
			}
			res.setHeader('Content-Type', 'application/json');
			res.json({result:acc});
		}
	}

}

module.exports = ControllerMultiplicacao
