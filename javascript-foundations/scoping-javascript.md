# What is the different scopes in Javascript?

block scope in javascript

function scope in javascript

global scope in javascript

lexical scope in javascript


what is the block scope in javascript

```js
const a = 1
{
  const a = 2
  console.log(a) // 2
}
console.log(a) // 1
```

what is the function scope in javascript

```js
const a = 1
function test() {
  const a = 2
  console.log(a) // 2
}
test()
console.log(a) // 1
```

what is the global scope in javascript

```js
const a = 1
function test() {
  console.log(a) // 1
}
test()
console.log(a) // 1
```

what is the lexical scope in javascript

```js
const a = 1
function test() {
  console.log(a) // 1
}
test()
console.log(a) // 1
```

# What is the difference between `let` and `var`?

`var` is scoped to the nearest function block and can be updated and re-declared within its scope; `let` is scoped to the nearest enclosing block and can be updated but not re-declared; `const` is scoped to the nearest enclosing block and can neither be updated nor re-declared.

```js
var a = 1
let b = 1
const c = 1

var a = 2
b = 2
c = 2 // TypeError: Assignment to constant variable.

console.log(a) // 2
console.log(b) // 2
console.log(c) // 1

if (true) {
  var a = 3
  let b = 3
  const c = 3

  var a = 4
  b = 4
  c = 4 // TypeError: Assignment to constant variable.

  console.log(a) // 4
  console.log(b) // 4
  console.log(c) // 3
}

console.log(a) // 4
console.log(b) // 2
console.log(c) // 1
```

# What is the difference between `==` and `===`?

`==` does type coercion and `===` does not.

```js
console.log(1 == '1') // true
console.log(1 === '1') // false
```

# What is the difference between `null` and `undefined`?

`null` is an assignment value