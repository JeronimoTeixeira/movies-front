import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  setAccessToken(token:string){
    localStorage.setItem('token',token)
  }

  getAuthorizationToken(){
    const token = localStorage.getItem('token')
    return token;
  }
  
}
