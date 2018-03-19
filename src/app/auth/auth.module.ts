import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../_common/material.module';
import { LogoComponent } from '../_common/_components/logo/logo.component';
import { AuthService } from 'angular2-google-login';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule
  ],
  declarations: [ LoginComponent, LogoComponent ],
  providers: [ AuthService ]
})
export class AuthModule { }
