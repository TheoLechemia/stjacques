import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppConfigService } from './app.config.service';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatFormFieldModule } from '@angular/material/form-field';

import { LightboxModule } from 'ngx-lightbox';

import { FichedetailComponent } from './fichedetail/fichedetail.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthentInterceptor } from './http.interceptor.service';
import { PatriCardComponent } from './patri-card/patri-card.component';
import { MunicipalityComponent } from './municipality/municipality.component';
import { SearchComponent } from './search/search.component';
import { ResultsComponent } from './results/results.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { LocationComponent } from './location/location.component';

@NgModule({
  declarations: [
    AppComponent,
    FichedetailComponent,
    HomeComponent,
    PatriCardComponent,
    MunicipalityComponent,
    SearchComponent,
    ResultsComponent,
    BreadcrumbComponent,
    LocationComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatDividerModule,
    MatIconModule,
    MatCheckboxModule,
    CommonModule,
    MatSelectModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    LightboxModule,
    MatCardModule,
    MatChipsModule,
    MatListModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [AppConfigService],
      useFactory: (appConfigService: AppConfigService) => {
        return () => {
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
