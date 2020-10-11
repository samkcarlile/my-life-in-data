const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('./model');
const { SECRET } = require('../constants/auth');
const { filterProperties, removeProperties, serverError } = require('../utils');
const {
  ErrorUserNotFound,
  ErrorBadPassword,
  ErrorBadToken,
} = require('./errors');

const newError = serverError('auth');

module.exports = {
  async signUp(req, res, next) {
    const userForm = filterProperties(req.body, [
      'username',
      'password',
      'firstName',
      'lastName',
    ]);

    try {
      const user = await User.create(userForm);
      res.locals.user = user.toObject();
      next();
    } catch (err) {
      next(newError('signUp', err));
    }
  },

  async login(req, res, next) {
    const { username, password } = req.body;

    try {
      const user = await User.findOne({ username })
        .orFail(new ErrorUserNotFound())
        .exec();

      if (
        await bcrypt
          .compare(password, user.password)
          .catch(() => Promise.reject(new ErrorBadPassword()))
      ) {
        res.locals.user = user.toObject();
        next();
      }
    } catch (err) {
      next(newError('login', err));
    }
  },

  async issueToken(req, res, next) {
    if (!res.locals.user)
      return next(
        newError('issueToken', new Error('expected res.locals.user'))
      );

    // generate the token
    const userPayload = removeProperties(res.locals.user, ['password']);
    const token = jwt.sign({ user: userPayload }, SECRET, {
      expiresIn: '1y',
    });

    // send the token back
    res.status(200).json({ token });
  },

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
