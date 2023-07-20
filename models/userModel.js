const mongoose = require('mongoose');

const userModel = new mongoose.Schema({
 email: {
    type: String,
    required: true,
    // unique: true,
 },
 password: {
    type: String,
    required: true,
 },
 name: {
 	type: String,
 	required: false
 },
 marks: {
 	type: Number,
 	required: false
 },
 age: {
 	type: Number,
 	required: false,
 default: 0,
 }
})

const User = mongoose.model('usertest', userModel);

module.exports = User;