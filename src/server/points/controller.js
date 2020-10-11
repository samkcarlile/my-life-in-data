const Point = require('./model');
const { serverError } = require('../utils');
const { ErrorPointNotFound } = require('./errors');

const newError = serverError('points');

module.exports = {
  async create(req, res, next) {
    const pointForm = {
      owner: req.user._id,
      metric: req.params.metric,
      value: req.body.value,
    };

    try {
      const point = await Point.create(pointForm);
      res.status(200).json(point);
    } catch (err) {
      next(newError('create', err));
    }
  },

  async update(req, res, next) {
    const query = { _id: req.params.point, owner: req.user._id };
    const pointForm = { value: req.body.value };
    const options = { new: true, runValidators: true };

    try {
      const updatedPoint = await Point.findOneAndUpdate(
        query,
        pointForm,
        options
      )
        .orFail(new ErrorPointNotFound())
        .exec();
      res.status(200).json(updatedPoint);
    } catch (err) {
      next(newError('update', err));
    }
  },

  async getAll(req, res, next) {
    const query = { metric: req.params.metric, owner: req.user._id };

    try {
      const points = await Point.find(query).exec();
      res.status(200).json(points);
    } catch (err) {
      next(newError('getAll', err));
    }
  },

  async getOne(req, res, next) {
    const query = { _id: req.params.point, owner: req.user._id };

    try {
      const point = await Point.findOne(query)
        .orFail(new ErrorPointNotFound())
        .exec();
      res.status(200).json(point);
    } catch (err) {
      next(newError('getOne', err));
    }
  },

  async deleteOne(req, res, next) {
    const query = { _id: req.params.point, owner: req.user._id };

    try {
      await Point.deleteOne(query).orFail(new ErrorPointNotFound()).exec();
      res.sendStatus(200);
    } catch (err) {
      next(newError('deleteOne', err));
    }
  },

  async deleteAll(req, res, next) {
    const query = { metric: req.params.metric, owner: req.user._id };

    try {
      await Point.deleteMany(query).orFail(new ErrorPointNotFound());
      res.sendStatus(200);
    } catch (err) {
      next(newError('deleteAll', err));
    }
  },
};
