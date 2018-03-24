import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { DashboardModule } from './dashboard/dashboard.module';
import router from './app.router';
import { AuthGuard } from './guard/auth.guard';
import { SharedModule } from './_common/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppHttpInterceptor } from './_common/services/http.interceptor';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AuthModule,
    DashboardModule,
    NoopAnimationsModule,
    router
  ],
  exports: [],
  providers: [ 
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: AppHttpInterceptor, multi: true }
   ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
