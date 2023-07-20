const express = require('express');
const UserController = require('../../controller/UserController');

const PVM = require('../../middlewares/ParamValidationMiddleWare');
const userRouter = express.Router();

userRouter.use(PVM);

userRouter.get('/', UserController.index);
userRouter.get('/:id', UserController.get);
userRouter.post('/', UserController.create);
userRouter.put('/', UserController.update);
userRouter.delete('/', UserController.delete);




module.exports = userRouter;