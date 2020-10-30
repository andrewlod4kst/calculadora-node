const Controller = require("./Controller")

class ControllerSubtracao extends Controller{
	constructor(){
		super()
	}
	
	subtracao(){
		return async (req,res) => {
			res.setHeader('Content-Type', 'application/json');
			res.json({result:req.body.num1 - req.body.num2});
		}
	}

}

module.exports = ControllerSubtracao
