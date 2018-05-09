const express = require('express');
const router  = express.Router();

const authRoutes = require('./authentication.controller');
const thrRoutes  = require('./threads.controller');
const imgRoutes  = require('./images.controller');

router.use('/', authRoutes);
router.use('/threads', thrRoutes);
router.use('/images', imgRoutes);

module.exports = router;
