const User = require('../user/user.model');
const config = require('../../config/config');
const jwt = require('jsonwebtoken');
const Joi = require('joi');

//  Creates a new user and issues jwt token
async function SignUp(req, res) {
  const user = new User(req.body);
  await user.save();
  return issueCookie(res, user);
}

//  signs in user, if exists, and issues jwt token
async function SignIn(req, res) {
  const user = await User.findOne({ email: req.body.email }, 'email password');
  if (!user) {
    return res.status(401).send('No account associated with this email.');
  }
  user.comparePassword(req.password, (err, isMatch) => {
    if (!isMatch) {
      return res.status(401).send('Email or Password incorrect.');
    }
    return true;
  });
  return issueCookie(res, user);
}

function signOut(res) {
  return res.clearCookie(config.cookie);
}

//  Validates sign-up req.body to make sure correct User Schema
function validateUserSchema(userData) {
  //  Joi Schema for User
  const schema = Joi.object().keys({
    firstName: Joi.string().regex(/^[a-z ,.'-]+$/i).required(),
    lastName: Joi.string().regex(/^[a-z ,.'-]+$/i).required(),
    email: Joi.string().email().required(),
    username: Joi.string().alphanum().required(),
    password: Joi.string().min(6).max(35).required(),
    phoneNumber: Joi.string().min(10).max(11),
    birthday: Joi.any(),
    admin: Joi.boolean(),
  });
  return Joi.validate(userData, schema);
}

//  issues jwt token
function issueCookie(res, user) {
  const token = jwt.sign({ _id: user._id }, config.jwtSecret, { expiresIn: '60 days' });
  res.cookie(config.cookie, token, { maxAge: 60 * 60 * 24 * 1000, httpOnly: true });
  res.status(200).send('User Successfully Signed In');
}

module.exports = {
  SignIn,
  SignUp,
  signOut,
  issueCookie,
  validateUserSchema,
};
