import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { configureStore } from 'app/store';
import { Router } from 'react-router';
import { App } from './app';

// prepare store
const history = createBrowserHistory();
const store = configureStore();

//colors from light to dark, blueish
//#DDE3FD
//#798EF6
//#193DF0
//#0A2299
//#091034
export const COLORS = {
  veryLight: '#DDE3FD',
  light: '#DDE3FD',
  normal: '#193DF0',
  dark: '#0A2299',
  veryDark: '#091034'
};

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
