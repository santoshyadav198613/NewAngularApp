import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { EmployeeComponent } from '../employee/employee.component';
import { EmployeeOnboardingComponent } from '../employee-onboarding/employee-onboarding.component';
import { AddressFormComponent } from '../address-form/address-form.component';
import { MaterialTableComponent } from '../material-table/material-table.component';
import { AuthGuard } from '../auth.guard';
import { LoginComponent } from '../login/login.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: 'login', component : LoginComponent },
      { path: 'movies', loadChildren: '../movies/movies.module#MoviesModule', canLoad: [AuthGuard] },
      { path: 'employee', component: EmployeeComponent, canActivate:[AuthGuard] },
      { path: 'onboarding', component: EmployeeOnboardingComponent },
      { path: 'addressForm', component: AddressFormComponent },
      { path: 'table', component: MaterialTableComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' }
    ])
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
