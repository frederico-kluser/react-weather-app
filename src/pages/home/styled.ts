import styled from 'styled-components';

interface WrapperInterface {
  opacity: number;
}

const Wrapper = styled.div<WrapperInterface>`
  opacity: ${({ opacity }) => opacity};
  transition: all 0.25s;
`;

export default Wrapper;
