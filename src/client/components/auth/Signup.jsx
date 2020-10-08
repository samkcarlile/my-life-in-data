import React, { useState } from 'react';
import { Form, Button, Card, Icon } from 'semantic-ui-react';

export default function Signup({ onSubmit }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
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
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Form.Field>
            <Form.Field>
              <label>Last Name</label>
              <input
                placeholder="Doe"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
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
                <Button
                  type="submit"
                  onClick={() =>
                    username.length &&
                    password.length &&
                    firstName.length &&
                    lastName.length &&
                    onSubmit({
                      username,
                      password,
                      firstName,
                      lastName,
                    })
                  }
                >
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
