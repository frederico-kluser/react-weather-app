import styled from 'styled-components';
import { mobileChanges } from '../../utils/style';

interface ContainerInterface {
  row?: boolean;
}

const Container = styled.div<ContainerInterface>`
  justify-content: center;
  display: flex;
  flex-direction: ${({row}) => row ? 'row' : 'column'};
  ${mobileChanges(`
    flex-direction: column;
    margin-bottom: 25px;
  `)}
`;

export default Container;
