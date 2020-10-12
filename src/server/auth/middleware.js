const jwt = require('jsonwebtoken');
const { SECRET } = require('../constants/auth');
const { serverError } = require('../utils');
const { ErrorBadToken } = require('./errors');

const newError = serverError('auth');

module.exports = {
  async authenticate(req, res, next) {
    try {
      const authHeader = req.get('Authorization');
      const token = authHeader.split(' ')[1]; // it looks like this: 'Bearer: <tokenIsHere>'

      const payload = jwt.verify(token, SECRET);
      req.user = payload.user;
      next();
      /* eslint-disable no-unused-vars */
    } catch (err) {
      next(newError('authenticate', new ErrorBadToken()));
    }
  },
};
