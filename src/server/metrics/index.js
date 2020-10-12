const { combineMiddleware } = require('../utils');

const controller = require('./controller');
const validator = require('./validator');
const middleware = combineMiddleware(validator, controller);

const router = require('express').Router();
router.post('', middleware.create);
router.get('', middleware.getAll);
router
  .route('/:metric$')
  .put(middleware.update)
  .get(middleware.getOne)
  .delete(middleware.delete);

module.exports = router;
