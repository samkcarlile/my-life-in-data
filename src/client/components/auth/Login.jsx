import React, { useState } from 'react';
import { Form, Button, Card, Icon } from 'semantic-ui-react';

export default function Login({ onSignUpClick, onSubmit }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  /*
  const login = (e) => {
    fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: {
        'Content-type': 'Application/json',
      },
    })
      .then((data) => data.json())
      .then((data) => {
        if (data.message) {
          //alert(data.message);
        } else {
          props.logInUser(data);
          //alert('logged in');
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };
  */

  return (
    <Card>
      <Card.Content>
        <Card.Header>
          <Icon name="user"></Icon>
          &nbsp; Login to an existing account
        </Card.Header>
        <Card.Description>
          <Form>
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
                <Button type="button" onClick={onSignUpClick}>
                  Sign up
                </Button>
                <Button
                  primary
                  type="submit"
                  onClick={() => onSubmit({ username, password })}
                >
                  Log In
                </Button>
              </Button.Group>
            </div>
          </Form>
        </Card.Description>
      </Card.Content>
    </Card>
  );
}
