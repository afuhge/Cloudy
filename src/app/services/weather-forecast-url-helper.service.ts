import { ApiUrl } from '../core/models';
import { Inject, Injectable } from '@angular/core';
import { ENVIRONMENT } from '../core/tokens/environment_token';
import { IEnvironment } from '../core/definitions/environment';
import { IApiUrl } from '../core/definitions/api-url-interface';

@Injectable({
  providedIn: 'root'
})
export class WeatherForecastUrlHelperService {
  private readonly REST_API_URL: string;
  private readonly REST_API_KEY: string;

  constructor (
    @Inject(ENVIRONMENT) public environment: IEnvironment,
  ) {
    this.REST_API_URL = this.environment.weatherForecastService.url;
    this.REST_API_KEY = this.environment.weatherForecastService.key;
  }

  public getUrlWeatherForecast (lat: string, lon: string): IApiUrl {
    const url: string = `${this.REST_API_URL}?lat=${lat}&lon=${lon}&units=metric&exclude=minutely&lang=en&appid=${this.REST_API_KEY}`;

    return new ApiUrl(url);
  }
}
