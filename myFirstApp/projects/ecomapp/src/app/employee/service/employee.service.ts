import { Injectable } from '@angular/core';
import { IEmployee } from '../employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  empList: Array<IEmployee>;
  constructor() { }

  getEmployee() {
    this.empList = [
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

    return this.empList;
  }

  addEmployee(employee: IEmployee) {
    this.empList.push(employee);
  }
}
