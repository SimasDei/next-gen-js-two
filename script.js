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
console.log(`${n} `.repeat(2));

/**
 * Concept: Arrow Functions
 */

const years = [1998, 1965, 1972, 1937];

// ES5
var ages5 = years.map(function(element) {
  return 2019 - element;
});
console.log(ages5);

//ES6
let ages6 = years.map(element => 2019 - element);
console.log(ages6);

ages6 = years.map(
  (element, index) => `Age element: ${index + 1}: ${2019 - element}`
);
console.log(ages6);

ages6 = years.map((element, index) => {
  const now = new Date().getFullYear();
  const age = now - element;
  return `Age element ${index + 1}: ${age}`;
});
console.log(ages6);

//ES5
var box5 = {
  color: 'green',
  position: 1,
  clickMe: function() {
    var _this = this;
    document.querySelector('.green').addEventListener('click', function() {
      var str =
        'This is box number ' +
        _this.position +
        ' and the color is: ' +
        _this.color;
      alert(str);
    });
  }
};
// box5.clickMe();

//ES6
const box6 = {
  color: 'green',
  position: 1,
  clickMe: function() {
    document.querySelector('.green').addEventListener('click', () => {
      var str =
        'This is box number ' +
        this.position +
        ' and the color is: ' +
        this.color;
      alert(str);
    });
  }
};

// box6.clickMe();
/*
const box66 = {
  color: 'green',
  position: 1,
  clickMe: () => {
    document.querySelector('.green').addEventListener('click', () => {
      var str =
        'This is box number ' +
        this.position +
        ' and the color is: ' +
        this.color;
      alert(str);
    });
  }
};
box66.clickMe();
 */

function Person(name) {
  this.name = name;
}

//ES5
Person.prototype.myFriends5 = function(friends) {
  var arr = friends.map(
    function(element) {
      return this.name + ' is friends with ' + element;
    }.bind(this)
  );
  console.log(arr);
};

var friends = ['Bobby', 'Jennifer', 'Marky-Mark'];

new Person('Jimbo').myFriends5(friends);

//ES6

Person.prototype.myFriends6 = function(friends) {
  const arr = friends.map(element => `${this.name} is friends with ${element}`);
  console.log(arr);
};

var friends = ['Bobby', 'Jennifer', 'Marky-Mark'];

new Person('Fields').myFriends6(friends);
