import React, { useState } from 'react';
import { List, Input, Dropdown, Modal, Button } from 'semantic-ui-react';

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
  const [modalIsOpen, setModalOpen] = useState(false);
  const [modalInputValue, setModalInputValue] = useState('');
  const [modalDropdownValue, setModalDropdownValue] = useState();

  const aggregateFuncOptions = [
    { key: 1, text: 'Sum', value: 'Sum' },
    { key: 2, text: 'Count', value: 'Count' },
    { key: 3, text: 'Average', value: 'Average' },
  ]

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
        <List.Item>
        <List.Content>
          <Button 
            size='mini' 
            basic color='green'
            onClick={() => setModalOpen(true)}
          >Add New Set</Button>
        </List.Content>
        </List.Item>
      </List>
      <Modal
        // centered={false}
        closeIcon
        size='mini'
        onClose={() => setModalOpen(false)}
        // onOpen={() => setModalOpen(true)}
        open={modalIsOpen}
        // trigger={<Button>Show Modal</Button>}
      >
        <Modal.Header>Create a New Set</Modal.Header>
        <Modal.Content>
          <Input focus
            value={modalInputValue} 
            onChange={(e)=>setModalInputValue(e.target.value)}
            placeholder='Set Name'>
          </Input>
        </Modal.Content>
        <Modal.Content>
          <Dropdown clearable selection
            options={aggregateFuncOptions}
            value={modalDropdownValue}
            onChange={(e, { value }) => setModalDropdownValue(value)}
          />
        </Modal.Content>
        <Modal.Actions>
          {/* function here that submit the contents of the modal to Db */}
          <Button onClick={() => setModalOpen(false)}>OK</Button>
        </Modal.Actions>
      </Modal>
    </div>
   );
};

export default SetEditor;
