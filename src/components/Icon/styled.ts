import styled from 'styled-components';
import { mobileChanges } from '../../utils/style';

const ImageContainer = styled.img`
  ${mobileChanges('margin-top: 25px;')}
`;

export default ImageContainer;
