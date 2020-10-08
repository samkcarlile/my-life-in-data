import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider, createStore } from 'easy-peasy';

import App from './App';
import model from './model';

import 'semantic-ui-css/semantic.min.css';

const store = createStore(model);

render(
  <BrowserRouter>
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
  </BrowserRouter>,
  document.getElementById('app')
);
