import { Component } from '@angular/core';
import { EmployeeService } from './employee/service/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `<h1> My first App
  // </h1>`,
  // styles : []
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecomapp';
  role = 'Users';

  constructor(private empService: EmployeeService) { }

  addEmployee() {
    this.empService.addEmployee({
      id: 4, name: 'Test4',
      address: 'Pune',
      email: 'Test5@gmail.com'
    });
  }
}
