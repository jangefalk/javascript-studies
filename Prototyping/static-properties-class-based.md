# How to assign properties with static on classes

```js 
class Person {
  isLegal() {
    return true
  }
}

console.log(Person.isLegal()) // Is not a function
```

This will cause an error and that is because the isLegal Method is not on the class itself but rather on the prototype object of our class.

For us to call that we will have to use the static keyword. When we are adding the static keyword, it is going to take this property and assign it to the class instead of the prototype of that class 

```js 
class Person {
  static isLegal() {
    return true
  }
}

console.log(Person.isLegal()) // true
```

```js 
class Person {
  static isLegal() {
    return true
  }
}

console.log(Person.isLegal()) // true
```