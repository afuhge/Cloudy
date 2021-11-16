import { Component, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faExclamationTriangle, faLocationArrow, faLongArrowAltDown, faLongArrowAltUp, faSun, faTemperatureHigh, faUmbrella, faWind,
} from '@fortawesome/free-solid-svg-icons';
import { IWeatherAlert } from '../../core/models';

@Component({
  selector: 'app-base-today',
  styleUrls: [`./base-today.component.scss`],
  templateUrl: './base-today.component.html',
})
export class BaseTodayComponent {
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
  public weatherAlert: IWeatherAlert[];
  public alertIcon: IconDefinition = faExclamationTriangle;
  public today: Date = new Date();


  public setWindDirectionClasses(): void {
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
