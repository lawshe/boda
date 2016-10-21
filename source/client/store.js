import thunkMiddleware from 'redux-thunk';
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import actionTypeMiddleware from 'utils/redux/actionTypeMiddleware';
import reducers from './reducers';
import objectAssign from 'object-assign';

const rootReducer = combineReducers(
  objectAssign(
    {},
    reducers,
    { routing: routerReducer }
  )
);

const configureStore = (initialState) => {
  const store = compose(
    applyMiddleware(
      actionTypeMiddleware,
      thunkMiddleware
    )
  )(createStore)(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept(
      './reducers',
      () => {
        const nextReducer = require('./reducers');
        store.replaceReducer(nextReducer);
      }
    );
  }
  return store;
};

const store = configureStore(window.__INITIAL_STATE__ || {});

export default store;
