import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IEmployee } from '../employee';

@Component({
  selector: 'ecom-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  @Input() employeeList : Array<IEmployee>;
  @Output() selectedEmployee = new EventEmitter<IEmployee>();
  constructor() { }

  ngOnInit() {
  }

  currentEmployee(employee: IEmployee) {
    this.selectedEmployee.emit(employee);
  }
}
