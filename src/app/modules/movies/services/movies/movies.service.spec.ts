import { TestBed } from '@angular/core/testing';

import { MoviesService } from './movies.service';
import { HttpWrapperService } from 'src/app/modules/shared/services/http-wrapper/http-wrapper.service';
import { of } from 'rxjs';
import { IMovies } from '../../interfaces/movies.interface';

describe('MoviesService', () => {
  let service: MoviesService;

  const moviesReponse: IMovies[] = [
    {
      id: "1",
      backdrop_path: "path",
      title: "title",
      overview: "overview",
      vote_count: "1"
    }
  ]

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: HttpWrapperService,
          useValue: {
            get: jest.fn().mockReturnValue(of(moviesReponse))
          }
        }
      ]

    });
    service = TestBed.inject(MoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('test moviesReponse', ()=>{

    it('sucess moviesReponse', ()=>{

      service.getPopularMovies().subscribe( data=>{
        expect(data).toEqual(moviesReponse)
      })
    })
  })
});
