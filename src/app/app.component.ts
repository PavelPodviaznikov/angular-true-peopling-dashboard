import { Component, OnInit } from '@angular/core';
import * as GoogleAuth from 'angular2-google-login';

const GOOGLE_CLIENT_ID = "37387862731-8dm3lehhfc67165hp9b6dikdnfo2fbmg.apps.googleusercontent.com";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    GoogleAuth.AppGlobals.GOOGLE_CLIENT_ID = GOOGLE_CLIENT_ID;
  }

  title = 'app';
}
