# Explicit binding in JavaScript

```js
const person = {
  firstName: 'John',
}

function getName() {
  console.log(`My name is ${this.firstName}`)
}

console.log(getName()) // My name is undefined


 ```

The function is not living inside another object so the `this` keyword refers to the `window` object. We can fix this by using the `bind` method.

```js
const person = {
  firstName: 'John',
}

function getName() {
  console.log(`My name is ${this.firstName}`)
}


const getNameWithPerson = getName.bind(person)

console.log(getNameWithPerson()) // My name is John
 ```

The `bind` method returns a new function with the `this` keyword bound to the `person` object.

## Implicit binding

```js 
const person = {
  firstName: 'John',
  getName: function() {
    console.log(`My name is ${this.firstName}`)
  }
}

person.getName() // My name is John
 ```

The `this` keyword refers to the `person` object because the `getName` function is called on the `person` object.

## Explicit binding

```js

const person = {
  firstName: 'John',
}

function getName() {
  console.log(`My name is ${this.firstName}`)
}

getName.call(person) // My name is John
 ```

The `call` method calls the function and binds the `this` keyword to the `person` object.

the `apply` method is the same as the `call` method but it takes an array as an argument.

```js

const person = {
  firstName: 'John',
}

function getName(firstName, lastName) {
  console.log(`My name is ${this.firstName} ${firstName} ${lastName}`)
}

getName.apply(person, ['Doe', 'Smith']) // My name is John Doe Smith
 ```

## Arrow functions

```js
const person = {
  firstName: 'John',
  getName: function() {
    return () => {
      console.log(`My name is ${this.firstName}`)
    }
  }
}

person.getName()() // My name is John
 ```

Arrow functions do not have their own `this` keyword. They inherit the `this` keyword from the scope they are defined in. In this case, the `this` keyword refers to the `person` object.
