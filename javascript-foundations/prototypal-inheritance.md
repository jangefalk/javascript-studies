# Prototypal inheritance

__proto__ is a property of an object that points to the object's prototype. It is used to implement inheritance in JavaScript.

__proto__ is called a magic property because it is not directly accessible in the code. It is only accessible through the browser's developer tools.

__proto__ is called dunder proto because it is a double underscore followed by proto followed by a double underscore.

whenever we go through objects in JavaScript, we can use the __proto__ property to go to the next object in the prototype chain. This is how we can access properties and methods of objects that are not directly on the object.

It will go through the prototype chain until it finds the property or method that we are looking for.

## What is the difference between __proto__ and prototype?

__proto__ is a property of an object that points to the object's prototype. It is used to implement inheritance in JavaScript.

prototype is a property of a function that points to the prototype of the function. It is used to implement inheritance in JavaScript.

## constructor

```js
const person = {
  name: 'John',
  age: 30
}

console.log(person.constructor) // [Function: Object]
```

The constructor property returns the constructor function of an object.

In the example above, the constructor property returns the Object() constructor function.

## hasOwnProperty()

```js
const person = {
  name: 'John',
  age: 30
}

console.log(person.hasOwnProperty('name')) // true
console.log(person.hasOwnProperty('job')) // false
```

The hasOwnProperty() method returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it).

## isPrototypeOf()

```js
const person = {
  name: 'John',
  age: 30
}

console.log(person.isPrototypeOf(person)) // true
console.log(person.isPrototypeOf({})) // false
```

The isPrototypeOf() method checks if an object exists in another object's prototype chain.

## Object.create()

```js
const person = {
  name: 'John',
  age: 30
}

const john = Object.create(person)

console.log(john.name) // John
console.log(john.age) // 30
```

The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.

## Object.getPrototypeOf()

```js
const person = {
  name: 'John',
  age: 30
}

console.log(Object.getPrototypeOf(person)) // {}
```

The Object.getPrototypeOf() method returns the prototype (i.e. the value of the internal [[Prototype]] property) of the specified object.

## Object.setPrototypeOf()

```js
const person = {
  name: 'John',
  age: 30
}

const john = {
  job: 'developer'
}

Object.setPrototypeOf(john, person)

console.log(john.name) // John
console.log(john.age) // 30
```

The Object.setPrototypeOf() method sets the prototype (i.e., the internal [[Prototype]] property) of a specified object to another object or null.

## propertyIsEnumerable()

```js
const person = {
  name: 'John
