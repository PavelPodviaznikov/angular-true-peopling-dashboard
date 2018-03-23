import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';
import { SharedModule } from '../_common/shared.module';
import { GoogleAuthService } from './google-auth.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule
  ],
  declarations: [ LoginComponent ],
  providers: [ GoogleAuthService, AuthService ]
})
export class AuthModule { }
