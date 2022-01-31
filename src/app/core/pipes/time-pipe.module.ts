import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimePipe } from './time-pipe';

@NgModule({
  declarations: [TimePipe],
  imports: [CommonModule],
  exports: [TimePipe],
})
export class TimePipeModule {}
