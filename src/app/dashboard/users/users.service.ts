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
  ) {

  }

  users: Array<User> = [];

  filter: Object = {
    value: ""
  };

  loadUsers() {
    const url = `${environment.constants.BASE_URL}/users`;

    this.http.get<responseData>(url)
      .subscribe(response => {
        this.users.length = 0;
        this.users.push(...response.data.map(user => new User(user)));
      });
  }

  saveUser(user) {
    return user.id ?
      this.updateUser(user) :
      this.createUser(user);
  }

  private createUser(user) {
    const url = `${environment.constants.BASE_URL}/users`;

    this.http.post<responseData>(url, user)
      .subscribe(
        response => this.onUserCreateSuccess(response),
        e => this.onUserCreateFail(e)
      );
  }

  private updateUser(user) {
    const url = `${environment.constants.BASE_URL}/users/${user.id}`;

    this.http.put<responseData>(url, user)
      .subscribe(
        response => this.onUserUpdateSuccess(response),
        e => this.onUserUpdateFail(e)
      );
  }
  
  private onUserCreateSuccess(response) {
    debugger;
  }

  private onUserCreateFail(e) {
    debugger;
  }

  private onUserUpdateSuccess(response) {
    debugger;
  }

  private onUserUpdateFail(e) {
    debugger;
  }
}
