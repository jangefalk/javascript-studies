# This keyword within prototypes

```js 
function Person(firstName){
    this.firstName = firstName
}

Foo.prototype.myFirstName = function(){
    return this.firstName
}

function PersonCalling(firstName){
    Person(firstName)
}

const a = new PersonCalling('John')
console.log(a.myFirstName())  // a.myFirstName is not a function
```

Here we are demonstrating some problems. Since myFirstName lives on the prototype object myFirstName is undefined. Now these two prototypes are not linked together on the chain. 

However we can fix that by running 
```js 
PersonCalling.prototype = Object.create(Person.prototype)

const person = new PersonCalling('John');
console.log(person.myFirstName())
```

We now have them linked together however myFirstName will still return undefined.

If we also would add 'use strict' at the top of this we would get a lot of errors. That is because the use strict is making sure our this context is not undefined or pointed at the global scope.

```js 
'use strict'

function Person(firstName){
    this.firstName = firstName
}

Foo.prototype.myFirstName = function(){
    return this.firstName
}

function PersonCalling(firstName){
    Person.call(this, firstName)
}

PersonCalling.prototype = Object.create(Person.prototype)
const a = new PersonCalling('John')
console.log(a.myFirstName())  // John
```

This is happening just because now we are controlling the this context within the Person function by passing the this context through from the personCalling function with the call method and passing this.