import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {RouterModule} from '@angular/router';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { CurrentWidgetModule } from '../parts/current-widget/current-widget.module';
import { DailyWidgetModule } from '../parts/daily-widget/daily-widget.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
      },
    ]),
    FontAwesomeModule,
    ReactiveFormsModule,
    CurrentWidgetModule,
    DailyWidgetModule,
  ],
  exports: [
    HomeComponent,
  ]
})
export class HomeModule { }
