import ms from 'ms';

/** Returns an array of n mock data points */
export function fetchMockPoints(n = 15) {
  const points = [];

  let date = Date.now() - ms('2d');
  for (let i = 0; i < n; i++) {
    points.push({
      timestamp: date,
      value: ~~(Math.random() * 10),
    });

    date += ms(`${~~(Math.random() * 5)}h`);
  }

  return points;
}
