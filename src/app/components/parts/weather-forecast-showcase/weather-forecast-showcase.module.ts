import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherForecastShowcaseComponent } from './weather-forecast-showcase.component';

@NgModule({
  declarations: [
    WeatherForecastShowcaseComponent
  ],
  exports: [
    WeatherForecastShowcaseComponent
  ],
  imports: [
    CommonModule
  ]
})
export class WeatherForecastShowcaseModule {}
