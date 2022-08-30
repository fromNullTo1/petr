'use strict';

const num = new Number(3);
console.log(num); 

const num2 = new Function(3);
console.log(num2); 

function User(name, id) {
  this.name = name;
  this.id = id;
  this.human = true;
  this.hello = function() {
    console.log(`Hello from ${this.name}`)
  }
}

User.prototype.exit = function(name) {
  console.log(`user ${this.name} exit`);
};

const ivan = new User('Ivan', 30);
const alex = new User('Alex', 25);
console.log(ivan);
console.log(alex);
ivan.hello();
ivan.exit();