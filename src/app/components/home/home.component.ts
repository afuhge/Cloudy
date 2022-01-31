import { Component, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faMapMarkerAlt, faSearch, faSearchLocation, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FormControl, FormGroup } from '@angular/forms';
import { ICity, ICoordinates, WeatherForecast } from '../../core/models';
import { WeatherForecastApiService } from '../../services/weather-forecast-api.service';
import { CityApiService } from '../../services/city-api.service';
import { ShowCurrentWeatherDetailsService } from '../../services/show-current-weather-details.service';
import { CurrentThemeService } from '../../services/current-theme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  public search: IconDefinition = faSearch;
  public reset: IconDefinition = faTimes;

  public isDark: boolean;

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

  constructor (
    private weatherForecastService: WeatherForecastApiService,
    private cityService: CityApiService,
    public showDetailsService: ShowCurrentWeatherDetailsService,
    public currentThemeService: CurrentThemeService,
  ) {
    this.searchForm.valueChanges.subscribe(() => {
      this.searchCity();
    });
    this.hideDetails();

    this.currentThemeService.isDarkTheme$.subscribe((isDarkTheme: boolean) => {
      this.isDark = isDarkTheme;
    });
  }

  public ngOnInit (): void {
    this.getCurrentLocation();
  }

  public fetchWeatherForCity (city: ICity): void {
    this.resetForm();
    this.isLoading = true;
    this.hideDetails();

    const coords: ICoordinates = {
      lon: city.lon,
      lat: city.lat,
    };
    this.weatherForecastService.fetchWeatherForecast(coords)
      .subscribe((response: WeatherForecast) => {
        this.setUpData(response);
        this.city = city.name;
        this.country = city.country;
      }, () => {
        this.isLoading = false;
      });
  }

  public fetchWeatherForecast (currentLocation: ICoordinates): void {
    if (currentLocation) {
      this.isLoading = true;
      this.weatherForecastService.fetchWeatherForecast(currentLocation)
        .subscribe((response: WeatherForecast) => {
          this.city = 'Current Location';
          this.setUpData(response);
        }, () => {
          this.isLoading = false;
        });
    }
  }

  public searchCity (): void {
    if (this.searchForm.get('city').value && this.searchForm.get('city').value !== '') {
      const searchTerm = this.searchForm.get('city').value.trim();
      this.cityService.getCitySuggestions(searchTerm)
        .subscribe((response: ICity[]) => {
          this.suggestions = response;
          this.showResults = true;
        });
    }
  }

  public resetForm (): void {
    this.searchForm.reset();
    this.showResults = false;
  }

  public hideDetails (): void {
    this.showDetailsService.hide();
  }

  private showPosition (position): void {
    const currentLocation: ICoordinates = {
      lon: position.coords.longitude,
      lat: position.coords.latitude,
    };
    this.fetchWeatherForecast(currentLocation);
  }

  private getCurrentLocation (): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition.bind(this));
    } else {
      this.isLoading = false;
    }
  }

  private setUpData (response: WeatherForecast): void {
    this.weatherForecast = response;
    this.weatherForecast.daily.splice(0, 1);
    this.weatherForecast.daily.splice(this.weatherForecast.daily.length - 1, 1);
    console.log(this.weatherForecast);
    this.setDarkTheme(this.weatherForecast);
    this.isLoading = false;
  }

  private setDarkTheme (weatherForecast: WeatherForecast): void {
    const time: Date = new Date();
    if (weatherForecast && weatherForecast.current) {
      if (time.valueOf() / 1000 < +weatherForecast.current.sunset) {
        document.documentElement.classList.remove('dark');
        console.log('day time');
        this.currentThemeService.setLightTheme();
      } else {
        document.documentElement.classList.add('dark');
        console.log('night time');
        this.currentThemeService.setDarkTheme();
      }
    }
  }
}
