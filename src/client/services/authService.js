import { fetchJSON } from '../utils';
const LOGTAG = `⚠️ [authService] -`;

export default {
  /** Logs a user in using either a username/password to fetch a new JWT
   *  or reuses a JWT in the localStorage.
   *
   * @throws an error indicating the log in was unsuccessful
   * @returns {object} the logged in user
   */
  async login({ username, password }) {
    // If there's a saved token, use that.
    const savedToken = await this.getSavedToken();
    if (savedToken) {
      // TODO: send a fetch request to make sure the token is still valid
      return extractPayload(savedToken);
    }

    // If there is no saved token, you must call `login` with a username and password
    if (!username || !password)
      throw new Error(
        `${LOGTAG} - saved token not present in localStorage. must call login() with a username and password`
      );

    // If there's not a saved token, hit the /api/login endpoint to recieve one.
    try {
      const response = await fetchJSON(
        'http://localhost:8080/api/login',
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

  /** Signs up a user and performs the same function as `authService.login()`
   *
   * @throws an error if the sign up or login process was unsuccessful
   * @returns {object} the (newly signed-up) logged in user
   */
  async signup({ username, password, firstName, lastName }) {
    const newUserForm = { username, password, firstName, lastName };

    // Send a request to sign the user up
    try {
      const response = await fetchJSON(
        'http://localhost:8080/api/signup',
        {
          method: 'POST',
          body: newUserForm,
        },
        { cache: 'no-cache' }
      );
      const { token } = response;
      // Save the token to localStorage
      saveToken(token);
      // Return the new user object (just like `authService.login()`)
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

/** Extracts a JSON payload from a JWT.
 * @param {string} jwt the encoded json web token
 * @returns {object} the json payload
 */
function extractPayload(jwt) {
  const [header, payload, signature] = jwt.split('.');
  if (!header || !payload || !signature)
    throw new Error(
      `${LOGTAG} provided string is not a jwt. Expected 3 parts after splitting on '.'`
    );
  return JSON.parse(atob(payload));
}
