const mongoose = require('mongoose');
const Schema  = mongoose.Schema;
const UserSchema = new Schema({
   employeeId: Number,
  username: String,
  password: String,
  firstname: String,
  lastname: String,
  role: String,
  isActive: Boolean,
  isActivated: Boolean,
  isTardy: Boolean,
  isPunctual: Boolean,
  isAbsentee: Boolean,


})

module.exports = mongoose.model('User', UserSchema);
