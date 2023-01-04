# Closures in JavaScript

A clousure is a function that has access to variables in the outer scope. Closures are created when a function is declared inside another function. The inner function has access to the variables in the outer function.

```js
function outer() {
  const name = 'John'
  function inner() {
    console.log(name)
  }
  inner()
}

outer() // John
```

The inner function has access to the `name` variable in the outer function. This is called a closure.

```js

function outer() {
  const name = 'John'
  function inner() {
    console.log(name)
  }
  return inner
}

const innerFunction = outer()

innerFunction() // John
```

The `inner` function is returned from the `outer` function. The `inner` function is still able to access the `name` variable in the outer function. This is because the `inner` function has access to the outer function's scope chain.

```js

function outer() {
  const name = 'John'
  function inner() {
    console.log(name)
  }
  return inner
}

const innerFunction = outer()

innerFunction() // John

outer()() // John
```

A closure is a inner function that has access to its lexical scope. The `inner` function has access to the `name` variable in the outer function. The `inner` function is returned from the `outer` function. The `inner` function is still able to access the `name` variable in the outer function. This is because the `inner` function has access to the outer function's scope chain.

```js

function outer() {
  const name = 'John'
  function inner() {
    console.log(name)
  }
  return inner
}

const innerFunction = outer()

innerFunction() // John

outer()() // John

const innerFunction2 = outer()

innerFunction2() // John
```

