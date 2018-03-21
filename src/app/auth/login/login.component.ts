import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { AuthService2 } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private auth: AuthService2
  ) { }

  ngOnInit() {
    this.googleLogin(); // need to click login btn twice without this call
  }

  googleLogin() {
    this.auth.googleLogin();
  }
}
