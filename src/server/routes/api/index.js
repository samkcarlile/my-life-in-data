const router = require('express').Router();

router.use('/datasets', require('./datasets'));

module.exports = router;
