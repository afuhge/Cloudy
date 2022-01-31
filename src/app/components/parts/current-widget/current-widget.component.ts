import { Component, Input, OnInit } from '@angular/core';
import { ICurrentWeather, IWeatherAlert } from '../../../core/models';
import { DailyWidgetComponent } from '../daily-widget/daily-widget.component';
import { BaseTodayComponent } from '../../base-today/base-today.component';

@Component({
  selector: 'app-current-widget',
  templateUrl: './current-widget.component.html',
})
export class CurrentWidgetComponent extends BaseTodayComponent implements OnInit {

  @Input() day: ICurrentWeather;
  @Input() alerts: IWeatherAlert[];

  public ngOnInit (): void {
    if (this.day) {
      if (this.day.weather.length) {
        this.icon = this.day.weather[0].icon;
        this.description = this.day.weather[0].description;
      }
      this.currentTemp = this.day.temp;
      this.feelsLike = this.day.feelsLike;
      this.uvi = this.day.uvi;
      this.sunset = new Date((+this.day.sunset) * 1000);
      this.sunrise = new Date((+this.day.sunrise) * 1000);
      this.humidity = this.day.humidity;
      this.windDirection = DailyWidgetComponent.convertWindDegreeInDirection(this.day.windDeg);
      this.setWindDirectionClasses();
    }

    if (this.alerts) {
      this.weatherAlert = this.alerts[1];
    }
  }

}
