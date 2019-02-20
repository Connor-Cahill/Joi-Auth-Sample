const express = require('express');
const controller = require('./user.controller');
const wrap = require('../../middleware/asyncHandler.js');

const router = express.Router(); // eslint-disable-line new-cap

//  GET: routes returns list of all user objects
router.get('/', wrap(controller.Index));
//  GET: route returns specific user object
router.get('/:id', wrap(controller.Get));
//  PATCH: route updates user information
router.patch('/:id', wrap(controller.Update));
//  DELETE: deletes a user from DB
router.delete('/:id', wrap(controller.Delete));

module.exports = router;
