import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { MoviesComponent } from '../movies/movies.component';
import { EmployeeComponent } from '../employee/employee.component';
import { EmployeeOnboardingComponent } from '../employee-onboarding/employee-onboarding.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: 'movies' , component : MoviesComponent },
      { path: 'employee' , component : EmployeeComponent },
      { path: 'onboarding', component :  EmployeeOnboardingComponent},
      { path: '' , redirectTo:'onboarding', pathMatch: 'full' }
    ])
  ],
  exports : [RouterModule]
})
export class RoutingModule { }
