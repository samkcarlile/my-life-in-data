const express = require('express');
const path = require('path');
const { authenticate } = require('./auth/middleware');

module.exports = (app) => {
  app.route('/api').use(express.json()).use(require('./auth'));
  app
    .route('/api/metrics')
    .use(authenticate)
    .use(require('./metrics'))
    .use(require('./points'));

  // serve the index.html/bundle.js statically
  app.get('/bundle.js', (req, res) =>
    res.sendFile(path.resolve(__dirname, '../../dist/bundle.js'))
  );
  app.get('/*', (req, res) =>
    res.sendFile(path.resolve(__dirname, '../../dist/index.html'))
  );
};
