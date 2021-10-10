import { Component, OnInit } from '@angular/core';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import {faCloud, faSearch, faTimes} from '@fortawesome/free-solid-svg-icons';
import { WeatherApiServiceService } from '../../services/weather-api-service.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Weather } from '../../core/models';

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
  public city: string;

  constructor(
    private weatherService: WeatherApiServiceService,
  ) { }

  ngOnInit(): void {
    this.city = 'Gladbeck';
  }

  public fetchWeather(): void {
    if (this.searchForm.get('city').value !== '') {
      const city: string = this.searchForm.get('city').value.trim();
      this.weatherService.fetchCurrentWeather(city)
        .subscribe((response: Weather) => {
          console.log(response);
          this.city = response.name;
        });
    }
  }
}
