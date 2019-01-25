const User = require('../server/user/user.model');
const jwt = require('jsonwebtoken');
const config = require('../config/config');
//  Middleware for checking if there is a user and attaching to req.user
module.exports = (req, res, next) => {
  if (req.cookies.config.cookie === undefined || req.cookies.config.cookie === null) {
    req.user = null; // eslint-disable-line no-param-reassign
    return next();
  }
  const token = req.cookies.config.cookie;
  const uid = jwt.decode(token, config.jwtSecret)._id;
  User.findById(uid)
  .then((user) => {
    req.user = user; // eslint-disable-line no-param-reassign
    res.locals.user = user; // eslint-disable-line no-param-reassign
    return next();
  })
  .catch(err => res.send(err));
  return next();
};
