// 1. Basic Object Creation
// Create an object car with properties make, model, and year, and a method start() that logs "Engine started".
console.log("Exercise 1");

const Car = {
    make : "Toyota",
    model: "Avalon",
    year: "2015",
    start: function() {
        console.log("Engine started");
    },


    honk: function() {
        console.log("Beep beep!");
    }


};



// Exercise: Add a honk() method above. Make it log "Beep beep!", then call it. ------- DONE
// ------------- (Add it above in the Car object) -------------



/*
// 2. Constructor Functions
// Create a constructor function Person that takes name and age as parameters and assigns them as properties.
console.log("Exercise 2");

function Person(name, age){
    this.name = name;
    this.age = age;
}


// Exercise: Use the Person constructor to create a new user. Save it to the "person1" variable and log the user's name.
let person1 = new Person("Brian","30");
console.log(person1.name);



// Exercise: Add a method greet() to Person using prototype that logs "Hello, my name is [name]", and call it.
Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
};

console.log(person1.greet());
*/


// 3. Prototypal Inheritance
// Create a Vehicle constructor that specifies what kind of vehicle.
console.log("Exercise 3");

function Vehicle(type){
    this.type = type;
};


// Exercise: Add a method describe() to Vehicle prototype that logs "This is a [type]"
Vehicle.prototype.describe = function() {
    console.log(`This is a(n) ${this.type}`);
};


// Exercise: Create an Airplane constructor, specifying make and model.
function Airplane(make,model){
    this.make = make;
    this.model = model;


    Vehicle.call(this,"airplane"); // Added to send back "airplane" to Vehicle for describe()


};



// Exercise: make Airplane inherit from Vehicle
Object.setPrototypeOf(Airplane.prototype, Vehicle.prototype);



// Exercise: Add a function to Airplane that will send the type "airplane" back to Vehicle
// ------------(Complete Above in Airplane constructor)-------------- DONE



// Exercise: create an Airplane object and use the describe function to log out result.
let airplane1 = new Airplane("Boeing", "757");
console.log(airplane1.describe());



// Exercise: Add a method Airplane.prototype.fly() that logs "Clear for takeoff."
Airplane.prototype.fly = function() {
    console.log("Clear for takeoff.");
};



// 4. Object.create()
// Use Object.create() to create an object that inherits from another.
console.log("Exercise 4");

const animal = {
    speak: function() {
        console.log("Some generic animal sound");
    }
};

const dog = Object.create(animal); // Creates an object called "dog" that inherits from "animal" class
dog.speak(); // Output: Some generic animal sound


// Exercise: Override the speak() method in dog to log "Woof!"
dog.speak = function() {
    console.log("Woof!");
};



// 5. ES6 Classes
// Rewrite the Person constructor from Exercise 2 using ES6 class syntax.
console.log("Exercise 5");
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

const p1 = new Person("Bob", 18);
p1.greet(); // "Hello, my name is Bob"


// Exercise: Create a Student class that extends Person and adds a study() method.
class Student extends Person {
    constructor(name, age, subject){
        super(name, age);
        this.subject = subject;
    }

    study() {
        console.log(`${this.name} is studying ${this.subject}`);
    }
};

const s1 = new Student("Brian", 30, "Software Development");
s1.greet();
s1.study();