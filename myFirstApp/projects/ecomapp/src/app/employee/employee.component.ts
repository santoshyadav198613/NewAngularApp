import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecom-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  name=  'Rajesh';
  department = "IT";
  constructor() { }

  ngOnInit() {
  }

}
