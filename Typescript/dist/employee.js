"use strict";
class Employee {
    get getName() {
        return this.fname;
    }
    set setName(name) {
        this.fname = name;
    }
    constructor(name, age, city) {
        this.fname = name;
        this.age = age;
        this.city = city;
    }
    getEmployee() {
        return `The age of ${this.fname} is ${this.age}`;
    }
}
const c = new Employee('Test', 45, 'pune');
console.log(c);
class Department extends Employee {
    // method overriding
    getEmployee() {
        return 'test';
    }
}
const d = new Department('New Empl', 56, 'pune');
console.log(d.getEmployee());
//# sourceMappingURL=employee.js.map