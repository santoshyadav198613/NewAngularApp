import { NgModule } from '@angular/core';
import { RouterModule  } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieAddComponent } from './movie-add/movie-add.component';
import { MoviesearchPipe } from './moviesearch.pipe';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from '../auth.guard';

@NgModule({
  declarations: [
    MoviesComponent,
    MovieListComponent,
    MovieAddComponent,
    MoviesearchPipe,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: MoviesComponent , canActivate: [AuthGuard],
      children: [
        { path: ':id', component: MovieAddComponent },
        { path: 'edit/:id', component: MovieAddComponent }
      ] },
    
    ]),
    FormsModule
  ]
})
export class MoviesModule { }
