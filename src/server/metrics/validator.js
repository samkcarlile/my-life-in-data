const { body, param } = require('express-validator');

module.exports = {
  create: body(['name', 'color', 'type', 'aggregate'])
    .exists()
    .isString()
    .trim(),

  update: this.create,

  getOne: param('metric').exists(),
  delete: param('metric').exists(),
};
