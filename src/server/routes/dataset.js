const { Router } = require('express');

const dataSetController = require('../controllers/dataset');

// /api/datasets
const router = Router();

/* Create a new data set */
router.post('', dataSetController.create);

/* Update existing data set */
router.put('/:id', dataSetController.update);

/* Get all user data sets */
router.get('/', dataSetController.getAll);

/* Get data set by id */
router.get('/:id', dataSetController.getOne);

/* Delete existing data set */
router.delete('/:id', dataSetController.delete);

module.exports = router;
