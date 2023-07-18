import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies/movies.service';
import { IMovies } from '../interfaces/movies.interface';
import { IMoviesPosition } from '../interfaces/movies-position.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorComponent } from '../../shared/components/error/error.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'movies-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  movies: IMoviesPosition[] | undefined = []
  displayedColumns: string[] = ['position', 'title', 'likes'];

  constructor(private readonly moviesService: MoviesService, private readonly dialog: MatDialog){}

  ngOnInit(): void {
    this.getPopularMovies();
  }

  private getPopularMovies(){
    this.moviesService.getPopularMovies().subscribe( (response: IMovies[] )=>{
      this.movies = response.map( (value: IMovies, index: number)=>{
        const moviesPosition: IMoviesPosition = {
          ...value,
          position: index+1
        }
        return moviesPosition;
      }, (error: HttpErrorResponse)=>{
        this.dialog.open(ErrorComponent, {
          data: error
        });
      })
    })
  }

  
}
