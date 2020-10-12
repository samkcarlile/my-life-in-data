const { body, param } = require('express-validator');

const isValidMetricForm = body(['name', 'color', 'type', 'aggregate'])
  .exists()
  .isString()
  .trim();

module.exports = {
  create: isValidMetricForm,
  update: isValidMetricForm,

  getOne: param('metric').exists(),
  delete: param('metric').exists(),
};
