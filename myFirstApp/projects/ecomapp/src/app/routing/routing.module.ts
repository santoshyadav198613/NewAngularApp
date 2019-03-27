import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { EmployeeComponent } from '../employee/employee.component';
import { EmployeeOnboardingComponent } from '../employee-onboarding/employee-onboarding.component';
import { AddressFormComponent } from '../address-form/address-form.component';
import { MaterialTableComponent } from '../material-table/material-table.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: 'movies', loadChildren: '../movies/movies.module#MoviesModule' },
      { path: 'employee', component: EmployeeComponent },
      { path: 'onboarding', component: EmployeeOnboardingComponent },
      { path: 'addressForm', component: AddressFormComponent },
      { path: 'table', component: MaterialTableComponent },
      { path: '', redirectTo: 'onboarding', pathMatch: 'full' }
    ])
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
