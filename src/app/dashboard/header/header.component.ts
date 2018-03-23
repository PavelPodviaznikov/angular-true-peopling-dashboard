import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import User from '../../_common/models/user.model';
import { LocalStorageService } from '../../_common/services/local-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private ls: LocalStorageService
  ) {

   }

  get user() {
    return this.auth.activeUser;
  }

  ngOnInit() {
    const user = this.ls.getUser();

    if(!user || !user.email) return;

    this.auth.activeUser = new User(user);
  }

  logout() {
    this.auth.logout();
  }

}
