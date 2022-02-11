import styled from 'styled-components';
import { mediaQuery } from '../../utils/style';

interface ContainerInterface {
  row?: boolean;
}

const Container = styled.div<ContainerInterface>`
  justify-content: center;
  display: flex;
  flex-direction: ${({row}) => row ? 'row' : 'column'};
  ${mediaQuery(`
    flex-direction: column;
    margin-bottom: 25px;
  `)}
`;

export default Container;
