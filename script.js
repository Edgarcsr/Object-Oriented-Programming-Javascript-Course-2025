'use strict';

// const Person = function (firstName, birthYear) {
//   // Instace properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   // Never do this, it will create multiples functions with the same inner code
//   //   this.calcAge = function(){
//   //     console.log(2037 - this.birthYear);
//   //   }
// };

// const jonas = new Person('Jonas', 1991);
// const matilda = new Person('Matilda', 2006);
// const edgar = new Person('Edgar', 2004);

// // Prototypes
// Person.prototype.calcAge = function () {
//   console.log(2025 - this.birthYear);
// };

// jonas.calcAge();
// edgar.calcAge();

// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(jonas));
// console.log(Person.prototype.isPrototypeOf(edgar));
// console.log(Person.prototype.isPrototypeOf(Person));

// // .prototypeOfLinkedObjects

// Person.prototype.species = 'Homo Sapiens';
// console.log(jonas, edgar);
// console.log(jonas.species, edgar.species);

// console.log(jonas.hasOwnProperty('firstName'));
// console.log(jonas.hasOwnProperty('species'));

// console.log(edgar.__proto__);
// // Object.prototype (top of prototype chain)
// console.log(edgar.__proto__.__proto__);
// console.log(edgar.__proto__.__proto__.__proto__);

// const arr = [1, 2, 3, 4, 5, 6, 7]; // new array === []
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);

// console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique());

// const h1 = document.querySelector('h1');

// Class expression
// const PersonCL = class {}

// Class declaration

class PersonCL {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance Methods
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.fullName}!`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Set property that already exists
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static Methods
  static hey() {
    console.log('Hey there! 👋');
  }
}

const jessica = new PersonCL('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

console.log(jessica.__proto__ === PersonCL.prototype);

// // PersonCL.prototype.greet = function () {
// //   console.log(`Hey ${this.firstName}!`);
// // };

// jessica.greet();

// 1. Classes are NOT hoisted
// 2. Class are first-class citizens
// 3. Classes are executed in strict mode

const walter = new PersonCL('Walter White', 1985);

const account = {
  owner: 'jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;

console.log(account.movements);

PersonCL.hey();
