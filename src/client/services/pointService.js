import { fetchJSON } from '../utils';

export default {
  /** Gets all the points for a metric */
  async getAll({ metric }) {
    return fetchJSON(`/api/datasets/${metric._id}/points`, { method: 'GET' });
  },

  /** Records a new point on a metric */
  async record({ metric, value }) {
    return fetchJSON(`/api/datasets/${metric._id}/points`, {
      method: 'POST',
      body: { metric, value },
    });
  },
};
