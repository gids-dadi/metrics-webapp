import vehiclesReducer, { VehicleByModel, VehicleByYear, VehicleByName } from '../../__Mocks__/actions';

const outPutModel = [
  { id: 0, model: 'Honda1' },
  { id: 2, model: 'Honda2' },
  { id: 3, model: 'Honda3' },
  { id: 4, model: 'Honda4' },
  { id: 5, model: 'Honda5' },
];

const outPutName = [
  { id: 0, car: 'Sesto Lamborghini1' },
  { id: 2, car: 'Sesto Lamborghini2' },
  { id: 3, car: 'Sesto Lamborghini3' },
];

const outPutYear = [
  { id: 0, car: 'Aston Martin 1 2021' },
  { id: 2, car: 'Aston Martin 2 2021' },
  { id: 3, car: 'Aston Martin 3 2021' },
  { id: 4, car: 'Aston Martin 4 2021' },
  { id: 5, car: 'Aston Martin 5 2021' },
];

describe('Test Vehicles Reducer actions', () => {
  test('Test Model', () => {
    expect(vehiclesReducer([], VehicleByModel('Honda'))).toEqual(outPutModel);
  });
  test('Test Name', () => {
    expect(vehiclesReducer([], VehicleByName('Sesto Lamborghini'))).toEqual(outPutName);
  });
  test('Test Year', () => {
    expect(vehiclesReducer([], VehicleByYear('2021'))).toEqual(outPutYear);
  });
});
