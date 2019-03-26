import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee';

@Component({
  selector: 'ecom-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employee: IEmployee = {
    id: 1,
    name: 'Test',
    email: 'Test@gmail.com',
    address: 'Mumbai'
  };

  empList : Array<IEmployee> = [
    {
      id: 1,
      name: 'Test',
      email: 'Test@gmail.com',
      address: 'Mumbai'
    },
    {
      id: 2,
      name: 'Test2',
      email: 'Test2@gmail.com',
      address: 'Mumbai'
    },
    {
      id: 3,
      name: 'Test3',
      email: 'Test3@gmail.com',
      address: 'Mumbai'
    }
  ];
  name = 'Rajesh';
  department = "IT";
  isHidden = false;
  constructor() { }

  ngOnInit() {
  }

  toggleDiv() {
    this.isHidden = !this.isHidden;
  }

}
