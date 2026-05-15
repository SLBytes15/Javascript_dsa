// constructor function
/*
    1. always named with capital letters.
    2. and should be executed only with "new" operator.
*/

function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User("alice");

console.log(user.name + user.isAdmin);

// Probably not a good thing to use "new" everywhere
function User1(name) {
  if (!new.target) {
    // if you run me without new
    return new User(name); // ...I will add new for you
  }

  this.name = name;

  this.sayHi = function () {
    console.log("my name is:" + this.name);
  };
}

let john = User1("John"); // redirects call to new User
// john.sayHi();

// By the way, we can omit parentheses after new:

// let user = new User; // <-- no parentheses
// same as
// let user = new User();

// Omitting parentheses here is not considered a “good style”, but the syntax is permitted by specification.

function User2(name) {
  this.name = name;

  this.sayHi = function () {
    console.log("My name is: " + this.name);
  };
}

john = new User2("John");
john.sayHi();




// Task
let obj = {};
function A() { return obj; }
function B() { return obj; }

let a = new A();
let b = new B();

console.log( a == b );


// Task 2 Calculator

function Caluculator() {

    this.read = function(){
        this.num1 = +prompt('num1?',0);
        this.num2 = +prompt('num2?',0);
        
    }
    this.sum = function(){
        return  this.num1 + this.num2;
    }
    this.mul = function(){
        return this.num1 * this.num2;
    }
}

let calculator = new Caluculator();

console.log(calculator.read);

console.log(calculator.sum());
console.log(calculator.mul());

