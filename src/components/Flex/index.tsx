import Container from './styled';

interface FlexInterface {
  children: any;
  row?: boolean;
}

const Flex = ({children, row}: FlexInterface) => (
  <Container row={row}>{children}</Container>
);

export default Flex;
