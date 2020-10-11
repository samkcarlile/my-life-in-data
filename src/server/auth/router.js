const { combineMiddleware } = require('../utils');

const controller = require('./controller');
const validator = require('./validator');
const { signUp, login, issueToken, authenticate } = combineMiddleware(
  validator,
  controller
);

const router = require('express').Router();
router.post('/signup', signUp, issueToken);
router.post('/login', login, issueToken);
// Convenience route to check if a token is valid
router.post('/validateToken', authenticate, (req, res) =>
  res.status(200).json({ ok: true })
);

module.exports = router;
