import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input, Modal, Button, Icon, Card } from 'semantic-ui-react';

// Dummy data; setList will be in our State

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

const dummyPoint = [
  {
    timestamp: new Date(),
    value: 9,
    dataset: 928374928347, // data set id
    owner: 88239487234, // user id
  }
];


const DataSetTile = ({ name, goToAddNewPoint, viewMetrics, id }) => (
  <Card style={{margin: '20px'}}
    header={name}
    // meta={set.meta}
    extra={
      <div>
        <div style={{display: 'flex', justifyContent: 'center', margin:'10px 30px 30px'}}>
          <Button circular
            color='green' 
            icon='plus square' 
            size='massive' 
            onClick={() => goToAddNewPoint(name, id)}
          ></Button>
        </div>
        <div>
          <Link to="/metrics">
            <Button basic compact fluid icon 
              color='purple' 
              size='small' 
              labelPosition='left' 
              onClick={() => {
                viewMetrics(id);
              }}
            >
              <Icon name='line graph' />
              View Metrics
            </Button>
          </Link>
        </div>
      </div>
    }
  />
);


const HomePage = () => {
  const [modalIsOpen, setModalOpen] = useState(false);
  const [modalName, setModalName] = useState();
  const [modalDataSetId, setModalDataSetId] = useState();
  const [modalInputValue, setModalInputValue] = useState();

  const openModal = () => {
    setModalInputValue('');
    setModalOpen(true);
  }
  
  const setList = dummySetList.map((set) => (
    <DataSetTile
      name={set.name}
      goToAddNewPoint={(name, id) => {
        setModalDataSetId(id);
        setModalName(name);
        openModal();
      }}
      // function here that should set the central store state variable 
      // that tells render page which data set to visualize
      viewMetrics={(setId)=>console.log(setId)}
      id={set._id}
    />)
  );

  return (
      <div>
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}>
          <Card.Group >
            {setList}
          </Card.Group>
        </div>
        <Modal
          // centered={false}
          closeIcon
          size='mini'
          onClose={() => setModalOpen(false)}
          // onOpen={() => setModalOpen(true)}
          open={modalIsOpen}
          // trigger={<Button>Show Modal</Button>}
        >
          <Modal.Header>Create a new point in {modalName}</Modal.Header>
          <Modal.Content style={{display: 'flex', justifyContent: 'space-between'}}>
            <Input focus
              value={modalInputValue} 
              onChange={(e)=>setModalInputValue(e.target.value)}
              type='number' 
              placeholder='Input Num'>
            </Input>
            {/* function here that  */}
            <Button onClick={() => setModalOpen(false)}>OK</Button>
          </Modal.Content>
        </Modal>
      </div>
   );
};

export default HomePage;











