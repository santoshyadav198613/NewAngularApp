import { Pipe, PipeTransform } from '@angular/core';
import { IMovie } from './service/movies';

@Pipe({
  name: 'moviesearch'
})
export class MoviesearchPipe implements PipeTransform {

  transform(movieList: Array<IMovie>, year: number): Array<IMovie> {
    if (movieList) {
      // var result = movieList.filter((movie) => movie.year > year );
     return  movieList.filter((movie) => movie.year > year);
    }
  }

}
