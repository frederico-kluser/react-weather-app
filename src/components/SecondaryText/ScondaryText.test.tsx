import renderer from 'react-test-renderer';
import ScondaryText from '.';

test('ScondaryText Renderer', () => {
  const component = renderer.create(
    <ScondaryText text="test" />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});