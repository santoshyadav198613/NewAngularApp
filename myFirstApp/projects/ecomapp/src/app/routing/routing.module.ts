import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { MoviesComponent } from '../movies/movies.component';
import { EmployeeComponent } from '../employee/employee.component';
import { EmployeeOnboardingComponent } from '../employee-onboarding/employee-onboarding.component';
import { AddressFormComponent } from '../address-form/address-form.component';
import { MovieAddComponent } from '../movies/movie-add/movie-add.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: 'movies' , component : MoviesComponent },
      { path: 'employee' , component : EmployeeComponent },
      { path: 'onboarding', component :  EmployeeOnboardingComponent},
      {path:'addressForm' , component: AddressFormComponent },
      { path: "movies/:id" , component : MovieAddComponent },
      { path: '' , redirectTo:'onboarding', pathMatch: 'full' }
    ])
  ],
  exports : [RouterModule]
})
export class RoutingModule { }
