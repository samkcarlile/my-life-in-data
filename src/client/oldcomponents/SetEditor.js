import React, { useState } from 'react';
import { useStoreState } from 'easy-peasy';
import { List, Input, Dropdown, Modal, Button } from 'semantic-ui-react';

const SetEditor = () => {
  const setList = useStoreState((state) => state.datasets.items);

  const [modalIsOpen, setModalOpen] = useState(false);
  const [modalInputValue, setModalInputValue] = useState('');
  const [modalDropdownValue, setModalDropdownValue] = useState();

  const aggregateFuncOptions = [
    { key: 1, text: 'Sum', value: 'Sum' },
    { key: 2, text: 'Count', value: 'Count' },
    { key: 3, text: 'Average', value: 'Average' },
  ];

  const dataSets = setList.map((set) => {
    return (
      <List.Item key={set._id}>
        <List.Content floated="right">
          <Button size="mini" basic color="red">
            Delete
          </Button>
        </List.Content>
        <List.Content>{set.name}</List.Content>
      </List.Item>
    );
  });

  return (
    <div style={{ margin: '45px', display: 'flex', justifyContent: 'center' }}>
      <List divided style={{ width: '60vw' }} verticalAlign="bottom">
        {dataSets}
        <List.Item>
          <List.Content>
            <Button
              size="mini"
              basic
              color="green"
              onClick={() => setModalOpen(true)}
            >
              Add New Set
            </Button>
          </List.Content>
        </List.Item>
      </List>
      <Modal
        // centered={false}
        closeIcon
        size="mini"
        onClose={() => setModalOpen(false)}
        // onOpen={() => setModalOpen(true)}
        open={modalIsOpen}
        // trigger={<Button>Show Modal</Button>}
      >
        <Modal.Header>Create a New Set</Modal.Header>
        <Modal.Content>
          <Input
            focus
            value={modalInputValue}
            onChange={(e) => setModalInputValue(e.target.value)}
            placeholder="Set Name"
          ></Input>
        </Modal.Content>
        <Modal.Content>
          <Dropdown
            clearable
            selection
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
