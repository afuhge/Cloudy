import { Injectable } from '@angular/core';
import { ICurrent, IDaily, WeatherForecastResponse, WeatherResponse } from '../services/models';
import { ICurrentWeather, IDailyWeather, Weather, WeatherForecast } from '../core/models';

@Injectable({
  providedIn: 'root',
})
export class WeatherServiceMapper {

  private static parseCurrentWeather(current: ICurrent): ICurrentWeather {
    const response: ICurrentWeather = {
      clouds: current.clouds,
      feelsLike: current.feels_like,
      humidity: current.humidity,
      sunrise: current.sunrise,
      sunset: current.sunset,
      temp: current.temp,
      uvi: current.uvi,
      weather: current.weather,
      windDeg: current.wind_deg,
      windSpeed: current.wind_speed,
    };

    return response;
  }

  public parseWeatherResponse(source: WeatherResponse): Weather {
    const response: Weather = {
      name: source.name,
      lat: source.coord.lat,
      lon: source.coord.lon,
      windDeg: source.wind.deg,
      windSpeed: source.wind.speed,
      windGust: source.wind.gust,
      temp: source.main.temp,
      tempMin: source.main.temp_min,
      tempMax: source.main.temp_max,
      humidity: source.main.humidity,
      feelsLike: source.main.feels_like,
      clouds: source.clouds.all,
      sunrise: source.sys.sunrise,
      sunset: source.sys.sunset,
      description: source.weather.length > 0 ? source.weather[0].description : null,
      icon: source.weather.length > 0 ? source.weather[0].icon : null,
    };

    return response;
  }

  public parseWeatherForecastResponse(source: WeatherForecastResponse): WeatherForecast {
    const response: WeatherForecast = {
      current: WeatherServiceMapper.parseCurrentWeather(source.current),
      daily: this.parseDailyWeather(source.daily),
    };

    return response;
  }

  private parseDailyWeather(daily: IDaily[]): IDailyWeather[] {
    const response: IDailyWeather[] = [];

    daily.forEach((el: IDaily) => {
      const day: IDailyWeather = {
        clouds: el.clouds,
        feelsLike: el.feels_like,
        humidity: el.humidity,
        sunrise: el.sunrise,
        sunset: el.sunset,
        moonset: el.moonset,
        moonrise: el.moonrise,
        temp: el.temp,
        uvi: el.uvi,
        weather: el.weather,
        windDeg: el.wind_deg,
        windGust: el.wind_gust,
        windSpeed: el.wind_speed,
        rain: el.rain,
      };

      response.push(day);
    });

    return response;
  }
}
