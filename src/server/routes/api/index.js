const router = require('express').Router();

const authController = require('../../controllers/auth');

router.use('/datasets', authController.authenticate, require('./datasets'));
router.use(require('./auth'));

module.exports = router;
