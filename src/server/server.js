const app = require('express')();

// Connect routes
require('./routes')(app);

// Global error handler
app.use((err, req, res, next) => {
  const defaultError = {
    log: '⚠️ Express error handler caught unknown middleware error.',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign(defaultError, err);

  console.log(errorObj.log);
  res.status(errorObj.status).json(errorObj.message);
});

// Initialize database
require('./db');

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`⚡️ Server listening on port ${port}`);
});
