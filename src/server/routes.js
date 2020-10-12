const express = require('express');
const path = require('path');
const { authenticate } = require('./auth/middleware');

module.exports = (app) => {
  const api = express.Router();
  api.use(express.json());
  api.use(require('./auth'));

  const metrics = express.Router();
  metrics.use(authenticate);
  metrics.use(require('./metrics'));
  metrics.use(require('./points'));

  api.use('/metrics', metrics);
  app.use('/api', api);

  // serve static assets
  app.get(
    '/*',
    express.static(path.resolve(__dirname, '../../dist/')),
    (req, res) => res.sendFile(path.resolve(__dirname, '../../dist/index.html'))
  );

  // 404 Not Found
  app.use('/', function (req, res) {
    res.sendStatus(404);
  });
};
