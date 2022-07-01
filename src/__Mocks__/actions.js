const GET_BY_YEAR = 'vehicles-recipe/src/redux/GET_BY_YEAR';
const GET_BY_MODEL = 'vehicles-recipe/src/redux/GET_BY_MODEL';
const GET_BY_NAME = 'vehicles-recipe/src/redux/GET_BY_NAME';

export default function vehiclesReducer(state = [], action) {
  switch (action.type) {
    case GET_BY_MODEL:
      return action.data.Results;
    case GET_BY_YEAR:
      return action.data.Results;
    case GET_BY_NAME:
      return action.data.Results;
    default:
      return state;
  }
}

export const VehicleByModel = (model) => {
  const data = {
    Results: [
      { id: 0, model: `${model}1` },
      { id: 2, model: `${model}2` },
      { id: 3, model: `${model}3` },
      { id: 4, model: `${model}4` },
      { id: 5, model: `${model}5` },
    ],
  };
  return ({ type: GET_BY_MODEL, data });
};

export const VehicleByYear = (year) => {
  const data = {
    Results: [
      { id: 0, car: `Aston Martin 1 ${year}` },
      { id: 2, car: `Aston Martin 2 ${year}` },
      { id: 3, car: `Aston Martin 3 ${year}` },
      { id: 4, car: `Aston Martin 4 ${year}` },
      { id: 5, car: `Aston Martin 5 ${year}` },
    ],
  };
  return ({ type: GET_BY_YEAR, data });
};

export const VehicleByName = (name) => {
  const data = {
    Results: [
      { id: 0, car: `${name}1` },
      { id: 2, car: `${name}2` },
      { id: 3, car: `${name}3` },
    ],
  };
  return ({ type: GET_BY_NAME, data });
};
