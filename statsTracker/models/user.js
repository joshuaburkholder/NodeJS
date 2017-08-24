const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({

  username: {
    type: String,
  },
  password: {
    type: String,
  },
  category: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
  }],
});

userSchema.plugin(uniqueValidator);

const User = mongoose.model('User', userSchema);


module.exports = User;