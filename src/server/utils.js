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

module.exports = {
  filterProperties,
  removeProperties,
};
