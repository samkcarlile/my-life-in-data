import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useStoreActions, useStoreState } from 'easy-peasy';

import PrivateRoute from './PrivateRoute';
import NavBar from './NavBar';
import Login from './Login';
import HomePage from './home/HomePage';
import SetEditor from './SetEditor';
import Metrics from './Metrics';

const MainComponent = () => {
  const isLoggedIn = useStoreState((state) => state.user.isLoggedIn);
  const initialize = useStoreActions((actions) => actions.initialize);
  // const login = useStoreActions(actions => actions.user.authenticate);

  useEffect(() => {
    console.log('ran useEffect...');
    initialize();
  }, []);

  if (!isLoggedIn) return <Login />;

  return (
    <Router>
      <NavBar />
      <Switch>
        <Router path="/sets">
          <SetEditor />
        </Router>
        <Router path="/metrics/:datasetID?">
          <Metrics />
        </Router>
        <Router path="/">
          <HomePage />
        </Router>
      </Switch>
    </Router>
  );
};

export default MainComponent;
