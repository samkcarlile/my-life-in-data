import { action, thunk } from 'easy-peasy';

import metricService from '../services/metricService';

export default {
  // State here
  items: [],

  getAll: thunk(async (actions) => {
    // get all the user's metrics from the metricService
    const metrics = await metricService.getAll();
    // dispatch an action to set the metrics into our local state
    actions.getAllComplete(metrics);
  }),

  getAllComplete: action((state, metrics) => {
    state.items = metrics;
  }),
};
