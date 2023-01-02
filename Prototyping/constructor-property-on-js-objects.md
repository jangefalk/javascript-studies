# Constructor property on JS Objects

When we declare functions in Javascript they are automacially given a property that has a value of an object.

```js

function Person() {}

console.log(Person.prototype) // Person {}
```

When created it only have one accessible property the .constructor property, which will point back to the memory reference location of the function the prototype object was created with.

```js
console.log(Person.prototype.constructor) // [:Person]
```

To demonstrate that we can write this.

```js
const person = new Person()

console.log(person.constructor === Person) // true
```

The constructor here lives on the object through the prototype chain. It can be easy to missunderstand this and think that the constructor is always on the function that created it. 

We can demonstrate this by showing.
```js
Person.prototype = {}

console.log(Person.prototype.constructor) // [:Object]
```

Here our contructor oroperty will return the global object constructor function.

And since we modified it on the prototype the following will not reference the same.

```js
console.log(person.constructor === Person) // false
```
