const express = require('express');

const app = express();

// require routers
const dataSetRouter = require('./routes/dataset');

// middleware for json body parsing
app.use('/api', express.json());

// routes for api
app.use('/api/dataset', dataSetRouter);
// routes for data sets
// routes for points
