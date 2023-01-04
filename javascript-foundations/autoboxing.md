# Autoboxing

In javascript we have 7 primitive types that are not objects: `string`, `number`, `boolean`, `null`, `undefined`, `symbol` and `bigint`. But we can use them as objects, for example:

```js

const str = 'hello' // string
console.log(typeof str) // string
console.log(str.toUpperCase()) // HELLO

const num = 1 // number
console.log(typeof num) // number
console.log(num.toFixed()) // 1

const bool = true // boolean
console.log(typeof bool) // boolean
console.log(bool.valueOf()) // true

const nul = null // null
console.log(typeof nul) // object

const undef = undefined // undefined
console.log(typeof undef) // undefined

const sym = Symbol('hello') // symbol
console.log(typeof sym) // symbol

const bigInt = 1n // bigint
console.log(typeof bigInt) // bigint

```

Autoboxing is happening when we treat a primitive type as an object. When we call a method on a primitive type, javascript will create a temporary object to call the method and then destroy it. This is called autoboxing.

So for example when we call .toString on a number, javascript will wrap the numer in a number object and therefore we can call the method. After that, the object will be destroyed.

Autoboxing = we treat a primitive type as an object in Javascript