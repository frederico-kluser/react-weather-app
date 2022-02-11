export const convertKelvinToCelsius = (kelvin: number) => Math.floor(kelvin - 273.15);

export const dayOfWeek = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'];

export const monthOfYear = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

export const convertStatusText: any = {
  "broken clouds: 51-84%": "nuvens quebradas: 51-84%",
  "broken clouds": "nuvens quebradas",
  "clear sky": "céu claro",
  "cloud": "nuvem",
  "cloudDay": "cloudDay",
  "cloudWind": "nuvemVento",
  "drizzle rain": "chuvisco",
  "drizzle": "chuvisco",
  "dust": "poeira",
  "extreme rain": "chuva extrema",
  "few clouds: 11-25%": "poucas nuvens: 11-25%",
  "few clouds": "algumas nuvens",
  "fog": "nevoeiro",
  "freezing rain": "chuva congelante",
  "Haze": "Névoa",
  "heavy intensity drizzle rain": "chuva de garoa de forte intensidade",
  "heavy intensity drizzle": "chuvisco de forte intensidade",
  "heavy intensity rain": "chuva de forte intensidade",
  "heavy intensity shower rain": "chuva de chuva de forte intensidade",
  "heavy shower rain and drizzle": "chuva forte e chuvisco",
  "Heavy shower snow": "chuva de neve forte",
  "Heavy snow": "Neve pesada",
  "heavy thunderstorm": "tempestade forte",
  "light intensity drizzle rain": "chuva de chuvisco de intensidade leve",
  "light intensity drizzle": "chuvisco de intensidade de luz",
  "light intensity shower rain": "chuva de chuva de intensidade leve",
  "Light rain and snow": "Chuva leve e neve",
  "light rain": "chuva leve",
  "Light shower sleet": "Aguaceiro leve",
  "Light shower snow": "Chuveiro de neve leve",
  "light snow": "neve leve",
  "light thunderstorm": "tempestade leve",
  "mist": "névoa",
  "moderate rain": "chuva moderada",
  "overcast clouds: 85-100%": "nuvens nubladas: 85-100%",
  "overcast clouds": "nuvens nubladas",
  "ragged shower rain": "chuva de chuva irregular",
  "ragged thunderstorm": "tempestade irregular",
  "Rain and snow": "Chuva e neve",
  "rain": "chuva",
  "sand": "areia",
  "sand/ dust whirls": "turbilhões de areia/poeira",
  "scattered clouds: 25-50%": "nuvens espalhadas: 25-50%",
  "scattered clouds": "nuvens espalhadas",
  "shower drizzle": "chuva de chuva",
  "shower rain and drizzle": "chuva e garoa",
  "shower rain": "chuva de chuva",
  "Shower sleet": "Chuveiro de granizo",
  "Shower snow": "Chuva de neve",
  "Sleet": "Sleet",
  "Smoke": "Fumaça",
  "snow": "neve",
  "Snow": "Neve",
  "squalls": "rajadas",
  "sun": "sol",
  "sunMist": "sunMist",
  "sunSnow": "sunSnow",
  "sunStorm": "Tempestade Solar",
  "thunderstorm with drizzle": "trovoada com chuvisco",
  "thunderstorm with heavy drizzle": "trovoada com chuvisco forte",
  "thunderstorm with heavy rain": "trovoada com chuva forte",
  "thunderstorm with light drizzle": "trovoada com chuvisco leve",
  "thunderstorm with light rain": "trovoada com chuva leve",
  "thunderstorm with rain": "trovoada com chuva",
  "thunderstorm": "trovoada",
  "tornado": "tornado",
  "very heavy rain": "chuva muito forte",
  "volcanic ash": "cinza vulcanica",
};

export const getTime = (date: Date) => `${date.getHours()}:${date.getMinutes()}`;

export const dateFormat = (date: Date) => `${dayOfWeek[date.getDay()]} - ${date.getDate()}, ${monthOfYear[date.getMonth()]} de ${date.getFullYear()}`;