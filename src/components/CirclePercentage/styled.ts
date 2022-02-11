import styled from 'styled-components';
import { mobileChanges } from '../../utils/style';

interface percentageInterface {
  percentage: number;
}

interface PercentageBarInterface {
  mask?: boolean;
  right?: boolean;
}

const CirclePercentageContainer = styled.div`
  margin: 55px;
  margin-top: 55px;
  ${mobileChanges(`
    margin: 0;
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `)}
`;

export const Wrapper = styled.div`
  border-radius: 50%;
  height: 165px;
  overflow: hidden;
  position: relative;
  width: 165px;
`;

export const WrapperChild = styled.div`
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

export const Left = styled(WrapperChild)<percentageInterface>`
  transform: rotate(${({ percentage }) => percentage * 3.6 > 180 ? 180 : percentage * 3.6}deg);
  z-index: 1;
`;

export const MaskLeft = styled(WrapperChild)`
  z-index: 1;
`;

export const MaskRight = styled(WrapperChild)``;


export const Right = styled(WrapperChild)<percentageInterface>`
  ${({ percentage }) => (percentage - 50) * 3.6 <= 180 && (percentage - 50) > 0 ? `
    transform: scale(1) rotate(${(percentage - 50) * 3.6}deg);
  ` : `
    transform: scale(0) rotate(0deg);
  `}
  z-index: 2;
`;

export const PercentageBar = styled.div<PercentageBarInterface>`
  background-color: ${({mask}) => mask ? '#ECEFF1' : '#03A9F4'};
  height: 100%;
  position: absolute;
  width: 50%;
  ${({right}) => (right && 'left: 50%;')}
`;

export const Middle = styled.div`
  background: white;
  border-radius: 50%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  font-size: 2.4em;
  font-weight: 500;
  height: 80%;
  left: 10%;
  line-height: 132px;
  position: absolute;
  text-align: center;
  top: 10%;
  width: 80%;
  z-index: 4;
`;

export const Description = styled.div`
  font-size: 1.33em;
  margin-top: 20px;
  text-align: center;
  width: 165px;
}
`;


export default CirclePercentageContainer;
