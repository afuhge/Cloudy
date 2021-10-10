import { Injectable } from '@angular/core';
import { ICloud, ICoordinates, IMain, ISys, IWeatherDescription, IWind, WeatherResponse } from '../services/models';
import { Weather } from '../core/models';



@Injectable({
  providedIn: 'root',
})
export class WeatherServiceMapper {
  private response: Weather;

  public parseCancellationResponse(source: WeatherResponse): Weather {
    this.response = {
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

    return this.response;
  }
}
