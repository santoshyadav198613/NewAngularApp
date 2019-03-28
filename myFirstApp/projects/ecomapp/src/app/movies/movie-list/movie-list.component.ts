import { Component, OnInit, Input,
ChangeDetectionStrategy } from '@angular/core';
import { IMovie } from '../service/movies';

@Component({
  selector: 'ecom-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class MovieListComponent implements OnInit {

  @Input() movieList: Array<IMovie>;
  constructor() { }

  ngOnInit() {
  }

}
