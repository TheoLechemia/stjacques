import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppConfigService } from './app.config.service';
import {MatIconModule} from '@angular/material/icon';

import { LightboxModule } from 'ngx-lightbox';


import { FichedetailComponent } from './fichedetail/fichedetail.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthentInterceptor } from './http.interceptor.service';

@NgModule({
  declarations: [AppComponent, FichedetailComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, MatIconModule, CommonModule, HttpClientModule, MatInputModule, LightboxModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [AppConfigService],
      useFactory: (appConfigService: AppConfigService) => {
        return () => {
          //Make sure to return a promise!
          return appConfigService.loadAppConfig();
        };
      },
    },
    {
      provide: HTTP_INTERCEPTORS,
      deps: [AppConfigService],
      useClass: AuthentInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
