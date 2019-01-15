const express = require('express');
const authRoutes = require('./server/auth/auth.route');

const router = express.Router(); // eslint-disable-line new-cap

router.use('/auth', authRoutes);

module.exports = router;
