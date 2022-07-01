import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import vehiclesReducer from './actions';

const rootReducer = combineReducers({
  vehiclesReducer,
});

const Store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default Store;
