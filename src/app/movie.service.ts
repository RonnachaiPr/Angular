import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './movieget';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  MovieList: any []=[]
  constructor(private http:HttpClient) { }
  getMoviesWeb():Observable<Movie[]>{
    return this.http.get<Movie[]>('https://638492184ce192ac605bc39a.mockapi.io/Movie/')}
 
  GetMovie(): Movie[]{
    return this.MovieList
  }
}
