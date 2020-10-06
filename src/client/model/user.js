import { action, thunk } from 'easy-peasy';

import authService from '../services/authService';

const userModel = {
  // State
  isLoggedIn: false,
  username: '',
  firstName: '',
  lastName: '',

  // Actions
  loggedIn: action((state, { username, firstName, lastName }) => ({
    ...state,
    isLoggedIn: true,
    username,
    firstName,
    lastName,
  })),

  signup: thunk(
    async (actions, { username, password, firstName, lastName }) => {
      const user = await authService.signup({
        username,
        password,
        firstName,
        lastName,
      });
      actions.loggedIn(user);
    }
  ),

  authenticate: thunk(async (actions, { username, password }) => {
    const { user } = await authService.login({ username, password });
    actions.loggedIn(user);
  }),
};

export default userModel;
