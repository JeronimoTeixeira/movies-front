import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { AuthService } from '../services/auth/auth.service';
import { TokenService } from '../../shared/services/token/token.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { of, throwError } from 'rxjs';
import { IAccesToken } from '../interfaces/access-token.interface';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  let mockLoginMethod = jest.fn();
  let mockSetAccessTokenMethod = jest.fn();
  let mockOpenDialogMethod = jest.fn();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [LoginComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {
          provide: AuthService,
          useValue: {
            login: mockLoginMethod
          }
        },
        {
          provide: TokenService,
          useValue: {
            setAccessToken: mockSetAccessTokenMethod
          }
        },
        {
          provide: Router,
          useValue: {
            navigate: jest.fn()
          }
        },
        {
          provide: MatDialog,
          useValue: {
            open: mockOpenDialogMethod
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('test onSubmit', ()=>{

    it('success onSubmit', ()=>{
      component.formLogin.controls["emailFormControl"].setValue("teste@gmail.com")
      component.formLogin.controls["senhaFormControl"].setValue("senha")

      const accessToken:IAccesToken = {
        token: "eyy"
      }

      mockLoginMethod.mockReturnValue(of(accessToken))
      component.onSubmit()

      expect(mockSetAccessTokenMethod).toHaveBeenCalledWith(accessToken.token)

    })

    it('error onSubmit', ()=>{
      component.formLogin.controls["emailFormControl"].setValue("teste@gmail.com")
      component.formLogin.controls["senhaFormControl"].setValue("senha")

      mockLoginMethod.mockReturnValue(throwError("ERROR"))
      component.onSubmit()

      expect(mockOpenDialogMethod).toHaveBeenCalled();
    })

  })


});
