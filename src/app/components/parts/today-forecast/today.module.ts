import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodayComponent } from './today.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    TodayComponent
  ],
  exports: [
    TodayComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class TodayModule { }
