const User = require('../server/user/user.model');

//  Middleware to make sure user is admin
module.exports = (req, res, next) => {
  User.findById(req.user._id)
  .then((user) => {
    if (!user.admin) {
      res.send('Error: You Must be an admin to do that!');
    }
    return next();
  })
  .catch(err => res.send(err));
};
