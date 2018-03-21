import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import * as GoogleAuth from 'angular2-google-login';

import User from '../_common/models/user.model';
import ApiUser from '../_common/interfaces/api-user.interface';
import { LocalStorageService } from '../_common/services/local-storage.service';

interface responseData {
  data: {
    user: ApiUser
  }
}

@Injectable()
export class AuthService2 {
  constructor(
    private http: HttpClient,
    private router: Router,
    private googleAuth: GoogleAuth.AuthService,
    private localStorage: LocalStorageService
  ) { }

  private user: User;

  set activeUser(user) {
    this.user = user;
  }

  get activeUser() {
    return this.user;
  }

  get isLoggedIn() {
    return this.localStorage.getGoogleUser();
  }

  googleLogin() {
    this.googleAuth.authenticateUser( success => {
      if(success) this.login();
    });
  }

  login() {
    const url = `${environment.constants.BASE_URL}/auth/signin`;
    const idToken = this.getTokenFromLS();

    this.http.post<responseData>(url, { idToken }, { headers: { 'Content-Type': 'application/json' } })
      .subscribe(
        response => this.onLoginSuccess(response),
        error => this.onLoginFail(error)
      );
  }

  logout() {
    // this.googleAuth.userLogout(()=>{
    //   // this.router.navigate(['login']);
    // });
    this.localStorage.resetGoogleUser();
    this.router.navigate(['login']);
  }

  private getTokenFromLS() {
    return this.localStorage.getGoogleToken();
  }

  private onLoginSuccess(response) {
    this.localStorage.setGoogleUser(response.data.user);
    this.localStorage.setAccessToken(response.data.accessToken);
    this.activeUser = new User(response.data.user);

    setTimeout(() => {
      this.router.navigate(['dashboard']);
    }, 1000);
  }

  private onLoginFail(error) {
    this.localStorage.resetGoogleUser();
    this.activeUser = null;

    console.log('error', error);
  }
}
