import styled from 'styled-components';
import { mobileChanges } from '../../utils/style';

interface ButtonContainerInterface {
  isLoading: boolean;
}

const ButtonContainer = styled.div<ButtonContainerInterface>`
            user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
       -moz-user-select: none; /* Old versions of Firefox */
     -khtml-user-select: none; /* Konqueror HTML */
    -webkit-user-select: none; /* Safari */
  -webkit-touch-callout: none; /* iOS Safari */
  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  color: #0d3f66;
  font-size: 1.5em;
  height: 75px;
  line-height: 75px;
  margin: 0 auto;
  margin-bottom: 50px;
  padding-left: 50px;
  position: relative;
  transition: all 0.25s;
  width: 250px;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  &:active {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }

  ${({isLoading}) => isLoading && `
    box-shadow: initial;
    &:hover {
      box-shadow: initial;
    }
  
    &:active {
      box-shadow: initial;
    }
  `}
  ${mobileChanges('margin-top: 25px;')}
`;

export const Icon = styled.img`
  left: 25px;
  position: absolute;
  top: 12.5px;
  width: 50px;
`;


export default ButtonContainer;
