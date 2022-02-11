import renderer from 'react-test-renderer';
import MainText from '.';

test('MainText Renderer', () => {
  const component = renderer.create(
    <MainText temperature={20} status="Heavy shower snow" lastUpdate="14:40" />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});