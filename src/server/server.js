const express = require('express');

const app = express();

// Connect routes
require('./routes')(app);

// Global error handling
app.use((err, req, res) => {
  const defaultError = {
    log: '⚠️ Express error handler caught unknown middleware error.',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign(defaultError, err);

  console.log(errorObj.log);
  res.status(errorObj.status).json(errorObj.message);
});

app.listen(process.env.PORT || 3000, () => {
  console.log('⚡️ prepare your body');
});
