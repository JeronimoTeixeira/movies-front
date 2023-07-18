import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { TokenService } from '../services/token/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor(
    private readonly router: Router,
    private readonly tokenService: TokenService
    ){
  }

  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot):  boolean {
    const token = this.tokenService.getAuthorizationToken();
    if(token){
      return true;
    }
    else{
      this.router.navigate([''])
      return false;
    }
  }
  
}