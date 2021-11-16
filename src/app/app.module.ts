import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HeaderModule} from './components/parts/header/header.module';
import {RouterModule} from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {routes} from './routes';
import { environment } from '../environments/environment';
import { ENVIRONMENT } from './core/tokens/environment_token';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BaseTodayModule } from './components/base-today/base-today.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
    imports: [
        BrowserModule,
        HeaderModule,
      FontAwesomeModule,
        RouterModule.forRoot(routes),
        HttpClientModule,
        BaseTodayModule,
    ],
  providers: [
    HttpClient,
    {
      provide: ENVIRONMENT,
      useValue: environment,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
