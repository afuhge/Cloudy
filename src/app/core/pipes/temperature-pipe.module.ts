import { NgModule } from '@angular/core';
import { TemperaturePipe } from './temperature-pipe';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [TemperaturePipe],
  imports: [CommonModule],
  exports: [TemperaturePipe],
})
export class TemperaturePipeModule {}
