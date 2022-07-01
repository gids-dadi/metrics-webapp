import renderer from 'react-test-renderer';
import GetAllManufacturers from '../../__Mocks__/getAllManufacturers';

it('component render correctely', () => {
  const tree = renderer
    .create(<GetAllManufacturers />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
