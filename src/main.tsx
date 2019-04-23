import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { configureStore } from 'app/store';
import { Router } from 'react-router';
import { App } from './app';
// prepare store
import { normalize, setupPage } from 'csstips';
import { FocusStyleManager } from '@blueprintjs/core';

require('@blueprintjs/core/lib/css/blueprint.css');
require('@blueprintjs/icons/lib/css/blueprint-icons.css');
normalize();
setupPage('#root');
//cssRule('html', { overflow: 'hidden' });
FocusStyleManager.onlyShowFocusOnTabs();

const history = createBrowserHistory();
const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
