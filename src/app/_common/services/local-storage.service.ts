import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
  constructor() { }

  setGoogleUser(user: Object) {
    localStorage.setItem('googleUser', JSON.stringify(user));
  }

  setAccessToken(token) {
    localStorage.setItem('accessToken',token);
  }

  getAccessToken() {
    return localStorage.getItem('accessToken');
  }

  getGoogleUser() {
    const user = localStorage.getItem('googleUser');

    return user ? JSON.parse(user) : null;
  }

  resetGoogleUser() {
    localStorage.setItem('googleUser', '');
  }

  getGoogleToken() {
    return localStorage.getItem('token');
  }
}
