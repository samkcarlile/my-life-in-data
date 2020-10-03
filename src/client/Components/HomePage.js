import React from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button, Icon, Card } from 'semantic-ui-react';

// Dummy data; setList will be in our State
const dummySetList = [
  {
    header: 'Water Intake',
    // description:
    //   'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
    meta: '30 points recorded',
  },
  {
    header: 'Mood',
    // description:
    //   'Bring to the table win-win survival strategies to ensure proactive domination.',
    meta: '20 points recorded',
  },
  {
    header: 'Miles ran',
    // description:
    //   'Capitalise on low hanging fruit to identify a ballpark value added activity to beta test.',
    meta: '40 points recorded',
  },
];


const formatCard = (list) => {
  const formattedList = list.slice();
  return formattedList.map((set) => (
    <Card
      header={set.header}
      meta={set.meta}
      extra={
        <div>
          <div style={{display: 'flex', justifyContent: 'center', margin:'10px 30px 30px'}}>
            <Button color='green' circular icon='plus square' size='massive'></Button>
          </div>
          <div>
            <Button basic compact fluid icon color='purple' size='small' labelPosition='left'>
              <Icon name='line graph' />
              View Metrics
            </Button>
          </div>
        </div>
      }
    />)
  );
}


const HomePage = () => {
  const setList = formatCard(dummySetList);
  return (
      <div>
        <h1>HOME PAGE</h1>
        <Card.Group>
          {setList}
        </Card.Group>
        {/* <Card.Group items={setList}/> */}
        {/* <Modal></Modal> */}
      </div>
   );
};

export default HomePage;











