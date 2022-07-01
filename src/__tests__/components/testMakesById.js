import renderer from 'react-test-renderer';
import GetMakesByName from '../../__Mocks__/getMakesByName';

it('component render correctely', () => {
  const tree = renderer
    .create(<GetMakesByName />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
