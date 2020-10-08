import { fetchJSON } from '../utils';

export default {
  /** Gets all the metrics for the logged in user */
  async getAll() {
    return fetchJSON('/api/datasets', { method: 'GET' });
  },

  /** Gets a metric by id */
  async getOne({ id }) {
    return fetchJSON(`/api/datasets/${id}`, { method: 'GET' });
  },
};
