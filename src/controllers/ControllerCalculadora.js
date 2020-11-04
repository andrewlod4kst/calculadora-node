const Controller = require("./Controller")
const axios = require('axios')

class ControllerCalculadora extends Controller{
	constructor(){
		super();
		this.SOMA_IP = process.env.SOMA_IP;
		this.SUB_IP = process.env.SUB_IP;
		this.MULTI_IP = process.env.MULTI_IP;
		this.DIV_IP = process.env.DIV_IP;
	}
	
	soma(){
		return async (req,res) => {
			res.setHeader('Content-Type', 'application/json');
			var response = await axios.post(this.SOMA_IP, req.body);
			res.json(response.data);
		}
	}
	
	sub(){
		return async (req,res) => {
			res.setHeader('Content-Type', 'application/json');
			var response = await axios.post(this.SUB_IP, req.body);
			res.json(response.data);
		}
	}
	
	multi(){
	return async (req,res) => {
			res.setHeader('Content-Type', 'application/json');
			var response = await axios.post(this.MULTI_IP, req.body);
			res.json(response.data);
		}
	}
	
	div(){
		return async (req,res) => {
			res.setHeader('Content-Type', 'application/json');
			var response = await axios.post(this.DIV_IP, req.body);
			res.json(response.data);
		}
	}

}

module.exports = ControllerCalculadora
