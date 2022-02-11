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
import env from "react-dotenv";
import { convertKelvinToCelsius, convertStatusText, dateFormat, dayOfWeek, getTime, monthOfYear } from '../../utils/conversor';

const location = {
  latitude: 0,
  longitude: 0,
}

const updateLocationInfo = async () => {
  const requestOptions: any = {
    method: 'GET',
    redirect: 'follow'
  };
  
  return fetch(`http://api.openweathermap.org/data/2.5/weather?appid=${env.OPENWEATHERMAP_API_KEY}&lat=${location.latitude}&lon=${location.longitude}`, requestOptions)
};

const Home = () => { 
  
  const [isLoading, setIsLoading] = useState(true);
  const [locationAllowed, setLocationAllowed] = useState(true);
  const [weather, setWeather]: any = useState(false);

  const reloadGeolocation = () => {
    setIsLoading(true);
    navigator.geolocation.getCurrentPosition((position) => {
      location.latitude = position.coords.latitude;
      location.longitude = position.coords.longitude;
      updateLocationInfo().then(response => response.json())
      .then(result => {
        setWeather({
          ...result,
          date: new Date(),
        });
        setIsLoading(false);
      }).catch(error => console.log('error', error));
    }, () => {
      setLocationAllowed(false);
      console.error("Geolocation is not allowed by this browser.");
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
      { (locationAllowed && !!weather) && <>
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
