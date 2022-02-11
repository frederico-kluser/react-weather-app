
import renderer from 'react-test-renderer';
import Button from '.';

test('Button Renderer', () => {
  const component = renderer.create(
    <Button isLoading onClick={() => {}} />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});