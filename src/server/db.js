const mongoose = require('mongoose');

const uri = process.env.MONGO_URL || 'mongodb://localhost';

const useAuth = process.env.MONGO_USER && process.env.MONGO_PASS;

const options = {
  dbName: process.env.MONGO_DBNAME || 'mylifeindata',
  ...(useAuth
    ? {
        auth: {
          user: process.env.MONGO_USER,
          password: process.env.MONGO_PASS,
        },
      }
    : {}),
  useNewUrlParser: true,
};

mongoose.connect(uri, options, (err) => {
  if (err) {
    console.log("🚨 Couldn't connect to MongoDB. Exiting!");
    process.exit(1);
  }
  console.log('🍃 Connected to MongoDB!');
});
