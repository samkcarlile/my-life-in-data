import { fetchJSON } from '../utils';

export default {
  /** Gets all the metrics for the logged in user */
  async getAll() {
    return fetchJSON('/api/metrics', { method: 'GET' });
  },

  /** Gets a metric by id */
  async getOne({ id }) {
    return fetchJSON(`/api/metrics/${id}`, { method: 'GET' });
  },
};
