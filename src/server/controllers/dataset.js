const DataSet = require('../models/DataSet.js');

const { filterProperties } = require('../utils');
const { ErrorDataSetNotFound } = require('../constants/errors');

const dataSetController = {};

dataSetController.create = async (req, res, next) => {
  const dataSetForm = filterProperties(req.body, [
    'name',
    'graphColor',
    'type',
    'aggregateFunc',
  ]);

  try {
    const dataset = await DataSet.create(dataSetForm);
    res.status(200).json(dataset);
  } catch (err) {
    next({
      log: `⚠️ [ERROR] dataSetController.create - ${err}`,
      message: { error: "Some shit went down I'm sorry." },
    });
  }
};

dataSetController.update = async (req, res, next) => {
  const { dataset: id } = req.params;
  const dataSetForm = filterProperties(req.body, [
    'name',
    'graphColor',
    'type',
    'aggregateFunc',
  ]);

  try {
    const updatedDataSet = await DataSet.findByIdAndUpdate(id, dataSetForm, {
      new: true,
      runValidators: true,
    }).exec();
    res.status(200).json(updatedDataSet);
  } catch (err) {
    next({
      log: `⚠️ [ERROR] dataSetController.update - ${err}`,
      message: { error: "Some shit went down I'm sorry." },
    });
  }
};

dataSetController.getAll = async (req, res, next) => {
  try {
    const dataSets = await DataSet.find({}).exec();
    res.status(200).json(dataSets);
  } catch (err) {
    next({
      log: `⚠️ [ERROR] dataSetController.getAll - ${err}`,
      message: { error: "Some shit went down I'm sorry." },
    });
  }
};

dataSetController.getOne = async (req, res, next) => {
  const { dataset: id } = req.params;

  try {
    const dataSet = await DataSet.findById(id).exec();
    res.status(200).json(dataSet);
  } catch (err) {
    next({
      log: `⚠️ [ERROR] dataSetController.getOne - ${err}`,
      message: { error: "Some shit went down I'm sorry." },
    });
  }
};

dataSetController.delete = async (req, res, next) => {
  const { dataset: id } = req.params;

  try {
    await DataSet.deleteOne({ _id: id }).orFail(ErrorDataSetNotFound);
    res.sendStatus(200);
  } catch (err) {
    next({
      log: `⚠️ [ERROR] dataSetController.delete - ${err}`,
      // https://stackoverflow.com/questions/4088350/is-rest-delete-really-idempotent
      status: err.message === ErrorDataSetNotFound.message ? 404 : 500,
      message: { error: 'error deleting dataset' },
    });
  }
};

module.exports = dataSetController;
