import React from 'react';
import { Modal, Card, Button, Icon, Progress } from 'semantic-ui-react';

import DataPopUp from './DataPopUp';

// MetricTile takes in props --> { metric, onClick }
export default function MetricTile({ metric, onClick }) {
  const { name, color, pointsToday } = metric;

  const pointsTodayString = `${pointsToday} point${
    pointsToday > 1 ? 's' : ''
  } recorded today.`;

  return (
    <Card color={color}>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>{pointsTodayString}</Card.Meta>
        <Card.Description>
          <Progress percent={~~(Math.random() * 100)} indicating />
          <Button onClick={onClick} color={color}>
            <Icon name="pencil alternate" />
            Record
          </Button>
          <DataPopUp />
        </Card.Description>
      </Card.Content>
    </Card>
  );
}
