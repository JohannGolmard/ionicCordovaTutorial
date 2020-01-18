import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesServiceService {

  constructor(private http: HttpClient) { }

  getMovies(): Observable<any>{
    let url = "https://raw.githubusercontent.com/SoatGroup/ionic3-movie-app/master/src/assets/api/movies.json";
    return this.http.get(url);
  }
}
