import { Component, Input, OnInit } from '@angular/core';
import { IDailyWeather } from '../../../core/models';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faLocationArrow, faTemperatureHigh, faUmbrella, faWind } from '@fortawesome/free-solid-svg-icons';
import { addDays } from 'date-fns';
import { BaseTodayComponent } from '../../base-today/base-today.component';

@Component({
  selector: 'app-daily-widget',
  templateUrl: './daily-widget.component.html',
})
export class DailyWidgetComponent extends BaseTodayComponent implements OnInit {
  @Input() day: IDailyWeather;
  @Input() index: number;
  @Input() today: Date;

  public icon: string;
  public description: string;
  public tempMax: string;
  public tempMin: string;
  public wind: IconDefinition = faWind;
  public umbrella: IconDefinition = faUmbrella;
  public tempIcon: IconDefinition = faTemperatureHigh;
  public date: Date;
  public windDirection: string;
  public arrow: IconDefinition = faLocationArrow;
  public rain: string;

  public static convertWindDegreeInDirection (windDegree: number): string {
    const val = Math.floor((windDegree / 22.5) + 0.5);
    const arr: string [] = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
    return arr[(val % 16)];
  }

  public ngOnInit (): void {
    if (this.day) {
      if (this.day.weather.length) {
        this.icon = this.day.weather[0].icon;
        this.description = this.day.weather[0].description;
      }
      if (this.day.temp) {
        this.tempMax = `${this.day.temp.max}`;
        this.tempMin = `${this.day.temp.min}`;
      }
      if (this.day.rain) {
        this.rain = this.day.rain;
      }
      this.windDirection = DailyWidgetComponent.convertWindDegreeInDirection(this.day.windDeg);
      this.setWindDirectionClasses();
    }
    this.date = addDays(this.today, this.index + 1);
  }

}
