const mongoose = require('mongoose');

function connectDb(uri){
	 mongoose.connect(uri).then(res => console.log('connected'))
	.catch(err => console.log(err, ' not connected'));
}

module.exports = connectDb;
