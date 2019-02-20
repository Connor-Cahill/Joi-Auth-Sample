const User = require('./user.model');


//  Sends all user objects
async function Index(req, res) {
  res.json(await User.find());
}
//  Sends single user as JSON object given userId
async function Get(req, res) {
  res.json(await User.findById(req.params.id));
}
//  removes a user from DB given userId
async function Delete(req, res) {
  await User.findByIdAndRemove(req.params.id);
  return res.status(200).send('User successfully deleted');
}

//  Updates a users information given userId and new data
async function Update(req, res) {
  await User.findByIdAndUpdate(req.params.id, req.body);
  return res.status(200).send('User info updatted.');
}

module.exports = {
  Index,
  Get,
  Delete,
  Update,
};
