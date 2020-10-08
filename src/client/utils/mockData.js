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

/** Returns a list of mock metric models (the same models you'd get from fetching the our backend) */
export function fetchMockMetrics() {
  const metrics = [];
  for (let i = 0; i < 5; i++) {
    metrics.push({
      _id: ~~(Math.random() * 10 ** 9),
      name: [
        'Water Intake',
        'Miles Ran',
        'Tacos Eaten',
        'Hours Slept',
        'Time In Car',
      ][~~(Math.random() * 5)],
      graphColor: ['blue', 'green', 'orange', 'purple', 'red'][
        ~~(Math.random() * 5)
      ],
      type: 'number',
      aggregateFunc: 'average',
      pointsToday: ~~(Math.random() * 10),
    });
  }

  return metrics;
}
