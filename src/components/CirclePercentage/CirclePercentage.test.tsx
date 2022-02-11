import renderer from 'react-test-renderer';
import CirclePercentage from '.';

test('CirclePercentage Renderer', () => {
  const component = renderer.create(
    <CirclePercentage text="Humidade" percentage={60} />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});