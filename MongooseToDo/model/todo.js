var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TodoSchema = new Schema({
	name:String,
 	updated: { type: Date, default: Date.now },	
 	priority:Number
});

mongoose.model('todo', TodoSchema);