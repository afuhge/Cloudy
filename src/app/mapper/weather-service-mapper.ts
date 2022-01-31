import { Injectable } from '@angular/core';
import {
  IAlerts,
  ICurrent,
  IDaily,
  IHourly,
  IRainResponse,
  ISnowResponse,
  WeatherForecastResponse
} from '../services/models';
import {
  ICurrentWeather,
  IDailyWeather,
  IHourlyWeather,
  IRain,
  ISnow,
  IWeatherAlert,
  WeatherForecast
} from '../core/models';

@Injectable({
  providedIn: 'root',
})
export class WeatherServiceMapper {

  private static parseCurrentWeather (current: ICurrent): ICurrentWeather {
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
      rain: this.parseRain(current.rain),
      snow: this.parseSnow(current.snow),
    };

    return response;
  }

  private static parseRain (source: IRainResponse): IRain {
    if (!source) {
      return;
    }

    const rain: IRain = {
      lastOneHour: source['1h'],
    };

    return rain;
  }

  private static parseSnow (source: ISnowResponse): ISnow {
    if (!source) {
      return;
    }

    const snow: ISnow = {
      lastOneHour: source['1h'],
    };

    return snow;
  }

  public parseWeatherForecastResponse (source: WeatherForecastResponse): WeatherForecast {
    if (!source) {
      return;
    }
    const response: WeatherForecast = {
      alerts: this.parseAlertWeather(source.alerts),
      current: WeatherServiceMapper.parseCurrentWeather(source.current),
      daily: this.parseDailyWeather(source.daily),
      hourly: this.parseHourlyWeather(source.hourly),
    };

    return response;
  }

  private parseDailyWeather (daily: IDaily[]): IDailyWeather[] {
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

  private parseAlertWeather (alerts: IAlerts[]): IWeatherAlert[] {
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

  private parseHourlyWeather (hourly: IHourly[]): IHourlyWeather[] {
    const response: IHourlyWeather[] = [];
    const slicedHourly = hourly.slice(0, 24);

    if (!slicedHourly) {
      return;
    }

    slicedHourly.forEach((el: IHourly) => {
      const hour: IHourlyWeather = {
        clouds: el.clouds,
        hour: new Date((+el.dt) * 1000).getHours(),
        feels_like: el.feels_like,
        humidity: el.humidity,
        temp: el.temp,
        uvi: el.uvi,
        weather: el.weather,
        wind_deg: el.wind_deg,
        wind_gust: el.wind_gust,
        wind_speed: el.wind_speed,
        rain: el.rain,
      };

      response.push(hour);
    });

    return response;
  }
}
