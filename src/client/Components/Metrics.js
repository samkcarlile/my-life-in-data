import React, { useState } from 'react';
import { Grid, Menu } from 'semantic-ui-react';
import Graph from './Graph'

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

const mpd = 8.64e+7;
const dummyPointList = [
  {
    timestamp: new Date(Date.now() - (7 * mpd)),
    value: 9,
    dataset: 1, // data set id
    owner: 3, // user id
  },
  {
    timestamp: new Date(Date.now() - (3 * mpd)),
    value: 3,
    dataset: 1, // data set id
    owner: 3, // user id
  },
  {
    timestamp: new Date(Date.now() - (0.3 * mpd)),
    value: 1,
    dataset: 1, // data set id
    owner: 3, // user id
  }
];

/*
I'm thinking that we'll have a useEffect AJAX request in here for 
the respective data set's point list - we'll have a store state variable of the current
data set's id and can use that in the fetch.  When that response comes in we'll set 
some state variable - most likely in the store - that will hold the list of points to be graphed,
substituted here by dummyPointList
*/

const Metrics = () => {
  const [activeItem, setActiveItem] = useState('points');
  
  const setList = dummySetList.map((set) => {
    return (
      <Menu.Item
        name={set.name}
        active={activeItem === set.name}
        // function here to set state variable that tells Graph which set to visualize
        onClick={()=>setActiveItem(set.name)}
      >
          {set.name}
        </Menu.Item>
    );
  });

  return (
    <Grid>
      <Grid.Column width={3}>
        <Menu pointing fluid vertical>
          {setList}
        </Menu>
      </Grid.Column>
      <Grid.Column stretched width={12}>
        <Graph pointList={dummyPointList}/>
      </Grid.Column>
    </Grid>
   );
};

export default Metrics;
