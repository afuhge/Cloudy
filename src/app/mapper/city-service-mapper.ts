import { Injectable } from '@angular/core';
import { ICity, IDailyWeather } from '../core/models';
import { ICityResponse, IDaily } from '../services/models';

@Injectable({
  providedIn: 'root',
})
export class CityServiceMapper {

  public parseCityResponse(response: ICityResponse[]): ICity[] {
    const cities: ICity[] = [];

    response.forEach((el: ICityResponse) => {
      const city: ICity = {
        name: el.name,
        lat: el.lat,
        lon: el.lon,
        country: el.country,
      };

      cities.push(city);
    });

    return cities;
  }
}
