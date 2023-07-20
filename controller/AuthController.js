const BaseController = require('./index');
const userModel = require('../models/userModel');
const AuthService = require('../Services/AuthService');

class AuthController extends BaseController {
	static required_fields = ['email', 'password'];

	static login = (req, res, next) => {
		

	}

	static signup = async (req, res, next) => {
		let user = req.body;

		let validated = this.required_fields.every(field => 
			user[field] != undefined && user[field] != "")

		if(validated){
			let userSaved  = await userModel.create(user);
			if(userSaved){
				let token = AuthService.generateToken(userSaved);

				res.status(200).json({
					token: token,
				})
			}else {
				res.status(500).json({
					message: "Acccount creation failed"
				})
			}
		}else {
				res.status(401).json({
					message: "All fields must be provided."
				})
			}

	}
}

module.exports = AuthController;