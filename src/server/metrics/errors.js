const { createError } = require('../utils');

module.exports = {
  ErrorMetricNotFound: createError(
    404,
    "the metric with the given id doesn't exist"
  ),
};
