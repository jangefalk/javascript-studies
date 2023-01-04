# Immediately invokes function expressions

IIFEs are a common pattern in JavaScript. They are used to create a new scope for variables and functions. They are also used to create a new scope for the `this` keyword.

IIFFs are created by wrapping a function in parentheses and then calling it immediately.

```js
(function() {
  console.log('Hello world')
})()
```

IIFEs are often used to create a new scope for variables and functions.

```js
(function() {
  const name = 'John'
  function getName() {
    console.log(name)
  }
  getName()
})()
```

When we declare functions in Javascript they are usually put on the global scope. However IIFEs are not put on the global scope. What makes IIFEs special is the initial wrapping in parentheses. This makes the function expression a function declaration. Function declarations are not put on the global scope.

This is called the grouping operator. This makes it an expression because the grouping operator returns whatever is inside of the parens.

```js
const name = 'John'

function getName() {
  console.log(name)
}

getName() // John

(function() {
  const name = 'Jane'
  function getName() {
    console.log(name)
  }
  getName()
})() // Jane
```
