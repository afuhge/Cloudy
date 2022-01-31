import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DailyWidgetComponent } from './daily-widget.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TemperaturePipeModule } from '../../../core/pipes';

@NgModule({
  declarations: [
    DailyWidgetComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    TemperaturePipeModule,
  ],
  exports: [
    DailyWidgetComponent,
  ],
})
export class DailyWidgetModule {}
