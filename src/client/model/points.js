import { action, thunk } from 'easy-peasy';
import pointService from '../services/pointService';

const pointsModel = {
  metricPoints: [],

  getPoints: thunk(async (actions, { metric }) => {
    const metricPoints = await pointService.getAll(metric);
    actions.getPointsComplete(metricPoints);
  }),

  getPointsComplete: action((state, metricPoints) => {
    state.metricPoints = metricPoints;
  }),

  record: thunk(async (actions, { metric, value }) => {
    try {
      const newPoint = await pointService.record({ metric, value });
      actions.recordPoint(newPoint);
    } catch {
      alert(`Couldn't record point.`);
    }
  }),

  recordPoint: action((state, newPoint) => {
    state.metricPoints.push(newPoint);
  }),
};

export default pointsModel;
