export interface ICurrent {
  clouds: number;
  feels_like: string;
  humidity: number;
  sunrise: string;
  sunset: string;
  temp: string;
  uvi: string;
  weather: IWeather[];
  wind_deg: number;
  wind_speed: string;
  rain?: IRainResponse;
  snow?: ISnowResponse;
}

export interface IRainResponse {
  '1h': string,
}

export interface ISnowResponse {
  '1h': string,
}

export interface IWeather {
  description: string;
  icon: string;
}

export interface IFeelsLike {
  day: string;
  eve: string;
  morn: string;
  night: string;
}

export interface ITemp extends IFeelsLike {
  min: string;
  max: string;
}

export interface IDaily {
  clouds: number;
  feels_like: IFeelsLike;
  humidity: number;
  sunrise: string;
  sunset: string;
  moonrise: string;
  moonset: string;
  temp: ITemp;
  uvi: string;
  weather: IWeather[];
  wind_deg: number;
  wind_gust: string;
  wind_speed: string;
  rain: string;
}

export interface IHourly {
  clouds: number;
  dt: string;
  feels_like: string;
  humidity: number;
  temp: string;
  uvi: string;
  weather: IWeather[];
  wind_deg: number;
  wind_gust: string;
  wind_speed: string;
  rain: string;
}

export interface IAlerts {
  description: string;
  event: string;
  start: number;
  end: number;
}

export interface WeatherForecastResponse {
  alerts: IAlerts[];
  current: ICurrent;
  daily: IDaily[];
  hourly: IHourly[];
}
