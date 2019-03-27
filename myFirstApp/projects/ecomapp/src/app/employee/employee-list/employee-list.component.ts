import { Component, OnInit, Input, Output, 
  EventEmitter, OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { IEmployee } from '../employee';

@Component({
  selector: 'ecom-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  encapsulation : ViewEncapsulation.None
})
export class EmployeeListComponent implements OnInit,OnChanges {

  @Input() employeeList : Array<IEmployee>;
  @Output() selectedEmployee = new EventEmitter<IEmployee>();
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void{
    console.log(changes);
  }

  ngOnInit() {
  }

  currentEmployee(employee: IEmployee) {
    this.selectedEmployee.emit(employee);
  }
}
