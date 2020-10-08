import ms from 'ms';

/**
 * Sends an authenticated fetch request using the JWT in localStorage (if there is one).
 * - Automatically calls `JSON.stringify()` on the body parameter
 * - Automatically deserializes the response to JSON
 *
 * @param {string} url the url of the fetch request
 * @param {string} method 'POST', 'GET', etc...
 * @param {object} body the JSON body to send with the request
 * @param {?object} options extra options to pass to `fetch`
 *
 * @returns {object} the response json
 */
export async function fetchJSON(url, { method, body }, options) {
  const token = localStorage.getItem('jwt');

  const response = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: body ? JSON.stringify(body) : undefined,
    ...options,
  });

  if (response.status !== 200)
    throw new Error(`recieved status code: ${response.status}`);

  return response.json();
}

/** Extracts a JSON payload from a JWT.
 * @param {string} jwt the encoded json web token
 * @returns {object} the json payload
 */
export function extractPayload(jwt) {
  const [header, payload, signature] = jwt.split('.');
  if (!header || !payload || !signature)
    throw new Error(
      `${LOGTAG} provided string is not a jwt. Expected 3 parts after splitting on '.'`
    );
  return JSON.parse(atob(payload));
}
