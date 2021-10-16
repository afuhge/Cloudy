import { Component, Input, OnInit } from '@angular/core';
import {  IDailyWeather } from '../../../core/models';
import { Icon, IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faLocationArrow, faTemperatureHigh, faUmbrella, faWind } from '@fortawesome/free-solid-svg-icons';
import { addDays } from 'date-fns';

@Component({
  selector: 'app-daily-widget',
  templateUrl: './daily-widget.component.html',
  styleUrls: ['./daily-widget.component.scss'],
})
export class DailyWidgetComponent implements OnInit {

  constructor() { }
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
  public windDirectionClasses: any;
  public rain: string;

  private static convertWindDegreeInDirection(windDegree: number): string {
      const val = Math.floor((windDegree / 22.5) + 0.5);
      const arr: string [] = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
      return arr[(val % 16)];
  }

  ngOnInit(): void {
     if (this.day) {
       if (this.day.weather.length) {
         this.icon = this.day.weather[0].icon;
         this.description = this.day.weather[0].description;
       }
       if (this.day.temp) {
         this.tempMax = `${ this.day.temp.max }`;
         this.tempMin = `${ this.day.temp.min }`;
       }
       if (this.day.rain) {
         this.rain = this.day.rain;
       }
       this.windDirection = DailyWidgetComponent.convertWindDegreeInDirection(this.day.windDeg);
       this.setWindDirectionClasses();
     }
     this.date = addDays(this.today, this.index + 1);
  }

  private setWindDirectionClasses(): void {
    this.windDirectionClasses = {
      rotateToSouth: this.windDirection === 'S',
      rotateToSouthEast: this.windDirection === 'SE',
      rotateToSouthSouthEast: this.windDirection === 'SSE',
      rotateToSouthWest: this.windDirection === 'SW',
      rotateToSouthSouthWest: this.windDirection === 'SSW',
      rotateToEast: this.windDirection === 'E',
      rotateToEastNorthEast: this.windDirection === 'ENE',
      rotateToEastSouthEast: this.windDirection === 'ESE',
      rotateToWest: this.windDirection === 'W',
      rotateToWestNorthWest: this.windDirection === 'WNW',
      rotateToWestSouthWest: this.windDirection === 'WSW',
      rotateToNorth: this.windDirection === 'N',
      rotateToNorthNorthEast: this.windDirection === 'NNE',
      rotateToNorthEast: this.windDirection === 'NE',
      rotateToNorthWest: this.windDirection === 'NW',
      rotateToNorthNorthWest: this.windDirection === 'NNW',
    };
  }
}
