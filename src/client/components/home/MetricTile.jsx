import React from 'react';
import { Card, Button, Icon, Progress } from 'semantic-ui-react';

// MetricTile takes in props --> { metric, onClick }
export default function MetricTile({ metric, onClick }) {
  const { name, graphColor, pointsToday } = metric;

  const pointsTodayString = `${pointsToday} point${
    pointsToday > 1 ? 's' : ''
  } recorderd today.`;

  return (
    <Card color={graphColor}>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>{pointsTodayString}</Card.Meta>
        <Card.Description>
          <Progress percent={~~(Math.random() * 100)} indicating />
          <Button onClick={onClick} color={graphColor}>
            <Icon name="pencil alternate" />
            Record
          </Button>
        </Card.Description>
      </Card.Content>
    </Card>
  );
}
