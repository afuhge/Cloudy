import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodayComponent } from './today.component';
import {RouterModule} from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TemperaturePipeModule } from '../../../core/pipes';



@NgModule({
  declarations: [
    TodayComponent
  ],
  exports: [
    TodayComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    TemperaturePipeModule,
  ],
})
export class TodayModule { }
