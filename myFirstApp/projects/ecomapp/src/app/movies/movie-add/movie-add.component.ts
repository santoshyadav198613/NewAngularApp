import { Component, OnInit, Input, Output ,EventEmitter } from '@angular/core';
import { IMovie } from '../service/movies';
import { ActivatedRoute } from '@angular/router';

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
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((data)=> console.log(data.get('id')));
  }

  saveMovie() {
    this.addMovie.emit(this.movie);
  }

}
