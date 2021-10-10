import { Inject, Injectable } from '@angular/core';
import { ENVIRONMENT } from '../core/tokens/environment_token';
import { IEnvironment } from '../core/definitions/environment';
import { IApiUrl } from '../core/definitions/api-url-interface';
import { ApiUrl } from '../core/models/api-url-model';

@Injectable({
  providedIn: 'root'
})
export class UrlHelperService {
  private readonly REST_API_URL: string;
  private readonly REST_API_KEY: string;

  constructor(
    @Inject(ENVIRONMENT) public environment: IEnvironment,

  ) {
    this.REST_API_URL = this.environment.weatherService.url;
    this.REST_API_KEY = this.environment.weatherService.key;
  }

  public getUrlCurrentWeather(city: string): IApiUrl {
    const url: string = `${this.REST_API_URL}${city}&units=metric&appid=${this.REST_API_KEY}`;

    return new ApiUrl(url);
  }
}
