import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
  constructor() { }

  setUser(user) {
    localStorage.setItem('peopling-api-user', JSON.stringify(user));
  }

  getUser() {
    const user = localStorage.getItem('peopling-api-user');

    return JSON.parse(user);
  }

  setAccessToken(token) {
    localStorage.setItem('peopling-api-token',token);
  }

  getAccessToken() {
    return localStorage.getItem('peopling-api-token');
  }

  setGoogleToken(token) {
    localStorage.setItem('peopling-google-token', token);
  }

  getGoogleToken() {
    return localStorage.getItem('peopling-google-token');
  }

  reset() {
    this.setAccessToken('');
    this.setGoogleToken('');
    this.setUser({});
  }
}
