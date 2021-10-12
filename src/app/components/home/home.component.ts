import { Component, OnInit } from '@angular/core';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import { faBolt, faMapMarkerAlt, faSearch, faSmog, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FormControl, FormGroup } from '@angular/forms';
import { ICity, WeatherForecast } from '../../core/models';
import { ICoordinates } from '../../services/models';
import { WeatherForecastApiService } from '../../services/weather-forecast-api.service';
import { CityApiService } from '../../services/city-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private weatherForecastService: WeatherForecastApiService,
    private cityService: CityApiService,
  ) { }
  public search: IconDefinition = faSearch;
  public reset: IconDefinition = faTimes;

  public searchForm: FormGroup = new FormGroup({
    city: new FormControl(''),
  });
  public city = '';
  public country = '';
  public marker: IconDefinition = faMapMarkerAlt;
  public weather: IconDefinition = faBolt;
  public isLoading = true;
  public showResults = false;

  public suggestions: ICity[] = [];

  private showPosition(position): void {
    const currentLocation: ICoordinates = {
      lon: position.coords.longitude,
      lat: position.coords.latitude,
    };
    this.fetchWeatherForecast(currentLocation);
  }

  ngOnInit(): void {
    this.getCurrentLocation();

  }

  private getCurrentLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition.bind(this));
    } else {
      this.isLoading = false;
    }
  }

  public fetchWeatherForCity(city: ICity): void {
    this.resetForm();
    this.isLoading = true;

    const coords: ICoordinates = {
      lon: city.lon,
      lat: city.lat,
    };
    this.weatherForecastService.fetchWeatherForecast(coords)
      .subscribe((response: WeatherForecast) => {
        console.log(response);
        this.city = city.name;
        this.country = city.country;
        this.isLoading = false;
      });
  }

  public fetchWeatherForecast(currentLocation: ICoordinates): void {
    if ( currentLocation) {
      this.weatherForecastService.fetchWeatherForecast(currentLocation)
        .subscribe((response: WeatherForecast) => {
          console.log(response);
          this.city = 'Current Location';
          this.isLoading = false;
        });
    }
  }

  public searchCity(): void {
    if (this.searchForm.get('city').value !== '') {
      this.isLoading = true;
      const searchTerm = this.searchForm.get('city').value.trim();
      this.cityService.getCitySuggestions(searchTerm)
        .subscribe((response: ICity[]) => {
            console.log(response);
            this.suggestions = response;
            this.isLoading = false;
            this.showResults = true;
        });
    }
  }

  public resetForm(): void {
    this.searchForm.reset();
    this.showResults = false;
  }
}
