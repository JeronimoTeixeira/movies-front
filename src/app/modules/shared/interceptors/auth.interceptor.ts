import { Injectable } from '@angular/core';
import {  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token/token.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private readonly tokenService: TokenService){}
  
intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {
    const token = this.tokenService.getAuthorizationToken();
    let request: HttpRequest<any> = req;

    if(token){
        request = req.clone({
            headers: req.headers.set('Authorization', `Bearer ${token}`)
        });
    }
    
    return next.handle(request);
  }
}