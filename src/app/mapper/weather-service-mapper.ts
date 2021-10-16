import { Injectable } from '@angular/core';
import { IAlerts, ICurrent, IDaily, WeatherForecastResponse } from '../services/models';
import { ICurrentWeather, IDailyWeather, IWeatherAlert, WeatherForecast } from '../core/models';

@Injectable({
  providedIn: 'root',
})
export class WeatherServiceMapper {

  private static parseCurrentWeather(current: ICurrent): ICurrentWeather {
    if (!current) {
      return;
    }

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

  public parseWeatherForecastResponse(source: WeatherForecastResponse): WeatherForecast {
    if (!source) {
      return;
    }
    const response: WeatherForecast = {
      alerts: this.parseAlertWeather(source.alerts),
      current: WeatherServiceMapper.parseCurrentWeather(source.current),
      daily: this.parseDailyWeather(source.daily),
    };

    return response;
  }

  private parseDailyWeather(daily: IDaily[]): IDailyWeather[] {
    const response: IDailyWeather[] = [];
    if (!daily) {
      return;
    }

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

  private parseAlertWeather(alerts: IAlerts[]): IWeatherAlert[] {
    const response: IWeatherAlert[] = [];

    if (!alerts) {
      return;
    }

    alerts.forEach((el: IAlerts) => {
      const alert: IWeatherAlert = {
        end: el.end,
        description: el.description,
        event: el.event,
        start: el.start,
      };

      response.push(alert);
    });

    return response;
  }
}
