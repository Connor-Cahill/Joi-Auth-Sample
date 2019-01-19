const express = require('express');
const authRoutes = require('./server/auth/auth.route');
const userRoutes = require('./server/user/user.route');

const router = express.Router(); // eslint-disable-line new-cap

router.use('/auth', authRoutes);
router.use('/users', userRoutes);


module.exports = router;
