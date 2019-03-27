import { Component, OnInit, Input } from '@angular/core';
import { IMovie } from '../service/movies';

@Component({
  selector: 'ecom-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  @Input() movieList : Array<IMovie>;
  constructor() { }

  ngOnInit() {
  }

}
