import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import MetricsContainer from './components/metrics/MetricsContainer';
import HomePage from './components/home/HomePage';

const App = () => (
  <div>
    <NavBar />
    <Switch>
      <Route path="/goals">
        <h1>goals 🎯</h1>
      </Route>

      <Route path="/metrics">
        <MetricsContainer />
      </Route>

      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
  </div>
);

export default App;
