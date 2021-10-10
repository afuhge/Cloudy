export interface ICoordinates {
  lon: string;
  lat: string;
}

export interface IWind {
  speed: number;
  deg: number;
  gust: number;
}

export interface ICloud {
  all: number;
}

export interface IMain {
  temp: string;
  temp_min: string;
  temp_max: string;
  feels_like: string;
  humidity: number;
}

export interface ISys {
  sunrise: string;
  sunset: string;
}

export interface IWeatherDescription {
  description: string;
  icon: string;
}

export interface WeatherResponse {
  coord: ICoordinates;
  clouds: ICloud;
  main: IMain;
  name: string;
  sys: ISys;
  weather: IWeatherDescription[];
  wind: IWind;
}

