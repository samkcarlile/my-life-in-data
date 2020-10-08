import { action, thunk } from 'easy-peasy';

import metricService from '../services/metricService';

/*
{
    "_id": "5f7f76c8b5fa8588c76bddfc",
    "name": "Water Intake",
    "graphColor": "blue",
    "type": "number",
    "aggregateFunc": "sum",
    "owner": "5f7f6bf69a10a183f88464f3",
    "createdAt": "2020-10-08T20:30:00.325Z",
    "__v": 0
  },

*/

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
