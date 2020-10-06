import { action, thunk } from 'easy-peasy';

import dataSetService from '../services/dataSetService';

const dataSetModel = {
  // State here
  items: [],

  // Actions here
  setDataSetList: action((state, payload) => {
    state.items = payload;
  }),

  addDataSet: action((state, payload) => {
    state.items.push(payload);
  }),

  deleteDataSet: action((state, { idx }) => {
    state.items.splice(idx, 1);
  }),

  getAllDataSets: thunk(async (actions) => {
    const dataSetList = await dataSetService.getAll();
    actions.setDataSetList(dataSetList);
  }),

  createDataSet: thunk(async (actions, { name, aggregateFunc }) => {
    const dataSet = await dataSetService.create({ name, aggregateFunc });
    actions.addDataSet(dataSet);
  }),
};

export default dataSetModel;
