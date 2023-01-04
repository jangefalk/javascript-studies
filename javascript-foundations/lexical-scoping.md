# What is lexical scoping

```js 
const person = {
  firstName: 'John',
  getName: function() {
    console.log(`My name is ${this.firstName}`)
  }
}

setInterval(person.getName, 1000)
```

Lexical scope is a fundamental part of javascript and means that every new function creates a new scope. This is different from other languages like Java or C# where the scope is determined by the location of the curly braces.

In the example above, the `getName` function is called every second. However, the `this` keyword refers to the `window` object and not the `person` object. This is because the `getName` function is called in the global scope and not in the scope of the `person` object.

To fix this, we can use the `bind` method to bind the `this` keyword to the `person` object.

```js
setInterval(person.getName.bind(person), 1000)
```
lexical scope reference author time of our code and not runtime code

if we want to fix this we can make the getName method return an arrow function because arrow functions do not have their own this keyword

```js 
const person = {
  firstName: 'John',
  getName: function() {
    return () => {
      console.log(`My name is ${this.firstName}`)
    }
  }
}