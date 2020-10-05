import React, { useState } from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Menu, Dropdown } from 'semantic-ui-react';

function NavBar() {
  const [activeItem, setActiveItem] = useState('points');

  return (
    <Menu>
      <Link to='/'>
        <Menu.Item
          name='points'
          active={activeItem === 'points'}
          onClick={()=>setActiveItem('points')}
        >
          Points
        </Menu.Item>
      </Link>
      <Link to='/sets'>
        <Menu.Item
          name='sets'
          active={activeItem === 'sets'}
          onClick={()=>setActiveItem('sets')}
        >
          Sets
        </Menu.Item>
      </Link>
      <Link to='/metrics'>
        <Menu.Item
          name='metrics'
          active={activeItem === 'metrics'}
          onClick={()=>setActiveItem('metrics')}
        >
          Metrics
        </Menu.Item>
        </Link>
        <Link to='/login'>
        <Menu.Item
          name='login'
          active={activeItem === 'login'}
          onClick={()=>setActiveItem('login')}
        >
          Login
        </Menu.Item>
      </Link>
      <Menu.Menu position='right'>
        <Dropdown item text={'user'} simple>
          <Dropdown.Menu>
            <Dropdown.Item
              onClick={()=>console.log('Signing out!')}
            >Sign Out</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Menu>
    </Menu>
  );
}

export default NavBar;