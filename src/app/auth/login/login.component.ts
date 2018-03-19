import { Component } from '@angular/core';
import { AuthService, AppGlobals } from 'angular2-google-login';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

const GOOGLE_CLIENT_ID = "37387862731-8dm3lehhfc67165hp9b6dikdnfo2fbmg.apps.googleusercontent.com";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private googleAuth: AuthService,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit() {
    AppGlobals.GOOGLE_CLIENT_ID = GOOGLE_CLIENT_ID;
    this.googleLogin(); // need to click login btn twice without this call
  }

  googleLogin() {
    this.googleAuth.authenticateUser( success =>{
      if(success) this.apiLogin();
    });
  }

  apiLogin() {
    const url = `${environment.constants.BASE_URL}/auth/signin`;
    const idToken = localStorage.getItem('token');

    this.http.post(url, { idToken }, { headers: { 'Content-Type': 'application/json' } })
      .subscribe(
        user => {
          console.log('success', user);
          this.router.navigate(['/dashboard']);
        },
        e => {
          console.log('error', e);
        }
      )
  }

}
