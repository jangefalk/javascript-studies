// connect to a mongo database
require('dotenv').config();

var mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, () => {
  console.log('connected to mongodb');
});

// create a schema
var userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

// create a model
var User = mongoose.model('User', userSchema);

// create a new user
var user = new User({
  name: 'John Doe',
  email: '',
});

module.exports = User;

// create a monbodb connection with mongoose
