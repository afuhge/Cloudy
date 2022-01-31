import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherForecast } from '../../../core/models';
import { ShowCurrentWeatherDetailsService } from '../../../services/show-current-weather-details.service';
import { CurrentThemeService } from '../../../services/current-theme.service';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.scss']
})
export class WeatherForecastComponent {
  @Input() public weatherForecast: WeatherForecast;
  public today: Date = new Date();
  public isDark: boolean;

  constructor (
    private router: Router,
    private showDetailsService: ShowCurrentWeatherDetailsService,
    public currentThemeService: CurrentThemeService,
  ) {
    currentThemeService.isDarkTheme$.subscribe((isDarkTheme: boolean) => {
      this.isDark = isDarkTheme;
    });
  }

  public showTodayDetails (): void {
    this.showDetailsService.show();
  }
}
