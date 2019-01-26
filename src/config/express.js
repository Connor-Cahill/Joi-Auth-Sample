const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const checkAuth = require('../middleware/checkAuth.middleware');
const routes = require('../index.route');

const app = express();
app.use(cookieParser());
//  use check auth middleware
app.use(checkAuth);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Enable CORS - Cross Origin Resource Sharing.
app.use(cors());

// Mount all routes on /api path.
app.use('/api', routes);

module.exports = app;
