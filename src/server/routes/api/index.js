const router = require('express').Router();

const authController = require('../../controllers/auth');

router.use('/datasets', authController.authenticate, require('./datasets'));

module.exports = router;
