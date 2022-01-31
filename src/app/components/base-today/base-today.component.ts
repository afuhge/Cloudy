import { Component } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faExclamationTriangle,
  faLocationArrow,
  faLongArrowAltDown,
  faLongArrowAltUp,
  faSun,
  faTemperatureHigh,
  faUmbrella,
  faWind,
} from '@fortawesome/free-solid-svg-icons';
import { IWeatherAlert } from '../../core/models';

@Component({
  selector: 'app-base-today',
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
  public windDirectionClass: string;
  public rain: string;
  public feelsLike: string;
  public humidity: number;
  public sunrise: Date;
  public sunset: Date;
  public uvi: string;
  public weatherAlert: IWeatherAlert;
  public alertIcon: IconDefinition = faExclamationTriangle;
  public today: Date = new Date();

  public setWindDirectionClasses (): void {
    switch (this.windDirection) {
      case 'S': this.windDirectionClass = 'rotateToSouth'; break;
      case 'SE': this.windDirectionClass = 'rotateToSouthEast'; break;
      case 'SSE': this.windDirectionClass = 'rotateToSouthSouthEast'; break;
      case 'SW': this.windDirectionClass = 'rotateToSouthWest'; break;
      case 'SSW': this.windDirectionClass = 'rotateToSouthSouthWest'; break;
      case 'E': this.windDirectionClass = 'rotateToEast'; break;
      case 'ENE': this.windDirectionClass = 'rotateToEastNorthEast'; break;
      case 'ESE': this.windDirectionClass = 'rotateToEastSouthEast'; break;
      case 'W': this.windDirectionClass = 'rotateToWest'; break;
      case 'WNW': this.windDirectionClass = 'rotateToWestNorthWest'; break;
      case 'WSW': this.windDirectionClass = 'rotateToWestSouthWest'; break;
      case 'N': this.windDirectionClass = 'rotateToNorth'; break;
      case 'NNE': this.windDirectionClass = 'rotateToNorthNorthEast'; break;
      case 'NE': this.windDirectionClass = 'rotateToNorthEast'; break;
      case 'NW': this.windDirectionClass = 'rotateToNorthWest'; break;
      case 'NNW': this.windDirectionClass = 'rotateToNorthNorthWest'; break;
      default: this.windDirection = 'rotateToSouth;'
    }
  }

}
