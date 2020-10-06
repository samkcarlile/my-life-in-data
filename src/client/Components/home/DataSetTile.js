import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon, Card } from 'semantic-ui-react';

function DataSetTile({ dataset, openAddPointModal, viewMetrics }) {
  const cardExtra = (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          margin: '10px 30px 30px',
        }}
      >
        <Button
          circular
          color={dataset.graphColor}
          icon="plus square"
          size="massive"
          onClick={() => openAddPointModal(dataset)}
        ></Button>
      </div>
      <div>
        <Link to="/metrics">
          <Button
            basic
            compact
            fluid
            icon
            color={dataset.graphColor}
            size="small"
            labelPosition="left"
            onClick={() => {
              viewMetrics(dataset._id);
            }}
          >
            <Icon name="line graph" />
            View Metrics
          </Button>
        </Link>
      </div>
    </div>
  );

  return (
    <Card style={{ margin: '20px' }} header={dataset.name} extra={cardExtra} />
  );
}

export default DataSetTile;
