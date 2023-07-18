import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MoviesComponent } from './movies.component';
import { MatDialog } from '@angular/material/dialog';
import { MoviesService } from '../services/movies/movies.service';
import { IMovies } from '../interfaces/movies.interface';
import { of, throwError } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('MoviesComponent', () => {
  let component: MoviesComponent;
  let fixture: ComponentFixture<MoviesComponent>;

  let mockOpenDialogMethod = jest.fn();
  let mockGetPopularMovies = jest.fn();

  const moviesReponse: IMovies[] = [
    {
      id: "1",
      backdrop_path: "path",
      title: "title",
      overview: "overview",
      vote_count: "1"
    }
  ]

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoviesComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      providers: [
        {
          provide: MatDialog,
          useValue: {
            open: mockOpenDialogMethod
          }
        },
        {
          provide: MoviesService,
          useValue: {
            getPopularMovies: mockGetPopularMovies
          }
        }
      ]
    }).compileComponents();
    mockGetPopularMovies.mockReturnValue(of(moviesReponse));
    fixture = TestBed.createComponent(MoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  describe('test ngOnInit', ()=>{

    it('success ngOnInit', ()=>{
      mockGetPopularMovies.mockReturnValue(of(moviesReponse));
      component.ngOnInit()
      expect(component.movies).toEqual([{
        ...moviesReponse[0],
        position: 1
      }])
    })

  })


});
