const Joi = require('joi');

module.exports = {
	body: Joi.object({
		num1: Joi.number().required(),
		num2: Joi.number().required()
	})
}
