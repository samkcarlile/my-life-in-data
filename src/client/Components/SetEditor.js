import React, { useState } from 'react';
import { List, Button } from 'semantic-ui-react';

const dummySetList = [
  {
    _id: 1, // data set id
    owner: 1, // user id
    name: 'Water Intake',
    type: 'number',
    graphColor: 'blue',
    aggregateFunc: 'sum',
    createdAt: new Date(),
  },
  {
    _id: 2, // data set id
    owner: 1, // user id
    name: 'Mood',
    type: 'number',
    graphColor: 'purple',
    aggregateFunc: 'average',
    createdAt: new Date(),
  },
  {
    _id: 3, // data set id
    owner: 1, // user id
    name: 'Miles ran',
    type: 'number',
    graphColor: 'green',
    aggregateFunc: 'sum',
    createdAt: new Date(),
  },
];


const SetEditor = () => {

  const dataSets = dummySetList.map((set) => {
    return (
      <List.Item>
        <List.Content floated='right'>
          <Button size='mini' basic color='red'>Delete</Button>
        </List.Content>
        <List.Content>
          {set.name}
        </List.Content>
     </List.Item>
    );
  })

  return (
    <div style={{margin: '45px', display: 'flex', justifyContent: 'center'}}>
      <List divided
        style={{width: "60vw"}} 
        verticalAlign='bottom'
      >
        {dataSets}
      </List>
    </div>
   );
};

export default SetEditor;
