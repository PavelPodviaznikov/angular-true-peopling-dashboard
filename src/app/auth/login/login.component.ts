import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { GoogleAuthService } from '../google-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private googleAuth: GoogleAuthService
  ) { }

  ngOnInit() {
    this.googleAuth.init();
  }
}
