import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from '../../_common/services/local-storage.service';
import { environment } from '../../../environments/environment';
import  ApiUser from '../../_common/interfaces/api-user.interface';
import User from '../../_common/models/user.model';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { share } from 'rxjs/operators';

interface responseData {
  data: Array<ApiUser>
}

@Injectable()
export class UsersService {
  users$: Observable<Array<User>>;

  filter: Object = {
    value: ""
  };

  private users$$: BehaviorSubject<Array<User>> = new BehaviorSubject([]);

  constructor(
    private http: HttpClient,
  ) {
    this.users$ = this.users$$.asObservable();
  }

  loadUsers() {
    const url = `${environment.constants.BASE_URL}/users`;

    this.http.get<responseData>(url)
      .subscribe(response => {
        this.users$$.next([...response.data.map(user => new User(user))]);
      });
  }

  saveUser(user) {
    user = User.toApiModel(user);

    return user._id ?
      this.updateUser(user) :
      this.createUser(user);
  }

  private createUser(user) {
    const url = `${environment.constants.BASE_URL}/users`;

    const req = this.http.post<responseData>(url, user).pipe(share());
    req.subscribe(
        response => this.onUserCreateSuccess(response),
        e => this.onUserCreateFail(e)
      );
    return req;
  }

  private updateUser(user) {
    const url = `${environment.constants.BASE_URL}/users/${user._id}`;

    const req = this.http.put<responseData>(url, user).pipe(share());
    req.subscribe(
      response => this.onUserUpdateSuccess(response),
      e => this.onUserUpdateFail(e)
    )
    return req;
  }

  private onUserCreateSuccess(response) {
    if(!response.data) return false;
    this.users$$.next([...this.users$$.getValue(), new User(response.data)]);
  }

  private onUserCreateFail(e) {
    console.warn(e);
  }

  private onUserUpdateSuccess(response) {
    const userIdx = this.users$$.getValue().findIndex(user => user.id === response.data._id);

    if (userIdx === -1){
      return;
    }

    const value = this.users$$.getValue()
    this.users$$.next([...value.slice(0, userIdx), new User(response.data), ...value.slice(userIdx + 1, value.length)]);
  }

  private onUserUpdateFail(e) {
    console.warn(e);
  }
}
