const express = require('express');
const controller = require('./auth.controller');

const router = express.Router(); // eslint-disable-line new-cap
//  POST: Sign Up, creates a user and saves in db, also issues Token
// eslint-disable-next-line
router.post('/sign-up', (req, res) => {
  controller.signUp(req.body).then(user => controller.issueCookie(res, user))
  .catch(err => res.send(err));
});

//  POST: Sign in, signs in user and issues token
router.post('/sign-in', (req, res) => {
  controller.signIn(req.body.email, req.body.password, res);
});

//  GET: signs a user out. REMOVES Token
router.get('/sign-out', (req, res) => {
  controller.signOut(res);
  return res.status(200).send('User was signed out');
});

module.exports = router;
