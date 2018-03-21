import { Component, OnInit } from '@angular/core';
import { AuthService2 } from '../../auth/auth.service';
import User from '../../_common/models/user.model';
import { LocalStorageService } from '../../_common/services/local-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private auth: AuthService2,
    private localStorage: LocalStorageService
  ) {
    console.log('constructor');
   }

  get user() {
    return this.auth.activeUser;
  }

  ngOnInit() {
    console.log('onInit');
    const user = this.localStorage.getGoogleUser();
    console.log(user);

    if(!user) return;

    this.auth.activeUser = new User(user);
  }

  logout() {
    this.auth.logout();
  }

}
