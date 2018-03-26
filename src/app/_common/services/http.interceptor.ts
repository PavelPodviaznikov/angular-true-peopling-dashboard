import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';

import { LocalStorageService } from './local-storage.service';

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
    private ls: LocalStorageService
  ) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        "Authorization": `Bearer ${this.ls.getAccessToken()}`,
        "Content-Type": "application/json"
      }
    });

    return next
      .handle(request)
      .pipe(
        catchError(response => {
          if(response instanceof HttpErrorResponse && response.status === 401) {
            this.router.navigate(['login']);
          }

          return Observable.throw(response);
        })
      );
  }
}
