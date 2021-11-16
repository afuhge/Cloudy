import { Component, HostListener, OnInit} from '@angular/core';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import { faMapMarkerAlt, faSearch, faSearchLocation, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FormControl, FormGroup } from '@angular/forms';
import { ICity, ICoordinates, WeatherForecast } from '../../core/models';
import { WeatherForecastApiService } from '../../services/weather-forecast-api.service';
import { CityApiService } from '../../services/city-api.service';
import {ShowCurrentWeatherDetailsService} from '../../services/show-current-weather-details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public search: IconDefinition = faSearch;
  public reset: IconDefinition = faTimes;

  public searchForm: FormGroup = new FormGroup({
    city: new FormControl(''),
  });
  public city = '';
  public country = '';
  public marker: IconDefinition = faMapMarkerAlt;
  public weather: IconDefinition = faSearchLocation;
  public isLoading = false;
  public showResults = false;
  public weatherForecast: WeatherForecast;

  public suggestions: ICity[] = [];

  constructor(
    private weatherForecastService: WeatherForecastApiService,
    private cityService: CityApiService,
    public showDetailsService: ShowCurrentWeatherDetailsService,
  ) {
    this.searchForm.valueChanges.subscribe((value) => {
      this.searchCity();
    });
    this.showDetailsService.hide();
  }

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
        this.weatherForecast = response;
        this.weatherForecast.daily.splice(0, 1);
        this.weatherForecast.daily.splice(this.weatherForecast.daily.length - 1, -1);
        console.log(this.weatherForecast);
        this.city = city.name;
        this.country = city.country;
        this.isLoading = false;
      });
  }

  public fetchWeatherForecast(currentLocation: ICoordinates): void {
    if ( currentLocation) {
      this.isLoading = true;
      this.weatherForecastService.fetchWeatherForecast(currentLocation)
        .subscribe((response: WeatherForecast) => {
          this.city = 'Current Location';
          this.weatherForecast = response;
          this.weatherForecast.daily.splice(0, 1);
          this.weatherForecast.daily.splice(this.weatherForecast.daily.length - 1, 1);
          console.log(this.weatherForecast);
          this.isLoading = false;
        }, (error) => {
          this.isLoading = false;
        });
    }
  }

  public searchCity(): void {
    if (this.searchForm.get('city').value && this.searchForm.get('city').value !== '') {
      const searchTerm = this.searchForm.get('city').value.trim();
      this.cityService.getCitySuggestions(searchTerm)
        .subscribe((response: ICity[]) => {
            this.suggestions = response;
            this.showResults = true;
        });
    }
  }

  public resetForm(): void {
    this.searchForm.reset();
    this.showResults = false;
  }

  public setShowDetails(): void {
    this.showDetailsService.hide();
  }
}
