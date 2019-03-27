import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from  '@angular/forms';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { HeaderComponent } from './header/header.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { MovieAddComponent } from './movies/movie-add/movie-add.component';
import { MoviesearchPipe } from './movies/moviesearch.pipe';
import { RoutingModule } from './routing/routing.module';
import { EmployeeOnboardingComponent } from './employee-onboarding/employee-onboarding.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeListComponent,
    HeaderComponent,
    MoviesComponent,
    MovieListComponent,
    MovieAddComponent,
    MoviesearchPipe,
    EmployeeOnboardingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
