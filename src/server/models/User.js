const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
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
  // age: { type: Number, required: true },
});

userSchema.pre('save', async function () {
  this.password = await bcrypt.hash(this.password, saltRounds);
});

const User = mongoose.model('User', userSchema);

module.exports = User;
