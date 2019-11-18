const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const UserSchema  = new Schema({

  firstname: { 
    type: String, 
    required: false, 
  },
  lastname: { 
    type: String, 
    required: false,   
  },
  username: { 
    type: String, 
    required: true,   
  },
  email:{
    type:String,
    required:true,
  },
  password: { 
    type: String, 
    required: true,   
  },
  role: {
    type: String
  },



});

var User =  mongoose.model('User', UserSchema );

module.exports = User