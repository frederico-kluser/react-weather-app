import renderer from 'react-test-renderer';
import SubTitle from '.';

test('SubTitle Renderer', () => {
  const component = renderer.create(
    <SubTitle text="test" />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});