import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpWrapperService {

  constructor(private readonly httpClient: HttpClient) { }

  post(
    path: string, 
    body: any, 
    header: HttpHeaders = new HttpHeaders(), 
    params: HttpParams = new HttpParams()
    ): Observable<any>{

    return this.httpClient.post(
      environment.BASE_URL + path,
      body,
      {
        headers: header,
        params: params
      }

      ).pipe(catchError(this.error))

  }

  get(
    path: string,
    header: HttpHeaders = new HttpHeaders(), 
    params: HttpParams = new HttpParams()
    ): Observable<any>{
      
    return this.httpClient.get(
      environment.BASE_URL + path,
      {
        headers: header,
        params: params
      }

    ).pipe(catchError(this.error))

  }

  private error(error:any){
    return throwError(error.error)
  }

}
