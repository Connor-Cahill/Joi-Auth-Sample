const express = require('express');
const controller = require('./user.controller');

const router = express.Router(); // eslint-disable-line new-cap

//  GET: routes returns list of all user objects
router.get('/', (req, res) => controller.sendAllUsers(res));

//  GET: route returns specific user object
router.get('/:id', (req, res) => controller.sendSingleUser(req.params.id, res));

//  PATCH: route updates user information
router.patch('/:id', (req, res) => controller.updateUserInfo(req.params.id, req.body, res));

//  DELETE: deletes a user from DB
router.delete('/:id', (req, res) => controller.deleteUser(req.param.id, res));

module.exports = router;
