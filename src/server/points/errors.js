const { createError } = require('../utils');

module.exports = {
  ErrorPointNotFound: createError(
    404,
    "the point with the given id doesn't exist"
  ),
};
