const jwt = require('jsonwebtoken');
const SECRET_KEY = "kjfaslkfjsdlkfjsdklfjslk";

class AuthService {

	static generateToken = (user) => {
		user = user.toObject();

		delete user['password'];

	let token = jwt.sign(user, SECRET_KEY, {
		expiresIn: '2000s'
	})

	return token;
	}

	static verifyToken = async(headers) => {
		let token = headers['authorization'];
		if(token == undefined) return false;


		let res = false;
		await jwt.verify(token, SECRET_KEY, (err, response) => {
			if(err) return false;
			res = response;
		})

		return res;
	}
}

module.exports= AuthService;