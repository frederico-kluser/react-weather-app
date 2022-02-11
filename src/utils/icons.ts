export type IconType = 'broken clouds: 51-84%'| 'broken clouds'| 'clear sky'| 'cloud'| 'cloudDay'| 'cloudWind'| 'drizzle rain'| 'drizzle'| 'dust'| 'extreme rain'| 'few clouds: 11-25%'| 'few clouds'| 'fog'| 'freezing rain'| 'Haze'| 'heavy intensity drizzle rain'| 'heavy intensity drizzle'| 'heavy intensity rain'| 'heavy intensity shower rain'| 'heavy shower rain and drizzle'| 'Heavy shower snow'| 'Heavy snow'| 'heavy thunderstorm'| 'light intensity drizzle rain'| 'light intensity drizzle'| 'light intensity shower rain'| 'Light rain and snow'| 'light rain'| 'Light shower sleet'| 'Light shower snow'| 'light snow'| 'light thunderstorm'| 'mist'| 'moderate rain'| 'overcast clouds: 85-100%'| 'overcast clouds'| 'ragged shower rain'| 'ragged thunderstorm'| 'Rain and snow'| 'rain'| 'rain'| 'sand'| 'sand/ dust whirls'| 'scattered clouds: 25-50%'| 'scattered clouds'| 'shower drizzle'| 'shower rain and drizzle'| 'shower rain'| 'Shower sleet'| 'Shower snow'| 'Sleet'| 'Smoke'| 'snow'| 'Snow'| 'squalls'| 'sun' | 'sunMist'| 'sunSnow'| 'sunStorm'| 'thunderstorm with drizzle'| 'thunderstorm with heavy drizzle'| 'thunderstorm with heavy rain'| 'thunderstorm with light drizzle'| 'thunderstorm with light rain'| 'thunderstorm with rain'| 'thunderstorm'| 'tornado'| 'very heavy rain'| 'volcanic ash'

const cloudWind = 'cloudWind';
const cloudDay = 'cloudDay';
const cloud = 'cloud';
const rain = 'rain';
const sunMist = 'sunMist';
const sunSnow = 'sunSnow';
const sunStorm = 'sunStorm';

export const ICONS: any = {
  'broken clouds: 51-84%': cloudWind,
  'broken clouds': cloudWind,
  'clear sky': 'sun', // moon
  'cloudDay': cloudDay,
  'drizzle rain': rain, // moonRain, sunRains
  'drizzle': rain, // moonRain, sunRain
  'dust': sunMist, // moonMist
  'extreme rain': rain, // moonRain, sunRain
  'few clouds: 11-25%': cloudDay, // cloudNight
  'few clouds': cloudDay, // cloudNight
  'fog': sunMist, // moonMist
  'freezing rain': sunSnow, // moonSnow
  'Haze': sunMist, // moonMist
  'heavy intensity drizzle rain': rain, // moonRain, sunRain
  'heavy intensity drizzle': rain, // moonRain, sunRain
  'heavy intensity rain': rain, // moonRain, sunRain
  'heavy intensity shower rain': rain, // moonRain, sunRain
  'heavy shower rain and drizzle': rain, // moonRain, sunRain
  'Heavy shower snow': sunSnow, // moonSnow
  'Heavy snow': sunSnow, // moonSnow
  'heavy thunderstorm': sunStorm, // moonStorm
  'light intensity drizzle rain': rain, // moonRain, sunRain
  'light intensity drizzle': rain, // moonRain, sunRain
  'light intensity shower rain': rain, // moonRain, sunRain
  'Light rain and snow': sunSnow, // moonSnow
  'light rain': rain, // moonRain, sunRain
  'Light shower sleet': sunSnow, // moonSnow
  'Light shower snow': sunSnow, // moonSnow
  'light snow': sunSnow, // moonSnow
  'light thunderstorm': sunStorm, // moonStorm
  'mist': sunMist, // moonMist
  'moderate rain': rain, // moonRain, sunRain
  'overcast clouds: 85-100%': cloudWind,
  'overcast clouds': cloudWind,
  'ragged shower rain': rain, // moonRain, sunRain
  'ragged thunderstorm': sunStorm, // moonStorm
  'Rain and snow': sunSnow, // moonSnow
  'rain': rain, // moonRain, sunRain
  'sand': sunMist, // moonMist
  'sand/ dust whirls': sunMist, // moonMist
  'scattered clouds: 25-50%': cloud,
  'scattered clouds': cloud,
  'shower drizzle': rain, // moonRain, sunRain
  'shower rain and drizzle': rain, // moonRain, sunRain
  'shower rain': rain, // moonRain, sunRain
  'Shower sleet': sunSnow, // moonSnow
  'Shower snow': sunSnow, // moonSnow
  'Sleet': sunSnow, // moonSnow
  'Smoke': sunMist, // moonMist
  'snow': sunSnow, // moonSnow
  'Snow': sunSnow, // moonSnow
  'squalls': sunMist, // moonMist
  'thunderstorm with drizzle': sunStorm, // moonStorm
  'thunderstorm with heavy drizzle': sunStorm, // moonStorm
  'thunderstorm with heavy rain': sunStorm, // moonStorm
  'thunderstorm with light drizzle': sunStorm, // moonStorm
  'thunderstorm with light rain': sunStorm, // moonStorm
  'thunderstorm with rain': sunStorm, // moonStorm
  'thunderstorm': sunStorm, // moonStorm
  'tornado': sunMist, // moonMist
  'very heavy rain': rain, // moonRain, sunRain
  'volcanic ash': sunMist, // moonMist
};
