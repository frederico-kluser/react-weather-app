import env from "react-dotenv";

export const updateLocationInfo = async (latitude: number, longitude: number) => {
  const requestOptions: any = {
    method: 'GET',
    redirect: 'follow'
  };
  
  return fetch(`http://api.openweathermap.org/data/2.5/weather?appid=${env.OPENWEATHERMAP_API_KEY}&lat=${latitude}&lon=${longitude}`, requestOptions)
};