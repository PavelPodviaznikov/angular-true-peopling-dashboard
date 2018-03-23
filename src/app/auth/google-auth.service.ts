import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { LocalStorageService } from '../_common/services/local-storage.service';

declare const gapi: any;

const GOOGLE_CLIENT_ID = "37387862731-8dm3lehhfc67165hp9b6dikdnfo2fbmg.apps.googleusercontent.com";

@Injectable()
export class GoogleAuthService {
  constructor(
    private auth: AuthService,
    private ls: LocalStorageService
  ) { }

  public init() {
    gapi.load('auth2', () => {
      gapi.auth2.init({
        client_id: GOOGLE_CLIENT_ID,
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      }).then(auth2 => {
        let loginButton: any = document.getElementById('google-login-button');
        auth2.attachClickHandler(loginButton, {},
          data => this.onAuthSuccess(data),
          e => this.onAuthFail(e));
      });
    });
  }

  public userLogout(callback) {
    //You will be redirected to this URL after logging out from Google.
    let homeUrl = "http://localhost:4200";
    let logoutUrl = "https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=" + homeUrl;
    document.location.href = logoutUrl;
    callback();
  }

  private onAuthSuccess(userDetails) {
    this.ls.setGoogleToken(userDetails.getAuthResponse().id_token);

    this.auth.login();
  }

  private onAuthFail(e) {
    console.warn(e);
  }
}
