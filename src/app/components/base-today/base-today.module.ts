import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseTodayComponent } from './base-today.component';

@NgModule({
  declarations: [
    BaseTodayComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    BaseTodayComponent,
  ],
})
export class BaseTodayModule {}
