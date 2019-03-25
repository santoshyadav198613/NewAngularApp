let lname: string;

let age: number;

let isValid: boolean = false;

let dob: Date = new Date('13-Mon-2012');

let unionType: string | string[];

unionType = 'test';

unionType = ['s', 's', 'b'];

let empname: any;
// to be used in es2017 and above
let largeNumber: bigint;

console.log(unionType);

let result: [string, boolean];

function tupleDemo(): [string, boolean] {
    return result = ['test', true];
}

let finalResult = tupleDemo();
console.log(finalResult);
finalResult[1];

enum Color { Red, Green, Blue };

let blue = Color.Blue;

type position = 'top' | 'bottom' | 'left' | 'right';

let tooltipPosition: position = 'top';

let employeeList = Array<string>();