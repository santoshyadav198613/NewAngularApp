import { Component, OnInit, OnDestroy } from '@angular/core';
import { MovieService } from './service/movie.service';
import { IMovie } from './service/movies';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'ecom-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
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

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    // this.movieService.getMovies().
    //   subscribe((data) => this.movies = data);
    this.movies$ = this.movieService.getMovies();

  }

  saveMovie(movie: IMovie) {
    this.subscription = this.movieService.saveMovie(movie)
      .subscribe((data) => console.log(data));
  }


  ngOnDestroy() {
    }

}
