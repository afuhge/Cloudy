import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HeaderModule} from './components/parts/header/header.module';
import {RouterModule} from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {routes} from './routes';



@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        HeaderModule,
      FontAwesomeModule,
        RouterModule.forRoot(routes),
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
