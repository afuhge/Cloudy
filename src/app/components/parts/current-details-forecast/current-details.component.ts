import { Component, Input, OnInit } from '@angular/core';
import { ICurrentWeather, IHourlyWeather, IWeatherAlert } from '../../../core/models';
import { DailyWidgetComponent } from '../daily-widget/daily-widget.component';
import { BaseTodayComponent } from '../../base-today/base-today.component';

@Component({
  selector: 'app-current-details',
  templateUrl: './current-details.component.html',
})
export class CurrentDetailsComponent extends BaseTodayComponent implements OnInit {
  @Input() current: ICurrentWeather;
  @Input() hourly: IHourlyWeather[];
  @Input() alerts: IWeatherAlert[];

  public ngOnInit (): void {
    if (this.current) {
      if (this.current.weather.length) {
        this.icon = this.current.weather[0].icon;
        this.description = this.current.weather[0].description;
      }
      this.currentTemp = this.current.temp;
      this.feelsLike = this.current.feelsLike;
      this.uvi = this.current.uvi;
      this.sunset = new Date((+this.current.sunset) * 1000);
      this.sunrise = new Date((+this.current.sunrise) * 1000);
      this.humidity = this.current.humidity;
      this.windDirection = DailyWidgetComponent.convertWindDegreeInDirection(this.current.windDeg);
      this.setWindDirectionClasses();
    }

    if (this.alerts) {
      this.weatherAlert = this.alerts[1];
    }
  }
}
