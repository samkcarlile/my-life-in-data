import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Dropdown } from 'semantic-ui-react';
import { useStoreState, useStoreActions } from 'easy-peasy';

export default function NavBar() {
  const user = useStoreState((state) => state.user);
  const logout = useStoreActions((actions) => actions.user.logout);

  return (
    <Menu>
      {/* Each of these Menu Items will redirect to a specific path. React Router will then
      render the correct page using this path */}

      <Link to="/">
        <Menu.Item active={true}>Points</Menu.Item>
      </Link>

      <Link to="/goals">
        <Menu.Item active={false}>Goals</Menu.Item>
      </Link>

      <Link to="/metrics">
        <Menu.Item active={false}>Metrics</Menu.Item>
      </Link>

      <Menu.Menu position="right">
        <Dropdown item text={user.firstName} simple>
          <Dropdown.Menu>
            <Dropdown.Item onClick={logout}>Sign Out</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Menu>
    </Menu>
  );
}
