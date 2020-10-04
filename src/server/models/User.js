const mongoose = require('mongoose');

const { Schema } = mongoose;

const RequiredString = { type: String, required: true };

const userSchema = new Schema({
  username: {
    ...RequiredString,
    index: true,
    unique: true,
  },
  password: RequiredString,
  firstName: RequiredString,
  lastName: RequiredString,
  age: { type: Number, required: true },
});

const User = mongoose.model('User', userSchema);

module.exports = User;

/*
username
password
firstname
lastname
age
gender

*/
