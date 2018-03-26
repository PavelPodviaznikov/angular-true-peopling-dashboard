import { Injectable, NgZone } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import User from '../_common/models/user.model';
import ApiUser from '../_common/interfaces/api-user.interface';
import { LocalStorageService } from '../_common/services/local-storage.service';

interface responseData {
  data: {
    user: ApiUser
  }
}

@Injectable()
export class AuthService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private ls: LocalStorageService,
    private zone: NgZone
  ) { }

  private user: User;

  set activeUser(user) {
    this.user = user;
  }

  get activeUser() {
    return this.user;
  }

  get isLoggedIn() {
    return this.ls.getAccessToken();
  }

  login() {
    const url = `${environment.constants.BASE_URL}/auth/signin`;
    const idToken = this.ls.getGoogleToken();

    this.http.post<responseData>(url, { idToken })
      .subscribe(
        response => this.onLoginSuccess(response),
        error => this.onLoginFail(error)
      );
  }

  logout() {
    this.ls.reset();
    this.router.navigate(['login']);
  }

  private onLoginSuccess(response) {
    this.ls.setUser(response.data.user);
    this.ls.setAccessToken(response.data.accessToken);

    this.activeUser = new User(response.data.user);
    this.zone.run(() => this.router.navigate(['dashboard']));
  }

  private onLoginFail(error) {
    // this.ls.resetGoogleUser();
    this.activeUser = null;

    console.log('error', error);
  }
}
