const Controller = require("./Controller")

class ControllerSoma extends Controller{
	constructor(){
		super()
	}
	
	soma(){
		return async (req,res) => {
			res.setHeader('Content-Type', 'application/json');
			res.json({result:req.body.num1 + req.body.num2});
		}
	}

}

module.exports = ControllerSoma
