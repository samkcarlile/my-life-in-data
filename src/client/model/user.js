import { action, thunk, computed } from 'easy-peasy';

import authService from '../services/authService';

export default {
  username: '',
  firstName: '',
  lastName: '',

  isLoggedIn: computed(({ username }) => username !== ''),

  authenticate: thunk(async (actions) => {
    const { user } = await authService.authenticate();
    if (!user) throw new Error('no user logged in');
    console.log(user);
    actions.loginComplete(user);
  }),

  login: thunk(async (actions, { username, password }) => {
    const { user } = await authService.login({ username, password });
    actions.loginComplete(user);
  }),

  signup: thunk(
    async (actions, { username, password, firstName, lastName }) => {
      const { user } = await authService.signup({
        username,
        password,
        firstName,
        lastName,
      });
      actions.loginComplete(user);
    }
  ),

  loginComplete: action((state, user) => {
    state.username = user.username;
    state.firstName = user.firstName;
    state.lastName = user.lastName;
  }),

  logout: thunk(async (actions) => {
    await authService.logout();
    actions.logoutComplete();
  }),

  logoutComplete: action((state) => {
    state.username = '';
    state.firstName = '';
    state.lastName = '';
  }),
};
