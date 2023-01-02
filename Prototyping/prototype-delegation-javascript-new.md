# Prototype delegation with javascript new.

In any object orientated languages like C#, Java etc constructors are special methods that lives on the class. Methods are then added when the ``` new ``` keyword are being used.

Just because javascript also have a new keyword it can be easily comparable to other object orientated languages. However in Javascript it is totally different.

Any function jn javascript can be called with the new keyword.


```js

function Person(firstName) {
  this.firstName = firstName;
}

const person = new Person('John');

console.log(person) // Person { firstName: 'John' }
```

When we are using the new keyword on a function we are expecting that three things will happen.

1. A brand new object is created. A newly constructed object or an alternative object will be returned by the function that was called on.
2. A protptype link is created.
3. This is now directed to the person instance.

```js

function Person(firstName) {
  this.firstName = firstName;
}

const person = new Person('John');

console.log(person.prototype) // {}
```

Our object is now linked to the prototype object. Prototype object are created when functions are declared. 

```js

function Person(firstName) {
  this.firstName = firstName;
}

Person.prototype.firstName = 'John'

console.log(Person.prototype) // Person { firstName: 'John' }
```

Here we can see our empty object with no properties yet. However we can add properties really easily by the prototype chain.

Lets make a more advanced example in how to demonstrate that. 

```js

function Person(firstName) {
  this.firstName = firstName;
  this.lastName = 'Doe';
}

Person.prototype.country = 'Sweden'

console.log(Person.prototype) // Person { firstName: '', lastName = 'Doe' }

const person = new Person('John')

console.log(person.country) // Sweden
```

We can access country on Person just because the linking of the property chain.