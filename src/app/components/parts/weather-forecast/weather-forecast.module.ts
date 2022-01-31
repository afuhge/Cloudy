import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherForecastComponent } from './weather-forecast.component';
import { DailyWidgetModule } from '../daily-widget/daily-widget.module';
import { CurrentWidgetModule } from '../current-widget/current-widget.module';

@NgModule({
  declarations: [
    WeatherForecastComponent
  ],
  exports: [
    WeatherForecastComponent
  ],
  imports: [
    CommonModule,
    DailyWidgetModule,
    CurrentWidgetModule
  ]
})
export class WeatherForecastModule {}
