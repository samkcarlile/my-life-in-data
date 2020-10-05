const express = require('express');
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://badboi.isk8a.azure.mongodb.net/mylifeindata', {
  auth: {
    user: 'fire',
    password: 'fYzgID9ajNNj3K3j',
  },
  useNewUrlParser: true,
});
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});

const app = express();

// middleware for json body parsing
app.use('/api', express.json());

// routes for api
app.use('/api', require('./routes/api'));

app.use((err, req, res, next) => {
  next; // unused
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
