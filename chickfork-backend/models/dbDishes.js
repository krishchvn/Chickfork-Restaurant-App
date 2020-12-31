const mongoose = require('mongoose');

const dishSchema = mongoose.Schema({
	name: String,
	type: String,
	imgUrl: String,
	desc: String,
	price: String,
});

module.exports = mongoose.model('dishes', dishSchema);
