import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface User {
  email: string
}

interface responseData {
  data: {
    user: User
  }
}

@Injectable()
export class AuthService {
  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  private user: User;
  private loggedInStatus = false;

  set activeUser(user) {
    this.user = user;
  }

  get activeUser() {
    return this.user;
  }

  get isLoggedIn() {
    return this.loggedInStatus;
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

  logout() {}

  private getTokenFromLS() {
    return localStorage.getItem('token');
  }

  private onLoginSuccess(response) {
    this.activeUser = response.data.user;
    this.loggedInStatus = true;
    this.router.navigate(['dashboard']);
  }

  private onLoginFail(error) {
    this.loggedInStatus = true;
    this.activeUser = null;

    console.log('error', error);
  }
}
