const Point = require('../models/Point.js');

const pointController = {};

pointController.create = async (req, res, next) => {
  const newPointForm = {
    dataset: req.params.dataset,
    owner: req.user._id,
    value: req.body.value,
  };

  try {
    const newPoint = await Point.create(newPointForm);
    res.status(200).json(newPoint);
  } catch (err) {
    next({
      log: `⚠️ [ERROR] pointController.create - ${err}`,
      message: { error: "Error: Internal server error." },
    });
  }
};

pointController.getAll = async (req, res, next) => {
  const query = {
    dataset: req.params.dataset,
    owner: req.user._id,
  };

  try {
    const allPoints = await Point.find(query).exec();
    res.status(200).json(allPoints);
  } catch (err) {
    next({
      log: `⚠️ [ERROR] pointController.getAll - ${err}`,
      message: { error: "Error: Internal server error." },
    });
  }
};

pointController.getOne = async (req, res, next) => {
  const query = {
    _id: req.params.point,
    owner: req.user._id,
  };

  try {
    const onePoint = await Point.findOne(query).lean().exec();
    res.status(200).json(onePoint);
  } catch (err) {
    next({
      log: `⚠️ [ERROR] pointController.getOne - ${err}`,
      message: { error: "Error: Internal server error." },
    });
  }
};

pointController.update = async (req, res, next) => {
  const query = { _id: req.params.point, owner: req.user._id };
  const pointUpdateForm = { value: req.body.value };
  const options = { new: true, runValidators: true };

  try {
    const updatedPoint = await Point.findOneAndUpdate(
      query,
      pointUpdateForm,
      options
    ).exec();
    res.status(200).json(updatedPoint);
  } catch (err) {
    next({
      log: `⚠️ [ERROR] pointController.update - ${err}`,
      message: { error: "Error: Internal server error." },
    });
  }
};

pointController.deleteOne = async (req, res, next) => {
  const query = { _id: req.params.point, owner: req.user._id };

  try {
    await Point.deleteOne(query).orFail('nothing to delete');
    res.sendStatus(200);
  } catch (err) {
    next({
      log: `⚠️ [ERROR] pointController.delete - ${err}`,
      message: { error: "Error: Internal server error." },
    });
  }
};

pointController.deleteAll = async (req, res, next) => {
  const query = { dataset: req.params.dataset, owner: req.user._id };

  try {
    await Point.deleteMany(query).orFail('nothing to delete');
    res.sendStatus(200);
  } catch (err) {
    next({
      log: `⚠️ [ERROR] pointController.delete - ${err}`,
      message: { error: "Error: Internal server error." },
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
