import {
  Component, OnInit, DoCheck, ViewChild,
  AfterViewInit, ViewChildren, QueryList
} from '@angular/core';
import { IEmployee } from './employee';
import { HeaderComponent } from '../header/header.component';
import { EmployeeService } from './service/employee.service';

@Component({
  selector: 'ecom-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit,
  DoCheck, AfterViewInit {

  @ViewChildren(HeaderComponent) headerChildrenComp:
    QueryList<HeaderComponent>;

  @ViewChild(HeaderComponent) headerComp: HeaderComponent;
  employee: IEmployee;
  empList: Array<IEmployee>;
  name = 'Rajesh';
  department = 'IT';
  isHidden = false;

  className = 'alert alert-danger';
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employee = {
      id: 1,
      name: 'Test',
      email: 'Test@gmail.com',
      address: 'Mumbai'
    };
    this.empList = this.employeeService.getEmployee();
  }

  ngDoCheck(): void {
    console.log('Do check is called');
  }

  ngAfterViewInit() {
    // setTimeout(() => {
    //   this.headerComp.title = "Employee Details";
    // }, 0);

    this.headerChildrenComp.forEach(
      (component: HeaderComponent) => {
        setTimeout(() => {
          component.title = 'Employee Details';
        }, 0);
      });


  }

  toggleDiv() {
    this.isHidden = !this.isHidden;
  }

  update(event) {
    console.log(event);
  }

  receiveEmployee(employee: IEmployee) {
    this.employee = employee;
  }

}
