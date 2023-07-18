import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth/auth.service';
import { ILogin } from '../interfaces/login.interface';
import { IAccesToken } from '../interfaces/access-token.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { TokenService } from '../../shared/services/token/token.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ErrorComponent } from '../../shared/components/error/error.component';

@Component({
  selector: 'movies-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent{
  formLogin: FormGroup

  constructor(
    private readonly authService: AuthService,
    private readonly tokenService: TokenService,
    private readonly router: Router,
    private readonly dialog: MatDialog

  ){
    this.formLogin = new FormGroup({
      emailFormControl: new FormControl('', [Validators.required, Validators.email]),
      senhaFormControl: new FormControl('', [Validators.required])
    });
  }
  
  onSubmit(){
    const login: ILogin = {
      email: this.formLogin.controls["emailFormControl"].value,
      password: this.formLogin.controls["senhaFormControl"].value,
    }

    this.authService.login(login).subscribe( (response:IAccesToken)=>{
      this.tokenService.setAccessToken(response.token);
      this.router.navigate(['movies'])
    }, (error: HttpErrorResponse)=>{
      this.dialog.open(ErrorComponent, {
        data: error
      });
    })
  }

  register(){
    this.router.navigate(["/register"])
  }

}
