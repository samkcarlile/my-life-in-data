const mongoose = require('mongoose');

const { Schema, ObjectId } = mongoose;
const RequiredString = { type: String, required: true };

const metricSchema = new Schema({
  owner: { type: ObjectId, required: true },
  name: RequiredString,
  color: {
    ...RequiredString,
    enum: require('../constants/colors'),
  },
  createdAt: { type: Date, default: Date.now },
  type: {
    ...RequiredString,
    enum: ['number', 'boolean'],
  },
  aggregate: {
    ...RequiredString,
    enum: ['sum', 'count', 'average'],
  },
});

metricSchema.index({ owner: 1 });

const Metric = mongoose.model('Metric', metricSchema);

module.exports = Metric;
