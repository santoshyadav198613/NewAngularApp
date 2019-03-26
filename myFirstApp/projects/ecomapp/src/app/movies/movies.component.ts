import { Component, OnInit } from '@angular/core';
import { MovieService } from './service/movie.service';
import { IMovie } from './service/movies';

@Component({
  selector: 'ecom-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movie: IMovie = {
    id: 0,
    author: '',
    title: '',
    year: 0
  };

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getMovies().
      subscribe((data) => console.log(data));
  }

  saveMovie(movie: IMovie) {
    this.movieService.saveMovie(movie)
    .subscribe((data) => console.log(data));
  }

}
