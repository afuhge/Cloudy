import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherServiceMapper } from '../mapper/weather-service-mapper';
import { ENVIRONMENT } from '../core/tokens/environment_token';
import { IEnvironment } from '../core/definitions/environment';
import { Observable } from 'rxjs';
import { ICoordinates, WeatherForecast } from '../core/models';
import { map } from 'rxjs/operators';
import { WeatherForecastResponse } from './models';
import { WeatherForecastUrlHelperService } from './weather-forecast-url-helper.service';

@Injectable({
  providedIn: 'root',
})
export class WeatherForecastApiService {
  private readonly API_KEY: string;

  constructor (
    private http: HttpClient,
    private urlService: WeatherForecastUrlHelperService,
    private weatherMapper: WeatherServiceMapper,
    @Inject(ENVIRONMENT) public environment: IEnvironment,
  ) {
    this.API_KEY = environment.weatherForecastService.key;
  }

  public fetchWeatherForecast (coords: ICoordinates): Observable<WeatherForecast> {
    const url: string = this.urlService.getUrlWeatherForecast(coords.lat, coords.lon).url;

    return this.http.get(url)
      .pipe(map((response: WeatherForecastResponse) => {
        console.log(response);
        return this.weatherMapper.parseWeatherForecastResponse(response);
      }));
  }
}
