const express = require('express');
const controller = require('./auth.controller');
const wrap = require('../../middleware/asyncHandler');

const router = express.Router(); // eslint-disable-line new-cap
//  POST: Sign Up, creates a user and saves in db, also issues Token
// eslint-disable-next-line
router.post('/sign-up', (req, res) => {
  const result = controller.validateUserSchema(req.body);
  if (result.error) {
    throw result.error.message;
  }
  return wrap(controller.signUp(req, res));
});

//  POST: Sign in, signs in user and issues token
router.post('/sign-in', wrap(controller.SignIn));

//  GET: signs a user out. REMOVES Token
router.get('/sign-out', (req, res) => {
  controller.signOut(res);
  return res.status(200).send('User was signed out');
});

module.exports = router;
