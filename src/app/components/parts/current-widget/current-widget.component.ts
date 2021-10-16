import { Component, Input, OnInit } from '@angular/core';
import { ICurrentWeather } from '../../../core/models';

@Component({
  selector: 'app-current-widget',
  templateUrl: './current-widget.component.html',
})
export class CurrentWidgetComponent implements OnInit {

  @Input() day: ICurrentWeather;
  @Input() today: Date;

  constructor() { }

  ngOnInit(): void {
  }

}
