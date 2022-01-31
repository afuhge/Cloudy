import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentWidgetComponent } from './current-widget.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TemperaturePipeModule } from '../../../core/pipes';

@NgModule({
  declarations: [
    CurrentWidgetComponent,
  ],
  exports: [
    CurrentWidgetComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    TemperaturePipeModule,
  ],
})
export class CurrentWidgetModule {}
