import React from 'react';
import { render } from 'react-dom';
import App from './App';

import 'semantic-ui-css/semantic.min.css';

import { StoreProvider, createStore } from 'easy-peasy';
import model from './model';

const store = createStore(model);

render(
  <StoreProvider store={store}>
    <App />
  </StoreProvider>,
  document.getElementById('app')
);
