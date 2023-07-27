const express = require('express');
var cors = require('cors')
const app = express();
app.use('*',cors())

const bodyParser = require('body-parser');

app.use(bodyParser.json());

const connectDb = require('./config_db');

connectDb("mongodb+srv://theirfanullah:irfan1234@cluster0.ef75mhz.mongodb.net/?retryWrites=true&w=majority")


const UserRouter = require('./apis/v1/user_endpoints');
const authRouter = require('./apis/v1/auth');

app.use('/user', UserRouter);
app.use('/auth', authRouter);





app.listen(3002, ()=> {
	console.log('application is now running');
})