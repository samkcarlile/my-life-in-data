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

/**
 * This needs to be refactored, was written really quickly, sawwy ¯\_(ツ)_/¯
 */
export const mapListToGraphData = (pointList, aggFunc) => {
  const NOW = new Date();

  const x = [];
  const y = [];

  let result = pointList
    .filter((point) =>
      NOW - point.timestamp < ms('7 days') && NOW - point.timestamp > ms('1d')
        ? point.timestamp.getDay() !== NOW.getDay()
        : true
    )
    .sort((a, b) => a.timestamp - b.timestamp)
    .map((point) => ({
      ...point,
      day: point.timestamp.getDay(),
    }));

  if (aggFunc === 'sum') {
    const days = new Set();
    result = result.reduce((a, point) => {
      if (days.has(point.day)) {
        a[a.length - 1].value += point.value;
      } else {
        days.add(point.day);
        a.push({
          day: point.day,
          value: point.value,
        });
      }
      return a;
    }, []);
  } else if (aggFunc === 'average') {
    const daysCount = {};
    result = result.reduce((a, point) => {
      if (daysCount[point.day]) {
        daysCount[point.day] += 1;
        a[a.length - 1].value += point.value;
      } else {
        daysCount[point.day] = 1;
        a.push({
          day: point.day,
          value: point.value,
        });
      }
      return a;
    }, []);
    result.forEach((point) => {
      point.value /= daysCount[point.day];
    });
  }

  const dayTable = {
    0: 'Sun',
    1: 'Mon',
    2: 'Tues',
    3: 'Wed',
    4: 'Thurs',
    5: 'Fri',
    6: 'Sat',
  };

  result.forEach((point) => {
    x.push(dayTable[point.day]);
    y.push(point.value);
  });

  return { x, y };
};
