 

const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs'); // For password hashing
// const validator = require('validator'); // For email validation

// Define the User Schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username is required'],
    unique: true, // Ensures unique usernames
    trim: true, // Removes whitespace from both ends
    minlength: [3, 'Username must be at least 3 characters long'],
    maxlength: [30, 'Username cannot exceed 30 characters'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true, // Ensures unique emails
    trim: true,
    lowercase: true, // Stores emails in lowercase
    
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
   
  }

});



// Create the Mongoose Model
const User = mongoose.model('User', userSchema);

module.exports = User;