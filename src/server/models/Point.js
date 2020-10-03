const mongoose = require('mongoose');

const { Schema, ObjectId } = mongoose;

const pointSchema = new Schema({
  Point: {
    dataset: { type: ObjectId, required: true },
    timestamp: {
      type: Date,
      default: Date.now,
      index: true,
      unique: true,
    },
    value: { type: Number, required: true },
  },
});

//
pointSchema.index({ dataset: 1, timestamp: -1 });

const Point = mongoose.model('Point', pointSchema);

module.exports = Point;

/*
Point {
  datasetID: <ObjectID>
  timestamp: <Date>
  value: <number>
}
*/
