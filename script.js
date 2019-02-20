/**
 * Concepts: let and const
 */

//ES5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Jones';
// console.log(name5);

//ES6
const name6 = 'Jane Smith';
let age6 = 23;

//ES5
function driversLicence5(passedTest) {
  if (passedTest) {
    var firstName = 'John';
    var yearOfBirth = 1990;
  }
  console.log(`Name: ${firstName} DOB: ${yearOfBirth}`);
}

driversLicence5(true);

//ES6 variables have block scope
function driversLicence6(passedTest) {
  let firstName;
  const yearOfBirth = 1990;
  if (passedTest) {
    firstName = 'John';
    console.log(`Name: ${firstName} DOB: ${yearOfBirth}`);
  }
}

driversLicence6(true);

// Block Scoped variables , separate, even with the same name
let i = 23;
for (let i = 0; i < 5; i++) {
  console.log(i); // 0,1,2,3,4
}

console.log(i); // 23

/**
 * Concepts: Blocks and IIFEs
 */

{
  const a = 1;
  let be = 2;
  var c = 3;
}

// console.log(a + b);  // a = undefined

/**
 * Concepts: Strings
 */

let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = '2000';
function calcAge(year) {
  return 2019 - year;
}

// ES5
console.log(
  'This is ' + firstName + ' ' + lastName + ' Age: ' + calcAge(yearOfBirth)
);

// ES6
console.log(
  `This is ${firstName} ${lastName} and he is ${calcAge(yearOfBirth)} years old`
);

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J'));
console.log(n.endsWith('h'));
console.log(n.includes(' '));
