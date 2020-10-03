const mongoose = require('mongoose');

const { Schema, ObjectId } = mongoose;

const pointSchema = new Schema({
  Point: {
    owner: { type: ObjectId /* required: true */ },
    dataset: { type: ObjectId, required: true },
    timestamp: {
      type: Date,
      default: Date.now,
    },
    value: { type: Number, required: true },
  },
});

/*
  Create an index on the Point schema to aid performance when retrieving the points for a data set.
  We create a compound index first on the `dataset` ObjectId, then for the timestamps in descending order.
  This helps MongoDB know that Points will likely be accessed in such a way that groups the points by their data set.
  We compound that index with the `timestamp` to make retrieval of more recent points faster than older points.

  - https://docs.mongodb.com/manual/core/index-compound/
  - https://mongoosejs.com/docs/guide.html#indexes
  - https://stackoverflow.com/questions/12573753/creating-multifield-indexes-in-mongoose-mongodb
*/
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
