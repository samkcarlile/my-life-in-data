const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { filterProperties, removeProperties } = require('../utils');
const {
  ErrorUserNotFound,
  ErrorPasswordIncorrect,
} = require('../constants/errors');

const authController = {};

authController.signUp = async (req, res, next) => {
  const newUserForm = filterProperties(req.body, [
    'username',
    'password',
    'firstName',
    'lastName',
    'age',
  ]);

  try {
    const newUser = await User.create(newUserForm);
    res.locals.user = newUser;
    next();
  } catch (err) {
    next({
      log: `⚠️ [ERROR] authController.signUp - ${err}`,
      message: { error: "Some shit went down I'm sorry." },
    });
  }
};

authController.login = async (req, res, next) => {
  const { username, password } = filterProperties(req.body, [
    'username',
    'password',
  ]);

  try {
    const user = User.findOne({ username })
      .orFail(new ErrorUserNotFound())
      .exec();

    if (await bcrypt.compare(password, user.password)) {
      res.locals.user = user;
      next();
    } else throw new ErrorPasswordIncorrect();
  } catch (err) {
    next({
      log: `⚠️ [ERROR] authController.login - ${err}`,
      message: {
        error: err.message,
        status: err.status || 500,
      },
    });
  }
};

authController.issueToken = async (req, res, next) => {
  if (!res.locals.user)
    return next({
      log: `⚠️ [ERROR] authController.issueToken - expected res.locals.user`,
      message: { error: 'Something went wrong.' },
    });

  const userPayload = removeProperties(res.locals.user, ['password', '_id']);

  // generate the token
  const token = jwt.sign({ user: userPayload }, 'secret', {
    expiresIn: '1y',
  });

  // send the token back
  res.status(200).json({ token });
};

/** Checks if the jwt is on the header and it is valid */
authController.authenticate = async (req, res, next) => {
  const authHeader = req.get('Authorization');

  const token = authHeader.split(' ')[1]; // it looks like this: 'Bearer: <tokenWillBeHere>'

  try {
    const payload = jwt.verify(token, 'secret');
    req.user = payload.user;
    next();
  } catch (err) {
    // token is bad
    next({
      log: `⚠️ [ERROR] authController.authenticate - ${err}`,
      message: {
        error: 'Authentication failed',
        status: 401,
      },
    });
  }
};

module.exports = authController;

// 1. User logs in with a username:password pair
// 2. Server responds with json web token
// 3. Client saves that token in either cookies or localStorage or somewhere
// 4. On every subsequent request to the server, the client sends the saved token as a header
