export interface ICurrentWeather {
  clouds: number;
  feelsLike: string;
  humidity: number;
  sunrise: string;
  sunset: string;
  temp: string;
  uvi: string;
  weather: IWeather[];
  windDeg: number;
  windSpeed: string;
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

export interface IDailyWeather {
  clouds: number;
  feelsLike: IFeelsLike;
  humidity: number;
  sunrise: string;
  sunset: string;
  moonrise: string;
  moonset: string;
  temp: ITemp;
  uvi: string;
  weather: IWeather[];
  windDeg: number;
  windGust: string;
  windSpeed: string;
  rain: string;
}

export interface  IWeatherAlert {
  description: string;
  event: string;
  start: string;
  end: string;
}


export interface WeatherForecast {
  alerts: IWeatherAlert[];
  current: ICurrentWeather;
  daily: IDailyWeather[];
}
