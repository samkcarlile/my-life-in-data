const { createError } = require('../utils');

module.exports = {
  ErrorUserNotFound: createError(
    404,
    "the user with the given username doesn't exist"
  ),
  ErrorBadPassword: createError(401, 'incorrect password'),
  ErrorBadToken: createError(401, 'bad token'),
};
