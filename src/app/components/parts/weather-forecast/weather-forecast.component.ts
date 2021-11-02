import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {WeatherForecast} from '../../../core/models';
import {ShowCurrentWeatherDetailsService} from '../../../services/show-current-weather-details.service';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.scss']
})
export class WeatherForecastComponent implements OnInit {
  @Input() public weatherForecast: WeatherForecast;
  @Input() public today: Date;

  constructor(
    private router: Router,
    private showDetailsService: ShowCurrentWeatherDetailsService,
  ) { }

  ngOnInit(): void {
  }


  public showTodayDetails(): void {
    this.showDetailsService.showDetails.next(true);
  }
}
