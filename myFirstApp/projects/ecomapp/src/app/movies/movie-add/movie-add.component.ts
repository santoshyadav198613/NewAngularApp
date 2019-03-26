import { Component, OnInit, Input, Output ,EventEmitter } from '@angular/core';
import { IMovie } from '../service/movies';

@Component({
  selector: 'ecom-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.css']
})
export class MovieAddComponent implements OnInit {

  @Input() movie: IMovie = {
    id : 0,
    author : '',
    title : '',
    year : 0
  };

  @Output() addMovie= new EventEmitter<IMovie>();
  constructor() { }

  ngOnInit() {
  }

  saveMovie() {
    this.addMovie.emit(this.movie);
  }

}
