const Point = require('../models/Point.js');

const { filterProperties } = require('../utils');

const pointController = {};

pointController.create = async (req, res, next) => {
  const { dataset } = req.params;
  const point = filterProperties(req.body, ['value']);

  console.log(
    JSON.stringify({
      dataset,
      ...point,
    })
  );

  try {
    const newPoint = await Point.create({
      dataset,
      ...point,
    });
    res.status(200).json(newPoint);
  } catch (err) {
    next({
      log: `⚠️ [ERROR] pointController.create - ${err}`,
      message: { error: "Some shit went down I'm sorry." },
    });
  }
};

pointController.getAll = async (req, res, next) => {
  const { dataset } = req.params;

  try {
    const allPoints = await Point.find({ dataset }).exec();
    res.status(200).json(allPoints);
  } catch (err) {
    next({
      log: `⚠️ [ERROR] pointController.getAll - ${err}`,
      message: { error: "Some shit went down I'm sorry." },
    });
  }
};

pointController.getOne = async (req, res, next) => {
  const { point: id } = req.params;

  try {
    const onePoint = await Point.findById(id).exec();
    res.status(200).json(onePoint);
  } catch (err) {
    next({
      log: `⚠️ [ERROR] pointController.getOne - ${err}`,
      message: { error: "Some shit went down I'm sorry." },
    });
  }
};

pointController.update = async (req, res, next) => {
  const { point: id } = req.params;
  const pointUpdateForm = filterProperties(req.body, ['value']);

  try {
    const updatedPoint = await Point.findByIdAndUpdate(id, pointUpdateForm, {
      new: true,
      runValidators: true,
    }).exec();
    res.status(200).json(updatedPoint);
  } catch (err) {
    next({
      log: `⚠️ [ERROR] pointController.update - ${err}`,
      message: { error: "Some shit went down I'm sorry." },
    });
  }
};

pointController.deleteOne = async (req, res, next) => {
  const { point: id } = req.params;

  try {
    await Point.deleteOne({ _id: id }).orFail('nothing to delete');
    res.sendStatus(200);
  } catch (err) {
    next({
      log: `⚠️ [ERROR] pointController.delete - ${err}`,
      message: { error: "Some shit went down I'm sorry." },
    });
  }
};

pointController.deleteAll = async (req, res, next) => {
  const { dataset } = req.params;

  try {
    await Point.deleteMany({ dataset }).orFail('nothing to delete');
    res.sendStatus(200);
  } catch (err) {
    next({
      log: `⚠️ [ERROR] pointController.delete - ${err}`,
      message: { error: "Some shit went down I'm sorry." },
    });
  }
};

module.exports = pointController;

/*
Point: {
    owner: { type: ObjectId   required: true   },
    dataset: { type: ObjectId, required: true },
    timestamp: {
      type: Date,
      default: Date.now,
    },
    value: { type: Number, required: true },
  },
*/
