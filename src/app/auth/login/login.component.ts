import { Component } from '@angular/core';
import * as GoogleAuth from 'angular2-google-login';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { AuthService } from '../auth.service';

const GOOGLE_CLIENT_ID = "37387862731-8dm3lehhfc67165hp9b6dikdnfo2fbmg.apps.googleusercontent.com";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private googleAuth: GoogleAuth.AuthService,
    private auth: AuthService
  ) { }

  ngOnInit() {
    GoogleAuth.AppGlobals.GOOGLE_CLIENT_ID = GOOGLE_CLIENT_ID;
    this.googleLogin(); // need to click login btn twice without this call
  }

  googleLogin() {
    this.googleAuth.authenticateUser( success => {
      if(success) this.auth.login();
    });
  }
}
