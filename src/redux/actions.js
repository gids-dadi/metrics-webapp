import axios from 'axios';

const GET_BY_YEAR = 'vehicles-recipe/src/redux/GET_BY_YEAR';
const GET_BY_MODEL = 'vehicles-recipe/src/redux/GET_BY_MODEL';
const GET_BY_NAME = 'vehicles-recipe/src/redux/GET_BY_NAME';
const GET_BY_NAME_AND_YEAR = 'vehicles-recipe/src/redux/GET_BY_NAME_AND_YEAR';
const GET_BY_TYPES_FOR_MAKE = 'vehicles-recipe/src/redux/GET_BY_TYPES_FOR_MAKE';
const GET_BY_MODEL_FOR_MAKE = 'vehicles-recipe/src/redux/GET_BY_MODEL_FOR_MAKE';
const GET_BY_PARTS = 'vehicles-recipe/src/redux/GET_BY_PARTS';
const GET_BY_TYPES_BY_NAME = 'vehicles-recgetMakeByNameUrl;ipe/src/redux/GET_BY_TYPES_BY_NAME';
const GET_MAKES_BY_NAME = 'vehicles-recipe/src/redux/GET_MAKES_BY_NAME';
const GET_ALL_MANUFACTURERS = 'vehicles-recipe/src/redux/GET_ALL_MANUFACTURERS';
const GET_CANADIAN = 'vehicles-recipe/src/redux/GET_CANADIAN';
const getTypeByNameUrl = '/vehicles/GetMakesForVehicleType/car?format=json';
const getAllManufacturersUrl = '/vehicles/GetAllManufacturers?format=json&page=2';

export default function vehiclesReducer(state = [], action) {
  switch (action.type) {
    case GET_BY_MODEL:
      return action.data.Results;
    case GET_BY_YEAR:
      return action.data.Results;
    case GET_BY_NAME:
      return action.data.Results;
    case GET_BY_NAME_AND_YEAR:
      return action.data.Results;
    case GET_BY_TYPES_FOR_MAKE:
      return action.data.Results;
    case GET_BY_MODEL_FOR_MAKE:
      return action.data.Results;
    case GET_BY_PARTS:
      return action.data.Results;
    case GET_BY_TYPES_BY_NAME:
      return action.data.Results;
    case GET_MAKES_BY_NAME:
      return action.data.Results;
    case GET_ALL_MANUFACTURERS:
      return action.data.Results;
    case GET_CANADIAN:
      return action.data.Results;
    default:
      return state;
  }
}

export const VehicleByModel = (model) => (dispatch) => {
  axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMake/${model}?format=json`)
    .then((response) => {
      const { data } = response;
      dispatch({ type: GET_BY_MODEL, data });
    });
};

export const VehicleByYear = (year) => (dispatch) => {
  axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForManufacturerAndYear/mer?year=${year}&format=json`)
    .then((response) => {
      const { data } = response;
      dispatch({ type: GET_BY_YEAR, data });
    });
};

export const VehicleByName = (name) => (dispatch) => {
  axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/GetMakeForManufacturer/${name}?format=json`)
    .then((response) => {
      const { data } = response;
      dispatch({ type: GET_BY_NAME, data });
    });
};

export const VehicleByNameAndYear = (year) => (dispatch) => {
  axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForManufacturerAndYear/mer?year=${year}&format=json`)
    .then((response) => {
      const { data } = response;
      dispatch({ type: GET_BY_NAME_AND_YEAR, data });
    });
};

export const VehicleByTypesForMake = (type) => (dispatch) => {
  axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/GetVehicleTypesForMake/${type}?format=json`)
    .then((response) => {
      const { data } = response;
      dispatch({ type: GET_BY_TYPES_FOR_MAKE, data });
    });
};

export const VehicleByModelForMake = (id) => (dispatch) => {
  axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeId/${id}?format=json`)
    .then((response) => {
      const { data } = response;
      dispatch({ type: GET_BY_MODEL_FOR_MAKE, data });
    });
};

export const VehicleTypeByName = () => (dispatch) => {
  axios.get(`https://vpic.nhtsa.dot.gov/api${getTypeByNameUrl}`)
    .then((response) => {
      const { data } = response;
      dispatch({ type: GET_BY_TYPES_BY_NAME, data });
    });
};

export const VehicleMakesByName = (name) => (dispatch) => {
  axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/GetVehicleTypesForMake/${name}?format=json`)
    .then((response) => {
      const { data } = response;
      dispatch({ type: GET_MAKES_BY_NAME, data });
    });
};

export function VehicleAllManufacturers() {
  return (dispatch) => {
    axios.get(`https://vpic.nhtsa.dot.gov/api${getAllManufacturersUrl}`)
      .then((response) => {
        const { data } = response;
        dispatch({ type: GET_ALL_MANUFACTURERS, data });
      });
  };
}
