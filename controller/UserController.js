const BaseController = require('./index');
const UserModel = require('../models/userModel');
class UserController {

	static index = async (req, res, next) => {

		let users = await UserModel.find({});
		res.json(200, {
			// users: users
			requser: req.user
		})
	}

	static create = async (req, res, next) => {
		let userObj = req.body

		// let user = UserModel(userObj);
		let user  = await UserModel.create(userObj);
		// await user.save();

		res.json(200, {
			user: user
		})
	}

	static update = (req, res, next) => {
		res.send('this is update function controller')
	}

	static delete = (req, res, next) => {
		res.send('this is delete function controller')
	}

	static get = async (req, res, next) => {
		let id = req.params.id
		let user = await UserModel.find({id: id});
		res.json(200, {
			user: user
		})
	}
}

module.exports = UserController;