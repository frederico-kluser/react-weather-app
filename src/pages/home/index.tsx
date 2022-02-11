import { useEffect, useState } from 'react';
import Button from '../../components/Button';
import CirclePercentage from '../../components/CirclePercentage';
import Flex from '../../components/Flex';
import Image from '../../components/Icon';
import MainText from '../../components/MainText';
import ScondaryText from '../../components/SecondaryText';
import SubTitle from '../../components/SubTitle';
import Title from '../../components/Title';
import Wrapper from './styled';
import { convertKelvinToCelsius, convertStatusText, dateFormat, getTime } from '../../utils/conversor';
import { weatherMock } from '../../utils/mock';
import { updateLocationInfo } from '../../utils/openWeaTherMapAPI';

const Home = () => { 

  const [isLoading, setIsLoading] = useState(true);
  const [locationAllowed, setLocationAllowed] = useState(true);
  const [weather, setWeather] = useState(weatherMock);

  const reloadGeolocation = () => {
    setIsLoading(true);
    navigator.geolocation.getCurrentPosition((position) => {
      updateLocationInfo(position.coords.latitude, position.coords.longitude).then(response => response.json())
      .then(result => {
        setWeather({
          ...result,
          date: new Date(),
        });
        setIsLoading(false);
      }).catch(error => console.log('error', error));
    }, () => {
      setLocationAllowed(false);
      console.error("Geolocalização não é permitida por este navegador.");
    });
  };

  useEffect(() => {
    if (navigator.geolocation) {
      reloadGeolocation();
    } else { 
      setLocationAllowed(false);
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <Flex>
      { locationAllowed && <>
        <Wrapper opacity={isLoading ? 0.3 : 1}>
          <Title text={`${weather.name}, ${weather.sys.country}`} />
          <SubTitle text={dateFormat(weather.date)} />
          <Flex row>
            <MainText temperature={convertKelvinToCelsius(weather.main.temp)} status={convertStatusText[weather.weather[0].description]} lastUpdate={getTime(weather.date)} />
            <Image icon={weather.weather[0].description} />
          </Flex>
          <Flex row>
            <ScondaryText text={`Vento ${weather.wind.speed}km/h`} />
            <ScondaryText text={`S. Termica ${convertKelvinToCelsius(weather.main.feels_like)}°C`} />
            <ScondaryText text={`P. atmosférica ${weather.main.pressure}`} />
          </Flex>
          <Flex row>
            <CirclePercentage text="Humidade" percentage={weather.main.humidity} />
          </Flex> 
        </Wrapper>
        <Button isLoading={isLoading} onClick={reloadGeolocation}/>
      </>}
      { !locationAllowed && <h1>Resete as permissões de localização do seu navegador</h1> }
    </Flex>
  );
};

export default Home;
