# Link to other object through prototype chain in Javascript

When working with objects in Javascript it gives us the possibility to work with key and value pairs. For example if we would create a person with first and lastname we are working with keys and values

```js

var person = {
  firstName: 'John'
}

console.log(person.firstName) // John
```

If we would try to log out properties that does not exist we would get an undefind value like 

```js

var person = {
  firstName: 'John'
}

console.log(person.lastName) // undefined
```

However if we would like to run an ``` .toString ``` on that object we would not get an undefined but. We would get an object back for that. 
How that that work?

That is because the ``` .toString ``` lives on the property chain in Javascript.

```js

var person = {
  firstName: 'John'
}

console.log(person.toString) // [object Object]
```

## Property chain
When working with Javascript it only has one construct and that is: Objects. Each object has a private property which then holds a link to another object which is the prototype.


## Linking objects to each other with Javascript 

```js

var person1 = {
  firstName: 'John'
}

var person2 = {
  lastName: 'Doe'
}

Object.setProtoTypeOf(person1, person2)

console.log(person1.lastName) // Doe
```

Here we have linked one object to another object through the prototype chain and therefore we can see that person1 has also access to the lastName.

So for example of functions like ``` .toString(), .hasOwnProperty(), .constructor() ``` it all lives on the property chain of the object.


![ProtoTyping](images/prototyping.png "ProtoTyping")

