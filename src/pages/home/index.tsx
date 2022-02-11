import { useState } from 'react';
import Button from '../../components/Button';
import CirclePercentage from '../../components/CirclePercentage';
import Flex from '../../components/Flex';
import Image from '../../components/Icon';
import MainText from '../../components/MainText';
import ScondaryText from '../../components/SecondaryText';
import SubTitle from '../../components/SubTitle';
import Title from '../../components/Title';
import Wrapper from './styled';

const Home = () => { 
  
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Flex>
      <Wrapper opacity={isLoading ? 0.3 : 1}>
        <Title text="Belgrade, Serbia" />
        <SubTitle text="Wed, 5 Sep 2020" />
        <Flex row>
          <MainText temperature='23' status='Partly Sunny' lastUpdate='1:48pm' />
          <Image icon='cloudDay' />
        </Flex>
        <Flex row>
          <ScondaryText text="Barometer 1009.0 mb" />
          <ScondaryText text="Feels like 25°C" />
          <ScondaryText text="Humidity 41%" />
        </Flex>
        <Flex row>
          <CirclePercentage text="Humidity" percentage={87} />
          <CirclePercentage text="Wind" percentage={27} />
          <CirclePercentage text="Rain" percentage={59} />
        </Flex> 
      </Wrapper>
      <Button isLoading={isLoading} />
    </Flex>
  );
};

export default Home;
