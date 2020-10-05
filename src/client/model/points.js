import { action, thunk } from 'easy-peasy';
import pointService from '../services/pointService';

const pointsModel = {
  items: {},
  // Point Actions here
  pointsLoaded: action((state, { dataset, allPoints }) => {
    state.items[dataset._id].push(allPoints);
  }),

  /** Loads all points for a given dataset */
  loadPoints: thunk(async (actions, { dataset }) => {
    const allPoints = await pointService.getAll({ dataset });
    actions.pointsLoaded({ dataset, allPoints });
  }),

  deleteAllPoints: action((state, payload) => {}),
};

export default pointsModel;
