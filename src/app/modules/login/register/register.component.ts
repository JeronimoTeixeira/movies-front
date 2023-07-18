import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth/auth.service';
import { ILogin } from '../interfaces/login.interface';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { ErrorComponent } from '../../shared/components/error/error.component';
import { SuccessComponent } from '../../shared/components/success/success.component';
import { ISuccess } from '../../shared/interfaces/success.interface';

@Component({
  selector: 'movies-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  formRegister: FormGroup

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
    private readonly dialog: MatDialog
  ){
    this.formRegister = new FormGroup({
      emailFormControl: new FormControl('', [Validators.required, Validators.email]),
      senhaFormControl: new FormControl('', [Validators.required])
    });
  }

  onSubmit(){
    const login: ILogin = {
      email: this.formRegister.controls["emailFormControl"].value,
      password: this.formRegister.controls["senhaFormControl"].value,
    }

    this.authService.register(login).subscribe( (response)=>{
      const success: ISuccess = {
        button: "Ok! Entendi.",
        message: "Agora você está cadastrado, parabéns! Vá para a tela de login",
        title: "Cadastro feito com sucesso"
      }
      const dialogRef = this.dialog.open(SuccessComponent, {
        data: success
      });

      dialogRef.afterClosed().subscribe( ()=> this.router.navigate(['']))

    }, (error: HttpErrorResponse)=>{
      this.dialog.open(ErrorComponent, {
        data: error
      });
    })
  }


}
