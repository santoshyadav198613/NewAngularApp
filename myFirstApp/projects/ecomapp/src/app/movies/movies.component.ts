import { Component, OnInit, OnDestroy, Self } from '@angular/core';
import { MovieService } from './service/movie.service';
import { IMovie } from './service/movies';
import { Subscription, Observable, of } from 'rxjs';

@Component({
  selector: 'ecom-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers: [MovieService]
})
export class MoviesComponent implements OnInit, OnDestroy {

  movies: Array<IMovie>;

  movie: IMovie = {
    id: 0,
    author: '',
    title: '',
    year: 0
  };

  subscription: Subscription;

  movies$: Observable<Array<IMovie>>;

  constructor(@Self() private movieService: MovieService) { }

  ngOnInit() {
    // this.movieService.getMovies().
    //   subscribe((data) => this.movies = data);
    this.movies$ = this.movieService.getMovies();

  }

  saveMovie(movie: IMovie) {
    this.subscription = this.movieService.saveMovie(movie)
      .subscribe((data) => console.log(data));
  }

  changeMovie() {
    this.movies$ = this.getMovies();
  }

  getMovies() {
    return of([
      {
        id: 100,
        author: 'test',
        title: 'test',
        year : 2019
      }
    ]);
  }
  ngOnDestroy() {
    }

}
