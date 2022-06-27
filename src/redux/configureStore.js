import { createStore, combineReducers, applyMiddleware } from 'redux';
import { metricReducers,   selectedmetricReducers } from './metrics/metrics';
import thunk from 'redux-thunk';

const reducer = combineReducers({
  metricReducers,
  selectedmetricReducers
});

const store = createStore(
  reducer,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
