import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {
  public transform (hour: number): string {
    return hour < 12 ? `${hour}:00 am` : `${hour - 12}:00 pm`;
  }

}
