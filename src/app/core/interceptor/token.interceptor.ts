import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token = localStorage.getItem('api-id');

    if (!token) {
      token = this.generateToken();
      localStorage.setItem('api-id', token)
    };

    request = request.clone({
      setHeaders: {
        'app-id': token
      }
    });
    
    return next.handle(request);
  };

  private generateToken(): string {
    return environment.token
  };
}
