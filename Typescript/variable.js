var name = 'Amit';

name = 10;

let fname = 'Rajesh';

fname = 10;

const pi = 3.14; //cannot change value

function add(a, b) {
    return a + b;
}

let values = [2, 50, 10, 20];

console.log(add(...values));

const sum = (a, b) => a + b;
console.log(sum(5, 7));

// const getname = (a) => 'Hello' + a;

const getname = (a) => `Hello ${a}`;

console.log(getname('Rohit'));
const sub = (a, b) => {
    if (a === 0 && b === 0) {
        return 0;
    }
    return a - b;
}
// console.log(1 == '1')

// console.log(1+ '1');

// destructuring object 
let emp = {
    name: "Mohit",
    age: 10,
    city: "Chennai"
};

let { name: n, age: a } = emp;
console.log(a);

function spreadadd(...a) {
    console.log(a);
    return a.length;
}
console.log(spreadadd(1, 3, 5));

console.log(spreadadd(1));

console.log(spreadadd(1, 3, 5, 4, 5));
// creating a new object from existing object
let employee = { ...emp, age: 50 };

console.log(employee);

console.log(emp);