import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

baseUrl = "https://localhost:7013/api/Movie/";

  constructor(private http: HttpClient) { }

  getMovieList(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.baseUrl);
  }
  createMovie(movie: Movie){
    return this.http.post(this.baseUrl, movie);
  }

}
