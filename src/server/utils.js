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

const validateProperties = (obj, validation) => {
  const keys = Object.keys(validation);
  const filteredObj = filterProperties(obj, keys);
  Object.entries(filteredObj).every(([key, value]) => {
    const validate = validation[key];
    if (!validate(value)) {
      throw new Error(`property ${key} is invalid`);
    }
    return true;
  });
  return filteredObj;
};

module.exports = {
  filterProperties,
  removeProperties,
  validateProperties,
};
