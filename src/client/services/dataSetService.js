import { fetchJSON } from '../utils';

const defaultColor = 'blue';

export default {
  // Creates new data set
  async create({ name, graphColor = defaultColor, type, aggregateFunc }) {
    return fetchJSON('/api/datasets', {
      method: 'POST',
      body: { name, graphColor, type, aggregateFunc },
    });
  },

  // Updates a data set
  async update({ name, graphColor, type, aggregateFunc }) {
    return fetchJSON('/api/datasets', {
      method: 'POST',
      body: { name, graphColor, type, aggregateFunc },
    });
  },

  // Gets all data sets
  async getAll() {
    return fetchJSON('/api/datasets', { method: 'GET' });
  },

  // Gets one data set
  async getOne({ id }) {
    return fetchJSON(`/api/datasets/${id}`, { method: 'GET' });
  },

  // Deletes a data set
  async delete({ id }) {
    return fetchJSON(`/api/datasets/${id}`, { method: 'GET' });
  },
};
