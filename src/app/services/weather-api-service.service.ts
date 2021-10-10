import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { IEnvironment } from '../core/definitions/environment';
import { ENVIRONMENT } from '../core/tokens/environment_token';
import { UrlHelperService } from './url-helper.service';
import { Weather } from '../core/models/weather-model';
import { WeatherResponse } from './models/weather-response';
import { WeatherServiceMapper } from '../mapper/weather-service-mapper';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class WeatherApiServiceService {

  private readonly API_KEY: string;

  constructor(
    private http: HttpClient,
    private urlService: UrlHelperService,
    private weatherMapper: WeatherServiceMapper,
    @Inject(ENVIRONMENT) public environment: IEnvironment,
  ) {
    this.API_KEY = environment.weatherService.key;
  }

  public fetchCurrentWeather(city: string): Observable<Weather> {
    city = 'Dortmund';
    const url: string = this.urlService.getUrlCurrentWeather(city).url;

    return this.http.get(url)
      .pipe(map((response: WeatherResponse) => {
        console.log(response);
        return this.weatherMapper.parseCancellationResponse(response);
      }));
  }
}
