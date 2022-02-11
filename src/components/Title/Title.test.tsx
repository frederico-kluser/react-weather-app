import renderer from 'react-test-renderer';
import Title from '.';

test('Title Renderer', () => {
  const component = renderer.create(
    <Title text="test" />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});