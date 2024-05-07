import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConfigService } from './app.config.service';

@Injectable({ providedIn: 'root' })
export class AuthentInterceptor implements HttpInterceptor {
  constructor(public configService: AppConfigService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!request.url.includes('config.json')) {
      request = request.clone({
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      });
    }

    return next.handle(request);
  }
}
