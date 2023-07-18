import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { HttpWrapperService } from 'src/app/modules/shared/services/http-wrapper/http-wrapper.service';
import { of } from 'rxjs';
import { IAccesToken } from '../../interfaces/access-token.interface';

describe('AuthService', () => {
  let service: AuthService;

  const accessToken:IAccesToken = {
    token: "eyy"
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: HttpWrapperService,
          useValue: {
            post: jest.fn().mockReturnValue(of(accessToken))
          }
        }
      ]
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('test login', ()=>{

    it('sucess login', ()=>{

      service.login({
        email: "",
        password: ""
      }).subscribe( data=>{
        expect(data).toEqual(accessToken)
      })
    })
  })




});
