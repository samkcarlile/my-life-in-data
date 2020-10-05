import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// import PrivateRoute from 'PrivateRoute';
import NavBar from './NavBar';
import Login from './Login';
import HomePage from './HomePage'
import SetEditor from './SetEditor';
import Metrics from './Metrics'

const MainComponent = () => {

  return (
    <Router>
      {/* {authenticated && <NavBar /> } */}
      <NavBar />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/sets">
          <SetEditor />
        </Route>
        <Route path="/metrics">
          <Metrics />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>

  )

}
    
export default MainComponent;