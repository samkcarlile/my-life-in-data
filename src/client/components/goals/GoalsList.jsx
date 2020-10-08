import React from 'react';
import { Modal, Header, Button, Grid, Segment } from 'semantic-ui-react';
// import React, { useState } from 'react';

 
const handleSubmit = (event) => {
  console.log('button clicked!');
  event.preventDefault();
}

 export default function GoalsList({handleClick, goals}) {
  // each time the button is clicked add a new element to the list
    // map through goals
  return (
      <Grid.Column> 
        <Header
          as='h2'
          content='My Goals List'
          subheader='Manage your goals here'
        />
        <Button onClick={handleSubmit}>Add To List</Button>
        <Segment >
          My goal 1
          <Button floated='right' onClick={handleSubmit}>Goal Stats</Button>
        </Segment>
        <Segment>
          My goal 2
        </Segment>
        <Segment>
          My goal 3 
        </Segment>
        <Segment>
          My goal 3
        </Segment>
      </Grid.Column>
  )
};


