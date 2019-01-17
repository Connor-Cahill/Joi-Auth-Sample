const User = require('../user/user.model');
const config = require('../../config/config');
const jwt = require('jsonwebtoken');
const Joi = require('joi');

function signUp(userData) {
  const user = new User(userData);
  user.password = user.generateHash(user.password);
  return user.save();
}

function signIn(email, password, res) {
  return User.findOne({ email }, 'email password').then((user) => {
    if (!user) {
      return res.status(401).send('No account associated with this email.');
    }
    user.comparePassword(password, (err, isMatch) => {
      if (!isMatch) {
        return res.status(401).send('Email or password incorrect.');
      }
      return true;
    });
    return issueCookie(res, user);
  })
  .catch(err => res.send(err));
}

function signOut(res) {
  return res.clearCookie(config.cookie);
}


function issueCookie(res, user) {
  const token = jwt.sign({ _id: user._id }, config.jwtSecret, { expiresIn: '60 days' });
  res.cookie(config.cookie, token, { maxAge: 60 * 60 * 24 * 1000, httpOnly: true });
  res.status(200).send('User Successfully Signed In');
}

function joiValidateUser(userData) {
  const schema = Joi.object().keys({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    username: Joi.string().alphanum().required(),
    password: Joi.string().min(6).required(),
    phoneNumber: Joi.string().min(10).max(11),
    birthday: Joi.string(),
  });
  return Joi.validate(userData, schema);
}

module.exports = {
  signUp,
  signIn,
  signOut,
  issueCookie,
  joiValidateUser,
};
