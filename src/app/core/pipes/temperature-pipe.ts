import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertUnits'
})
export class TemperaturePipe implements PipeTransform {
  public transform (temperature: string, param?: string): string {
    let temp: number;
    let appendix = '';

    if (!temperature) {
      temp = 0;
    } else {
      temp = +temperature;
    }
    if (param) {
      if (param === 'wind') {
        appendix = ' m/s';
      } else if (param === 'rain') {
        appendix = ' l/m²';
      }
    } else {
      appendix = '°';
    }

    return Math.round(temp) + appendix;
  }
}
