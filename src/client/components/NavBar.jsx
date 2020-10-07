import React from 'react';
import { Menu, Dropdown } from 'semantic-ui-react';

export default function NavBar() {
  return (
    <Menu>
      <Menu.Item active={true}>Points</Menu.Item>

      <Menu.Item active={false}>Sets</Menu.Item>

      <Menu.Item active={false}>Metrics</Menu.Item>
      <Menu.Menu position="right">
        <Dropdown item text="Jonathan" simple>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => console.log('Signing out!')}>
              Sign Out
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Menu>
    </Menu>
  );
}
