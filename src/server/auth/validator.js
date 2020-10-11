const { body } = require('express-validator');

module.exports = {
  signUp: body(['username', 'password', 'firstName', 'lastName'])
    .exists()
    .isString(),
  login: body(['username', 'password']).exists().isString(),
};
