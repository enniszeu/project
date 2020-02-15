var mongoose = require('mongoose');


var postSchema = new mongoose.Schema({
	name : String,
	conten: String,
	imgeFile: String,
	email:String,
	password:String,
	url:String,
	textAria:Number, 
	imageName:String,
	date:String
});

var Post = mongoose.model('Post', postSchema, 'post');

module.exports = Post;