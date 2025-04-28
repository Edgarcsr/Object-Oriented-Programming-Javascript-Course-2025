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
