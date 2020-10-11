const { body, param } = require('express-validator');
const Metric = require('../metrics/model');

const metricExists = param('metric')
  .exists()
  .bail()
  .custom((value) => {
    return Metric.findById(value).orFail(
      new Error(`metric with id ${value} doesn't exist`)
    );
  });

module.exports = {
  create: [body('value').exists().isNumeric().toFloat(), metricExists],
  update: this.create,
  getAll: metricExists,
};
