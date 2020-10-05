const mongoose = require('mongoose');

const { Schema, ObjectId } = mongoose;

const RequiredString = { type: String, required: true };

const dataSetSchema = new Schema({
  owner: { type: ObjectId, required: true },
  name: RequiredString,
  graphColor: {
    ...RequiredString,
    enum: require('../constants/colors'),
  },
  createdAt: { type: Date, default: Date.now },
  type: {
    ...RequiredString,
    enum: ['number', 'boolean'],
  },
  aggregateFunc: {
    ...RequiredString,
    enum: ['sum', 'count', 'average'],
  },
  // NOTE: ⚠️ might want to include 10-20 most recent data points here
  //       for convenience...
});

dataSetSchema.index({ owner: 1 });

const DataSet = mongoose.model('DataSet', dataSetSchema);

module.exports = DataSet;
