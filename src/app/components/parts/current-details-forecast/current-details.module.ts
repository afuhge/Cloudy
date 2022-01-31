import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentDetailsComponent } from './current-details.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TemperaturePipeModule, TimePipeModule } from '../../../core/pipes';

@NgModule({
  declarations: [
    CurrentDetailsComponent
  ],
  exports: [
    CurrentDetailsComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    TemperaturePipeModule,
    TimePipeModule,
  ],
})
export class CurrentDetailsModule {}
