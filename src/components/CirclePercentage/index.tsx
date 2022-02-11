import React from 'react';
import CirclePercentageContainer, { Description, Left, MaskLeft, MaskRight, Middle, PercentageBar, Right, Wrapper } from './styled';

interface CirclePercentageInterface {
  text: string;
  percentage: number;
}

const CirclePercentage = ({text, percentage}: CirclePercentageInterface) => (
  <CirclePercentageContainer>
    <>
      <Wrapper>
        <Left>
          <PercentageBar />
        </Left>
        <Right>
          <PercentageBar right />
        </Right>
        <MaskLeft>
          <PercentageBar mask />
        </MaskLeft>
        <MaskRight>
          <PercentageBar mask right />
        </MaskRight>
        <Middle>
          {percentage}%
        </Middle>
      </Wrapper>
      <Description>
        {text}
      </Description>
    </>
  </CirclePercentageContainer>
);

export default CirclePercentage;
