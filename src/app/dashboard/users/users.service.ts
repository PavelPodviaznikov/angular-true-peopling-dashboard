import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from '../../_common/services/local-storage.service';
import { environment } from '../../../environments/environment';
import  ApiUser from '../../_common/interfaces/api-user.interface';
import User from '../../_common/models/user.model';

interface responseData {
  data: Array<ApiUser>
}

@Injectable()
export class UsersService {
  constructor(
    private http: HttpClient,
    private ls: LocalStorageService,
  ) {

  }

  users: Array<User> = [];

  loadUsers() {
    const url = `${environment.constants.BASE_URL}/users`;
    const authorization = `Bearer ${this.ls.getAccessToken()}`;

    this.http.get<responseData>(url, { headers: { "Authorization": authorization } })
      .subscribe(response => {
        this.users.length = 0;
        this.users.push(...response.data.map(user => new User(user)));
      });
  }
}
