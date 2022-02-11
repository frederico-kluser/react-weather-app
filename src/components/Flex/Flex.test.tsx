import renderer from 'react-test-renderer';
import Flex from '.';

test('Flex Renderer', () => {
  const component = renderer.create(
    <Flex><></></Flex>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});