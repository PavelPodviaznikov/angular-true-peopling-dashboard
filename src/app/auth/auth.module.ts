import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import * as GoogleAuth from 'angular2-google-login';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';
import { SharedModule } from '../_common/shared.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule
  ],
  declarations: [ LoginComponent ],
  providers: [ GoogleAuth.AuthService, AuthService ]
})
export class AuthModule { }
