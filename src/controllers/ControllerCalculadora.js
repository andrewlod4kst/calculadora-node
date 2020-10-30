const Controller = require("./Controller")

class ControllerCalculadora extends Controller{
	constructor(){
		super()
	}
	
	soma(){
		return async (req,res) => {
			res.setHeader('Content-Type', 'application/json');
			response = await axios.post("http://soma:8100/", req.body);
			res.json(response.data);
		}
	}
	
	sub(){
		return async (req,res) => {
			res.setHeader('Content-Type', 'application/json');
			response = await axios.post("http://subtracao:8200/", req.body);
			res.json(response.data);
		}
	}
	
	multi(){
	return async (req,res) => {
			res.setHeader('Content-Type', 'application/json');
			response = await axios.post("http://multiplicacao:8300/", req.body);
			res.json(response.data);
		}
	}
	
	div(){
		return async (req,res) => {
			res.setHeader('Content-Type', 'application/json');
			response = await axios.post("http://divisao:8400/", req.body);
			res.json(response.data);
		}
	}

}

module.exports = ControllerCalculadora
