class Car{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    startEngine(){
        console.log(`the ${this.make} ${this.model}'s engine is running.`);
    }
}

const myCar = new Car("Toyota", "Supra", 2022);
myCar.startEngine();



// Object Literals
// stroing individual customer orders
const person = {
  firstName: "Alice",
  lastName: "Johnson",
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(person.getFullName());


// Function Constructors 
// creating instances of objects like "Car"
// adaptable for oops 
