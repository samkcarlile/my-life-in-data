/**
 * Constants for error messages
 * @module errors
 */

const createError = (status, message) => {
  function error() {
    this.status = status;
    this.message = message;
  }
  error.prototype = Object.create(Error.prototype);
  return error;
};

module.exports = {
  ErrorDataSetNotFound: createError(
    404,
    "the dataset with the given id doesn't exist"
  ),
  ErrorUserNotFound: createError(
    404,
    "the user with the given user name doesn't exist"
  ),
  ErrorPasswordIncorrect: createError(401, 'password incorrect'),
};
