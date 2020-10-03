import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// import PrivateRoute from 'PrivateRoute';
import Login from 'Login';
import HomePage from 'HomePage'
import SetEditor from 'SetEditor';
import Metrics from 'Metrics'

const MainComponent = () => {

  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
        <Route path="/setEditor">
          <SetEditor />
        </Route>
          <Route path="/metrics">
          <Metrics />
        </Route>
      </Switch>
    </Router>
  )

}
    
export default MainComponent;