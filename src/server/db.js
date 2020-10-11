const mongoose = require('mongoose');

const defaultURL = 'mongodb://localhost';
const options = {
  dbName: process.env.MONGO_DBNAME || 'mylifeindata',
  auth: {
    user: process.env.MONGO_USER || '',
    password: process.env.MONGO_PASS || '',
  },
  useNewUrlParser: true,
};

mongoose.connect(process.env.MONGO_URL || defaultURL, options, () => {
  console.log('🍃 Connected to MongoDB!');
});
