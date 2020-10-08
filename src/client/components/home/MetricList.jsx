import React, { useState } from 'react';
import { Button, Modal, Card, Container, Grid } from 'semantic-ui-react';

import MetricTile from './MetricTile';
import DataPopUp from './DataPopUp';

export default function MetricList() {
  // set state
  // call the fetchMockMetrics function to get a list of metrics
  // we destructure the array returned from `useState` to get only the first element
  const [metrics] = useState(fetchMockMetrics());
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // set functionality

  const openDataModal = (metric) => {
    setModalIsOpen(true)

  };
  // each tile will have a button that needs functionality
  // upon clicking button
  // a pop window appears
  // which allows you to input data for that metric

  // pass the above down to MetricList

  return (
    <>
      <DataPopUp isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)} />
      <Grid container centered doubling columns={3}>
        {metrics.map((metric) => (
          <Grid.Column key={metric._id}>
            <MetricTile metric={metric} onClick={() => openDataModal(metric)} />
          </Grid.Column>
        ))}
      </Grid>
    </>
  );
}

/** Returns a list of mock metric models (the same models you'd get from fetching the our backend) */
const fetchMockMetrics = () => {
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
};
