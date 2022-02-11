import styled from 'styled-components';
import { mobileChanges } from '../../utils/style';

const ScondaryTextContainer = styled.div`
  font-size: 1.33em;
  margin-top: 25px;
  text-align: center;
  width: 25%;
  max-width: 250px;
  ${mobileChanges(`
    width: 100%;
    max-width: initial;
  `)}
`;

export default ScondaryTextContainer;
