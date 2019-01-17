const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const UserSchema = new mongoose.Schema({
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  birthday: { type: Date, required: true },
});

UserSchema.pre('save', function userPreSave(next) {
  if (!this.isModified('password')) {
    return next();
  }
  this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8), null);
  return next();
});

UserSchema.methods.comparePassword = function comparesPasswordAgainstHash(password, done) {
  bcrypt.compareSync(password, this.password, (err, isMatch) => done(err, isMatch));
};

module.exports = mongoose.model('User', UserSchema);
