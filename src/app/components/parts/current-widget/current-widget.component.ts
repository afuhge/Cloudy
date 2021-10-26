import { Component, Input, OnInit } from '@angular/core';
import { ICurrentWeather } from '../../../core/models';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faExclamationTriangle, faLocationArrow, faLongArrowAltDown, faLongArrowAltUp, faSun, faTemperatureHigh, faUmbrella, faWind,
} from '@fortawesome/free-solid-svg-icons';
import { DailyWidgetComponent } from '../daily-widget/daily-widget.component';
import { IAlerts } from '../../../services/models';

@Component({
  selector: 'app-current-widget',
  templateUrl: './current-widget.component.html',
  styleUrls: ['./current-widget.component.scss'],
})
export class CurrentWidgetComponent implements OnInit {

  @Input() day: ICurrentWeather;
  @Input() today: Date;
  @Input() alerts: IAlerts;

  public icon: string;
  public description: string;
  public currentTemp: string;

  public wind: IconDefinition = faWind;
  public umbrella: IconDefinition = faUmbrella;
  public tempIcon: IconDefinition = faTemperatureHigh;
  public arrow: IconDefinition = faLocationArrow;
  public sun: IconDefinition = faSun;
  public up: IconDefinition = faLongArrowAltUp;
  public down: IconDefinition = faLongArrowAltDown;

  public date: Date;
  public windDirection: string;
  public windDirectionClasses: any;
  public rain: string;
  public feelsLike: string;
  public humidity: number;
  public sunrise: Date;
  public sunset: Date;
  public uvi: string;
  public weatherAlert: IAlerts;
  public alertIcon: IconDefinition = faExclamationTriangle;

  constructor() {
  }

  ngOnInit(): void {
    if (this.day) {
      if (this.day.weather.length) {
        this.icon = this.day.weather[0].icon;
        this.description = this.day.weather[0].description;
      }
      this.currentTemp = this.day.temp;
      this.feelsLike = this.day.feelsLike;
      this.uvi = this.day.uvi;
      this.sunset = new Date((
        +this.day.sunset
      ) * 1000);
      this.sunrise = new Date((
        +this.day.sunrise
      ) * 1000);
      this.humidity = this.day.humidity;
      this.windDirection = DailyWidgetComponent.convertWindDegreeInDirection(this.day.windDeg);
      this.setWindDirectionClasses();
    }

    if (this.alerts) {
      this.weatherAlert = this.alerts;
    }
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
