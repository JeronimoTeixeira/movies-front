import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpWrapperService } from 'src/app/modules/shared/services/http-wrapper/http-wrapper.service';
import { IMovies } from '../../interfaces/movies.interface';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private readonly httpWrapperService: HttpWrapperService) { }


  getPopularMovies(): Observable<IMovies[]>{
    return this.httpWrapperService.get("/popular-movie");
  }


}
