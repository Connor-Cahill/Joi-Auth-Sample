const User = require('./user.model');

//  Sends all users as list of JSON objects
function sendAllUsers(res) {
  User.find({})
  .then(users => res.send(users))
  .catch(err => res.send(err));
}
//  Sends single user as JSON object given userId
function sendSingleUser(userId, res) {
  User.findById(userId)
  .then(user => res.send(user))
  .catch(err => res.send('Error', err));
}
//  removes a user from DB given userId
function deleteUser(userId, res) {
  User.findOneAndRemove({ _id: userId })
  .then(() => res.status(200).send('User was deleted!'))
  .catch(err => res.send(err));
}

//  Updates a users information given userId and new data
//  NOTE: data passed should be equal to req.body and you can call the validate schema method
function updateUserInfo(userId, data, res) {
  User.findById(userId)
  .then((user) => {
    user.set(data);
    return user.save();
  })
  .then(() => res.status(200).send('information was updated'))
  .catch(err => res.send(err));
}

module.exports = {
  sendAllUsers,
  sendSingleUser,
  deleteUser,
  updateUserInfo,

};
