const express = require('express');
const router  = express.Router();

const authRoutes = require('./authentication.controller');
const thrRoutes  = require('./threads.controller');
const picRoutes  = require('./images.controller');

router.use('/', authRoutes);
router.use('/threads', thrRoutes);
router.use('/images', picRoutes);

module.exports = router;
