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
}

export interface  IWeather {
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


export interface WeatherForecastResponse {
  current: ICurrent;
  daily: IDaily[];
}
