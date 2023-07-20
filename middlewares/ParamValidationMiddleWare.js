const jwt = require('jsonwebtoken');
const AuthService = require('../Services/AuthService');

const ParamValidationMiddleWare = async (req, res, next) => {
	let user = await AuthService.verifyToken(req.headers);
	if(user){
	console.log(user);

	req.user = user;
	next();

}else {
	res.status(401).json({
		message: "Un-Authorized Access."
	})
}
}

module.exports = ParamValidationMiddleWare;