import { fetchJSON } from '../utils';

export default {
  //   async create({ owner, dataset, value }) {
  //     return {
  //       owner,
  //       dataset,
  //       value,
  //     };
  //   },

  async getAll({ dataset }) {
    return fetchJSON(`/api/datasets/${dataset._id}/points`, { method: 'GET' });
  },

  // async getOne({ owner }) {
  //   return {
  //     owner,
  //   };
  // },

  async addPoint({ dataset, value }) {
    return fetchJSON(`/api/datasets/${dataset._id}/points`, {
      method: 'POST',
      body: { dataset, value },
    });
  },

  async deleteOne(point) {
    return fetchJSON(`/api/datasets/${point.dataset}/${point._id}`, {
      method: 'DELETE',
    });
  },

  async deleteAll(dataset) {
    return fetchJSON(`/api/datasets/${dataset._id}/points`, {
      method: 'DELETE',
    });
  },
};
