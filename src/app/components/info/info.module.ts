import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './info.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WeatherForecastShowcaseModule } from '../parts/weather-forecast-showcase/weather-forecast-showcase.module';
import { LightThemeShowcaseModule } from '../parts/light-theme-showcase/light-theme-showcase.module';
import { DarkThemeShowcaseModule } from '../parts/dark-theme-showcase/dark-theme-showcase.module';

@NgModule({
  declarations: [
    InfoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: InfoComponent,
      }
    ]),
    FontAwesomeModule,
    WeatherForecastShowcaseModule,
    LightThemeShowcaseModule,
    DarkThemeShowcaseModule
  ],
  exports: [
    InfoComponent,
  ],
})
export class InfoModule {}
