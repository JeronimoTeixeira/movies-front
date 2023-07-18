import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { HttpWrapperService } from 'src/app/modules/shared/services/http-wrapper/http-wrapper.service';
import { ILogin } from '../../interfaces/login.interface';
import { Observable } from 'rxjs';
import { IAccesToken } from '../../interfaces/access-token.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private readonly httpWrapperService: HttpWrapperService, 
    ) { }

  login(login: ILogin): Observable<IAccesToken>{
    return this.httpWrapperService.post("/login", login);
  }

}
