import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentWidgetComponent } from './current-widget.component';



@NgModule({
  declarations: [
    CurrentWidgetComponent,
  ],
  exports: [
    CurrentWidgetComponent,
  ],
  imports: [
    CommonModule,
  ],
})
export class CurrentWidgetModule { }
