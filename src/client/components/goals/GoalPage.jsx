// import all of our settings
import React from 'react';
import { Modal } from 'semantic-ui-react';
// import React, { useState } from 'react';
import GoalsList from './GoalsList'
import GoalEditor from './GoalEditor'
import { Header, Button, Grid, Segment } from 'semantic-ui-react';

// create react function hook
export default function GoalPage() {
  // this component holds state
  
  // renders components, GoalList and GoalEditor

 
  return (
    <Grid container centered doubling columns={2}>
      <GoalsList />
      <GoalEditor />
    </Grid>
  );
}



  

  

