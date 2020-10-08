import React, { useState, useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import { useStoreState, useStoreActions } from 'easy-peasy';

import MetricTile from './MetricTile';
import DataPopUp from './DataPopUp';

export default function MetricList() {
  const metrics = useStoreState((state) => state.metrics.items);
  const { getAllMetrics } = useStoreActions((actions) => ({
    getAllMetrics: actions.metrics.getAll,
  }));

  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    getAllMetrics();
  }, [getAllMetrics]);

  const openDataModal = (metric) => {
    setModalIsOpen(true);
  };

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
