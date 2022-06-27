// import { type } from "@testing-library/user-event/dist/type";

const ActionTypes = {
  GET_METRICS: 'GET_METRICS',
  SELECTED_METRICS: 'SELECTED_METRICS',
  REMOVE_SELECTED_METRICS: 'REMOVE_SELECTED_METRICS',
};
// const GET_METRICS = 'react-capstone/src/redux/GET_METRICS';
// const SELECTED_METRICS = 'metrics-webapp/src/redux/SELECTED_METRICS';
// const REMOVE_SELECTED_METRICS =
//   'react-capstone/src/redux/REMOVE_SELECTED_METRICS';

const initialState = {
  metrics: [],
};

export const getMetrics = (metrics) => {
  return {
    type: ActionTypes.GET_METRICS,
    payload: metrics,
  };
};

export const selectedMetrics = (metric) => {
  return {
    type: ActionTypes.SELECTED_METRICS,
    payload: metric,
  };
};

export const metricReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_METRICS:
      return { ...state, metrics: payload };
    default:
      return state;
  }
};

export const selectedmetricReducers = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_METRICS:
      return { ...state, ...payload };
    default:
      return state;
  }
};
