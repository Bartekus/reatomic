import { createStore, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import createHistory from 'history/createBrowserHistory';
import createSagaMiddleware from 'redux-saga';
import { isDev, isBrowser } from 'config';
import middleware from './middleware';
import reducer from './reducer';
import sagas from './sagas';

const devtools = isDev && isBrowser && window.devToolsExtension
  ? window.devToolsExtension
  : () => fn => fn;

export const history = createHistory();

const configureStore = (initialState, services = {}) => {
  const sagaMiddleware = createSagaMiddleware();

  const enhancers = [
    applyMiddleware(
      routerMiddleware(history), // Allows to dispatch navigation actions from anywhere using: `store.dispatch(push('/foo'))`
      ...middleware,
      sagaMiddleware,
    ),
    devtools(),
  ];

  const store = createStore(connectRouter(history)(reducer), initialState, compose(...enhancers));
  let sagaTask = sagaMiddleware.run(sagas, services);

  if (module.hot) {
    module.hot.accept('./reducer', () => {
      const nextReducer = require('./reducer').default;
      store.replaceReducer(nextReducer);
    });
    module.hot.accept('./sagas', () => {
      const nextSagas = require('./sagas').default;
      sagaTask.cancel();
      sagaTask.done.then(() => {
        sagaTask = sagaMiddleware.run(nextSagas, services);
      });
    });
  }

  return store;
};

export default configureStore;
