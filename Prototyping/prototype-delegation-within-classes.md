# Prototype delegation within classes in Javascript

It can be easy to look at classes in Javascript as the same for C# or Java. However it is just syntatic sugar over a regular function. 

If we look what is really happening it still uses the prototype delegation model. 

```js 
class Person {
  isLegal() {
    return true
  }
}

class Human {
  canDoStuff() {
    return this.isLegal()
  }
}
```

This is not working because the isLegal is on the Person class by itself and not on the Human.

if we want this to work we need to use the extends on the class.

```js 
class Person {
  isLegal() {
    return true
  }
}

class Human extends Person{
  canDoStuff() {
    return this.isLegal()
  }
}
```

In other languages properties are being copied from one class to another when using inheritance. In Javascript all of the properties and methods are created on the prototype object of that class.

To check prototypes against eachother we can just simply write

```js 
const myPerson = new Person()
console.log(Object.getPrototypeOf(myPerson) === Person.prototype)  // true

```