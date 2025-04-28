'use strict';

const Person = function (firstName, birthYear) {
  // Instace properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this, it will create multiples functions with the same inner code
  //   this.calcAge = function(){
  //     console.log(2037 - this.birthYear);
  //   }
};

const jonas = new Person('Jonas', 1991);
const matilda = new Person('Matilda', 2006);
const edgar = new Person('Edgar', 2004);

// Prototypes
Person.prototype.calcAge = function () {
  console.log(2025 - this.birthYear);
};

jonas.calcAge();
edgar.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(edgar));
console.log(Person.prototype.isPrototypeOf(Person));

// .prototypeOfLinkedObjects

Person.prototype.species = 'Homo Sapiens';
console.log(jonas, edgar);
console.log(jonas.species, edgar.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));
