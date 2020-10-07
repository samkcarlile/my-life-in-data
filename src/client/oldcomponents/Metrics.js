import React, { useState } from 'react';
import { Grid, Menu } from 'semantic-ui-react';
import Graph from './Graph';
import ms from 'ms';
import { useStoreState } from 'easy-peasy';

const dummyPointList = [
  {
    timestamp: new Date(Date.now() - ms('6 days')),
    value: 9,
    dataset: 1, // data set id
    owner: 3, // user id
  },
  {
    timestamp: new Date(Date.now() - ms('3 days')),
    value: 3,
    dataset: 1, // data set id
    owner: 3, // user id
  },
  {
    timestamp: new Date(Date.now() - ms('2.8 days')),
    value: 3,
    dataset: 1, // data set id
    owner: 3, // user id
  },
  {
    timestamp: new Date(Date.now() - ms('0.3 days')),
    value: 1,
    dataset: 1, // data set id
    owner: 3, // user id
  },
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
  const dataSets = useStoreState((state) => state.datasets.items);

  const setList = dataSets.map((dataset) => {
    return (
      <Menu.Item
        key={dataset._id}
        name={dataset.name}
        active={activeItem === dataset.name}
        // function here to set state variable that tells Graph which set to visualize
        onClick={() => setActiveItem(dataset.name)}
      >
        {dataset.name}
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
        <Graph pointList={dummyPointList} />
      </Grid.Column>
    </Grid>
  );
};

export default Metrics;
