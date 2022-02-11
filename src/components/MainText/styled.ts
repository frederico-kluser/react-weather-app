import styled from 'styled-components';
import { mobileChanges } from '../../utils/style';

const margin = 'margin: 0px;';
const marginTop = 'margin-top: 25px;';

const MainTextContainer = styled.div`
  text-align: center;
`;

export const H1 = styled.h1`
  font-size: 9em;
  margin-top: 0;
  ${margin}
  ${mobileChanges(`
    font-size: 6em;
    ${marginTop}
  `)}
`;

export const H2 = styled.h2`
  font-size: 2.4em;
  font-weight: 100;
  ${margin}
  margin-top: -25px;
  text-transform: capitalize;
  ${mobileChanges(marginTop)}
`;

export const H3 = styled.h3`
  font-size: 1.26em;
  font-weight: 100;
  margin-top: 10px;
  ${margin}
  ${mobileChanges(marginTop)}
`;


export default MainTextContainer;
