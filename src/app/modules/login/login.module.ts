import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { appRoutes } from './login.routes';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(appRoutes),
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ]
})
export class LoginModule { }
