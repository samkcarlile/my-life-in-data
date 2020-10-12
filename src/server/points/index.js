const { combineMiddleware } = require('../utils');

const controller = require('./controller');
const validator = require('./validator');
const middleware = combineMiddleware(validator, controller);

const router = require('express').Router();
router
  .route('/:metric/points$')
  .post(middleware.create)
  .get(middleware.getAll)
  .delete(middleware.deleteAll);

router
  .route('/:metric/points/:point')
  .put(middleware.update)
  .get(middleware.getOne)
  .delete(middleware.deleteOne);

module.exports = router;
