import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'ecom-employee-onboarding',
  templateUrl: './employee-onboarding.component.html',
  styleUrls: ['./employee-onboarding.component.css']
})
export class EmployeeOnboardingComponent implements OnInit {

  onboardingForm: FormGroup;
  genders = ['Male','Female'];
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.onboardingForm = this.fb.group(
      {
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        gender: new FormControl(''),
        dob: new FormControl(''),
        address : this.fb.group(
          {
            addressLine1 : new FormControl(''),
            addressLine2 : new FormControl(''),
            city : new FormControl(''),
            pin : new FormControl(''),
          }),
          employment: this.fb.array([
            this.fb.group({
              orgName: new FormControl(''),
              role: new FormControl(''),
              workedFrom: new FormControl(''),
              workedTill: new FormControl('')
            })
          ])
      });
  }

}
