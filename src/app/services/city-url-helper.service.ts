import { Inject, Injectable } from '@angular/core';
import { ENVIRONMENT } from '../core/tokens/environment_token';
import { IEnvironment } from '../core/definitions/environment';
import { IApiUrl } from '../core/definitions/api-url-interface';
import { ApiUrl } from '../core/models';

@Injectable({
  providedIn: 'root'
})
export class CityUrlHelperService {
  private readonly REST_API_URL: string;
  private readonly REST_API_KEY: string;

  constructor (
    @Inject(ENVIRONMENT) public environment: IEnvironment,
  ) {
    this.REST_API_URL = this.environment.cityService.url;
    this.REST_API_KEY = this.environment.cityService.key;
  }

  public getUrlCityService (searchTerm: string): IApiUrl {
    const url: string = `${this.REST_API_URL}?q=${searchTerm}&limit=3&appid=${this.REST_API_KEY}`;

    return new ApiUrl(url);
  }
}
