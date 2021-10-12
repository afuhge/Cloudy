import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherForecastUrlHelperService } from './weather-forecast-url-helper.service';
import { WeatherServiceMapper } from '../mapper/weather-service-mapper';
import { ENVIRONMENT } from '../core/tokens/environment_token';
import { IEnvironment } from '../core/definitions/environment';
import { Observable, of } from 'rxjs';
import { ICityResponse, ICoordinates, WeatherForecastResponse } from './models';
import { map } from 'rxjs/operators';
import { ICity } from '../core/models';
import { CityUrlHelperService } from './city-url-helper.service';
import { CityServiceMapper } from '../mapper/city-service-mapper';

@Injectable({
  providedIn: 'root',
})
export class CityApiService {

  private readonly API_KEY: string;

  constructor(
    private http: HttpClient,
    private urlService: CityUrlHelperService,
    private cityMapper: CityServiceMapper,
    @Inject(ENVIRONMENT) public environment: IEnvironment,
  ) {
    this.API_KEY = environment.cityService.key;
  }

  public getCitySuggestions(searchTerm: string): Observable<ICity[]> {
    // get city suggestions
    const url: string = this.urlService.getUrlCityService(searchTerm).url;

    return this.http.get(url)
      .pipe(map((response: ICityResponse[]) => {
        return this.cityMapper.parseCityResponse(response);
      }));
  }
}
