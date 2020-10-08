import React, { useState } from 'react';
import { Form, Button, Card, Icon } from 'semantic-ui-react';

export default function Signup({ onSubmit }) {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Card>
      <Card.Content>
        <Card.Header>
          <Icon name="user"></Icon>
          &nbsp; Sign Up
        </Card.Header>
        <Card.Description>
          <Form>
            <Form.Field>
              <label>First Name</label>
              <input
                placeholder="John"
                type="text"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />
            </Form.Field>
            <Form.Field>
              <label>Last Name</label>
              <input
                placeholder="Doe"
                type="text"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
            </Form.Field>
            <Form.Field>
              <label>Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Field>
            <div style={{ textAlign: 'center' }}>
              <Button.Group>
                <Button type="submit" onClick={onSubmit}>
                  Sign Up
                </Button>
              </Button.Group>
            </div>
          </Form>
        </Card.Description>
      </Card.Content>
    </Card>
  );
}
