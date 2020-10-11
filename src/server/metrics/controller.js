const Metric = require('./model');
const { filterProperties, serverError } = require('../utils');
const { ErrorMetricNotFound } = require('../constants/errors');

const newError = serverError('metrics');
const getMetricForm = (body) =>
  filterProperties(body, ['name', 'color', 'type', 'aggregate']);

module.exports = {
  async create(req, res, next) {
    const metricForm = getMetricForm(req.body);
    metricForm.owner = req.user._id;

    try {
      const metric = await Metric.create(metricForm);
      res.status(200).json(metric);
    } catch (err) {
      next(newError('create', err));
    }
  },

  async update(req, res, next) {
    const query = { _id: req.params.metric, owner: req.user._id };
    const metricForm = getMetricForm(req.body);
    const options = { new: true, runValidators: true };

    try {
      const updatedMetric = await Metric.findOneAndUpdate(
        query,
        metricForm,
        options
      )
        .orFail(new ErrorMetricNotFound())
        .exec();
      res.status(200).json(updatedMetric);
    } catch (err) {
      next(newError('update', err));
    }
  },

  async getAll(req, res, next) {
    try {
      const metrics = await Metric.find({ owner: req.user._id }).exec();
      res.status(200).json(metrics);
    } catch (err) {
      next(newError('getAll', err));
    }
  },

  async getOne(req, res, next) {
    const query = { _id: req.params.metric, owner: req.user._id };

    try {
      const metric = await Metric.findOne(query).exec();
      res.status(200).json(metric);
    } catch (err) {
      next(newError('getOne', err));
    }
  },

  async delete(req, res, next) {
    const query = { _id: req.params.metric, owner: req.user._id };

    try {
      await Metric.deleteOne(query).orFail(new ErrorMetricNotFound());
      res.sendStatus(200);
    } catch (err) {
      // https://stackoverflow.com/questions/4088350/is-rest-delete-really-idempotent
      next(newError('delete', err, err.status));
    }
  },
};
