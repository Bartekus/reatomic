import 'react-hot-loader/patch';
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import { basename } from 'config';
import configureStore, { history } from 'store/configure';
import api from 'services/api';
import App from 'components/App';

const store = configureStore({}, { api: api.create() });

const renderApp = () => (
  <Provider store={store}>
    <ConnectedRouter history={history} basename={basename}>
      <App />
    </ConnectedRouter>
  </Provider>
);

const root = document.getElementById('root');
render(renderApp(), root);

if (module.hot) {
  module.hot.accept('components/App', () => {
    require('components/App');
    render(renderApp(), root);
  });
}
