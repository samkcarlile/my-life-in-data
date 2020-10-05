import { thunk, action } from 'easy-peasy';
import datasets from './datasets';
import user from './user';
import points from './points';

export default {
  datasets,
  user,
  points,
  testing: action(() => console.log('dsdsadsa')),
  initialize: thunk(async (actions) => {
    await actions.user.authenticate({
      username: 'sam3',
      password: 'dogsandcats5',
    });
    await actions.datasets.getAllDataSets();
  }),
};
