import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from '../../_common/services/local-storage.service';
import { environment } from '../../../environments/environment';

@Injectable()
export class UsersService {
  constructor(
    private http: HttpClient,
    private ls: LocalStorageService,

  ) { }

  loadUsers() {
    const url = `${environment.constants.BASE_URL}/users`;
    const authorization = `Bearer ${this.ls.getAccessToken()}`;

    this.http.get(url, { headers: { "Authorization": authorization } })
      .subscribe(data => {

      });
  }
}
