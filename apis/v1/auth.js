const express = require('express');

const authRouter = express.Router();

const AuthController = require('../../controller/AuthController');


authRouter.post('/login', AuthController.login);
authRouter.post('/signup', AuthController.signup);

module.exports = authRouter;