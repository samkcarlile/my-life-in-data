const express = require('express');
const path = require('path');

const app = express();

// middleware for json body parsing
app.use('/api', express.json());

// routes for api
// TODO: connect the routes!
// router.use('/metrics', authController.authenticate, require('./datasets'));
// router.use(require('./auth'));

// serve the index.html/bundle.js statically
app.get('/bundle.js', (req, res) =>
  res.sendFile(path.resolve(__dirname, '../../dist/bundle.js'))
);
app.get('/*', (req, res) =>
  res.sendFile(path.resolve(__dirname, '../../dist/index.html'))
);

app.use((err, req, res, next) => {
  next; // unused 👅
  const defaultError = {
    log: '⚠️ Express error handler caught unknown middleware error.',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign(defaultError, err);

  console.log(errorObj.log);
  res.status(errorObj.status).json(errorObj.message);
});

app.listen(3000, () => {
  console.log('⚡️ prepare your body');
});
