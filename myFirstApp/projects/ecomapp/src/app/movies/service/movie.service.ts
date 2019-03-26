import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMovie } from './movies';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  apiEndpoint = 'assets/booklist.json';
  constructor(private http: HttpClient) { }

  getMovies() {
    return this.http.get<Array<IMovie>>(this.apiEndpoint);
  }

  saveMovie(movie: IMovie) {
    return this.http.post<IMovie>('https://jsonplaceholder.typicode.com/posts', movie);
  }

  editMovie(movie: IMovie) {
    return this.http.put('https://jsonplaceholder.typicode.com/posts', movie);
  }

  deleteMovie(movie: IMovie) {
    return this.http.delete('https://jsonplaceholder.typicode.com/posts/' + movie.id);
  }
}
