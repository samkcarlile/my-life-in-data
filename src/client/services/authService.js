import { fetchJSON, extractPayload } from '../utils';
const LOGTAG = `⚠️ [authService] -`;

export default {
  /** Checks for a saved token in localStorage, and returns parsed token payload (the user object) if there is one */
  async authenticate() {
    // if we have a saved token, we're already logged in
    const savedToken = await this.getSavedToken();
    if (savedToken) {
      return extractPayload(savedToken);
    }
    return undefined;
  },

  /** Logs a user in using either a username and password and stores the JWT in localStorage. */
  async login({ username, password }) {
    if (!username || !password)
      throw new Error(
        `${LOGTAG} - must call login() with a username and password`
      );

    try {
      const response = await fetchJSON(
        '/api/login',
        {
          method: 'POST',
          body: { username, password },
        },
        { cache: 'no-cache' }
      );
      const { token } = response;
      saveToken(token);
      return extractPayload(token);
    } catch (err) {
      throw new Error(`${LOGTAG} - error logging in: ${err}`);
    }
  },

  /** Deletes the saved JWT from localStorage (if there is one) */
  async logout() {
    localStorage.removeItem('jwt');
  },

  /** Signs up a user, logs the user in, and store the JWT in localStorage */
  async signup({ username, password, firstName, lastName }) {
    const newUserForm = { username, password, firstName, lastName };

    // Send a request to sign the user up
    try {
      const response = await fetchJSON(
        '/api/signup',
        {
          method: 'POST',
          body: newUserForm,
        },
        { cache: 'no-cache' }
      );
      const { token } = response;
      saveToken(token);
      return extractPayload(token);
    } catch (err) {
      throw new Error(`${LOGTAG} - error signing up: ${err}`);
    }
  },

  /** Returns the JWT saved in localStorage, or undefined if there is not a JWT present. */
  async getSavedToken() {
    return localStorage.getItem('jwt') || undefined;
  },
};

//////////////// UTILITY FUNCTIONS ////////////////

/** Saves a JWT to the localStoraage */
async function saveToken(jwt) {
  // NOTE: no it doesn't need to be async, but it keeps the interfaces standard.
  localStorage.setItem('jwt', jwt);
}
