import { TestBed } from '@angular/core/testing';

import { HttpWrapperService } from './http-wrapper.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('HttpWrapperService', () => {
  let service: HttpWrapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: HttpClient,
          useValue: {
            get: jest.fn().mockReturnValue(of("GET")),
            post: jest.fn().mockReturnValue(of("POST"))
          }
        }
      ]

    });
    service = TestBed.inject(HttpWrapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  describe('test get', ()=>{

    it('success', ()=>{

      service.get("").subscribe( data=>{
        expect(data).toEqual("GET")
      })
    })

  })

  describe('test post', ()=>{

    it('success', ()=>{

      service.post("", {}).subscribe( data=>{
        expect(data).toEqual("POST")
      })
    })

  })

});
