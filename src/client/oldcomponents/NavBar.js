import React from 'react';
import { Grid, Menu, Dropdown } from 'semantic-ui-react';
import Graph from './Graph';
import { useStoreState } from 'easy-peasy';
import { useLocation, Link } from 'react-router-dom';

function NavBar() {
  const { pathname } = useLocation();

  const username = useStoreState((state) => state.user.username);

  return (
    <Menu>
      <Link to="/">
        <Menu.Item active={pathname === '/'}>Points</Menu.Item>
      </Link>
      <Link to="/sets">
        <Menu.Item active={pathname === '/sets'}>Sets</Menu.Item>
      </Link>
      <Link to="/metrics">
        <Menu.Item active={pathname === '/metrics'}>Metrics</Menu.Item>
      </Link>
      <Menu.Menu position="right">
        <Dropdown item text={username} simple>
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

export default NavBar;
