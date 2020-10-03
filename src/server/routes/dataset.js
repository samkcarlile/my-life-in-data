const { Router } = require('express');

// /api/datasets
const router = Router();

/* Create a new data set */
router.post('/:id', (req, res) => {
  res.sendStatus(200);
});

/* Update existing data set */
router.put('/', (req, res) => {
  res.sendStatus(200);
});

/* Get all user data sets */
router.get('/', (req, res) => {
  res.sendStatus(200);
});

/* Get data set by id */
router.get('/:id', (req, res) => {
  res.sendStatus(200);
});

/* Delete existing data set */
router.delete('/:id', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
