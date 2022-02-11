import renderer from 'react-test-renderer';
import Image from '.';

test('Image Renderer', () => {
  const component = renderer.create(
    <Image icon="Heavy snow" />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});