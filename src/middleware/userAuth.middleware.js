
//  Middleware to make sure user in authorized to go to route
//  Auth level: User
module.exports = (req, res, next) => {
  if (!req.user) {
    return res.status(401).send('You must be signed in to do that');
  }

  return next();
};
