import React, { useState } from 'react';
import { List, Input, Modal, Button } from 'semantic-ui-react';

const Login = () => {
  const [modalIsOpen, setModalOpen] = useState(false);
  const [modalInputValue, setModalInputValue] = useState('');


const authenticate = ((username, password) => {

})

const createNewUser = ((newUsername, newPassword) => {

})
  return (
    <div>
      <h1>Log In</h1>
      <Input focus
      value={modalInputValue} 
      onChange={(e) => e.target.value.username}
      placeholder='Username'>
      </Input>

      <Input focus
      value={modalInputValue} 
      onChange={(e) => e.target.value.password}
      placeholder='Password'>
      </Input>

      <Button 
        primary
        // onClick={() => authenticate(e.target.value.username, e.target.value.password)}
        >Login
      </Button>

      <Button
        basic color='blue'
        onClick={() => setModalOpen(true)}
        >Sign Up
      </Button>

      <Modal
        // centered={false}
        closeIcon
        size='tiny'
        onClose={() => setModalOpen(false)}
        // onOpen={() => setModalOpen(true)}
        open={modalIsOpen}
        // trigger={<Button>Show Modal</Button>}
      >
        <Modal.Header>Create New Account</Modal.Header>
        <Modal.Content>
          <Input focus
            value={modalInputValue} 
            // onChange={(e)=>setModalInputValue(e.target.value.username)}
            placeholder='Create Username'>
          </Input>
        </Modal.Content>
        <Modal.Content>
          <Input focus
            value={modalInputValue} 
            // onChange={(e)=>setModalInputValue(e.target.value.password)}
            placeholder='Create Password'>
          </Input>
        </Modal.Content>
        <Modal.Actions>
          {/* function here that submits new user&pass to DB */}
          <Button onClick={() => setModalOpen(false)}>Create New Account</Button>
        </Modal.Actions>
      </Modal>
    </div>
   );
};

export default Login;
