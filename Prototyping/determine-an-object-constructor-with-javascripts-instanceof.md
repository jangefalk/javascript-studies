# How to determine if a object is intance of

```js

function Person(firstName){
    this.firstName = firstName
}

const person = new Person('John')

console.log(person instanceof Person)  // true
```

The instanceof operator tests whether the prototype property of a constructor appears anywhere in the prototype chain of our object. 

Lets look at something interesting here.

```js

function Car(make){
    this.make = make
}

function Boat(engine){
    this.engine = engine
}

Object.setPrototypeOf(Boat.prototype, Car.prototype)

const myBoat = new Boat('Ford')

console.log(myBoat instanceof Car) // true

```

Since we are setting the prototype of Boat to car here we are delegating the next-in-line prototype chain object.

This goes the ame for classes.


```js

class Car{
    constructor(make){
     this.make = make    
    }
}

class Boat{
    constructor(engine){
     this.engine = engine
    }
}

Object.setPrototypeOf(Boat.prototype, Car.prototype)

const myBoat = new Boat('Ford')

console.log(myBoat instanceof Car) // true

```