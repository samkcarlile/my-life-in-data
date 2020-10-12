/**
 * Takes an object and returns an object including only the keys specified
 *
 * @param {object} obj
 * @param {string[]} keys
 *
 * @returns {object}
 */
const filterProperties = (obj, keys) =>
  Object.entries(obj)
    .filter(([k]) => keys.includes(k))
    .reduce((newObj, [key, value]) => ({ ...newObj, [key]: value }), {});

const removeProperties = (obj, keys) =>
  Object.entries(obj)
    .filter(([k]) => !keys.includes(k))
    .reduce((newObj, [key, value]) => ({ ...newObj, [key]: value }), {});

const validateProperties = (obj, requiredKeys) => {
  const keys = Object.keys(requiredKeys);
  const filteredObj = filterProperties(obj, keys);
  Object.entries(filteredObj).every(([key, value]) => {
    const validate = requiredKeys[key];
    if (!validate(value)) {
      throw new Error(`property ${key} is invalid`);
    }
    return true;
  });
  return filteredObj;
};

const serverError = (tag) => (fnName, err, status) => ({
  log: `⚠️ [ERROR] ${tag}.${fnName} - ${err.message}`,
  message: { error: `Apologies, an error has occurred.` },
  status: status || 500,
});

/** Takes a list of controllers and returns a single object
 *  with their middlewares combined in the order their objects are listed.
 * @param {...object} controllers
 */
const combineMiddleware = (...controllers) => {
  const combined = {};
  controllers.forEach((controller) =>
    Object.entries(controller).forEach(([name, fn]) =>
      combined[name] === undefined
        ? (combined[name] = [fn])
        : combined[name].push(fn)
    )
  );
  Object.entries(combined).forEach(
    ([name, middlewares]) => (combined[name] = middlewares.flat())
  );

  return combined;
};

/** Helper for creating a custom Error object */
const createError = (status, message) => {
  function error() {
    this.status = status;
    this.message = message;
  }
  error.prototype = Object.create(Error.prototype);
  return error;
};

module.exports = {
  filterProperties,
  removeProperties,
  validateProperties,
  serverError,
  combineMiddleware,
  createError,
};
