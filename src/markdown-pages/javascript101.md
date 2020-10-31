---
title: "JavaScript 101"
date: "2018-10-10"
description: "Basics of javascript"
---

> Before I write anything I just want to let you know that this is solely my personal understanding of the
> language I might be absolutely wrong about something but hey this is why you and I are here, if you find something
> wrong just file a PR or DM me on [twitter](https://twitter.com/Hrishikeshrai2).

### What is javascript

Short answer, its a programming language.

### Javascript variables

Javascript variables are just a bucket to hold values.

### Data Types

In javascript variables don't have data type, but values do, unlike other programming language where you declare
a variable using some _keyword_ like (int, string etc) in javascript we dont.

Let's have a look into some of the _primitve data type_ in JS.

- `undefinded`
- `String`
- `Number`
- `Boolean`
- `Object`
- `Symbol`
- `BigInt`

  Apart from these we have other data type as well. These are

- `Object`
- `Array` (Sub type of Object)
- `Function` (Sub type of Object)
- `null`

Ok so before you fire PR, let me explain the phrase **_"variables don't have data type but values do"_**

```js
var a
typeof a // undefined
a = 10
typeof a // Number
```

Now the question arise that hey isn't `undefined` a type. Well good question but javascript assigns `undefined` to everything **not defined**. So if you check

```js
typeof c //undefined
```

its undefined even though we didn't even declare it.

### JS type Coercion

Type coercion is process of converting value from one type to another. These are of two types

1. Explicit
2. Implicit

**Explicit** conversion is when you express the intent to convert between types, a good example will be

```js
"I got" + String(80) + "in english"
```

Javascript being _weakly-typed language_ values can also get converted between different types automatically this is known as **Implicit coercion**. For example

```js
"a" + 2 // a2
```

### Boolean

Unline other language JS has two Booleans, I like to call them _truthy_ and _falsy_ instead of `true` or `false`. Now what does _truthy_ or _falsy_ means , let's have a look.

| falsy     | truthy                |
| --------- | --------------------- |
| " "       |                       |
| 0, -0     |                       |
| null      |                       |
| NaN       | &nbsp; Rest of others |
| false     |                       |
| undefined |                       |

### Equality Comparisons

JavaScript has two different value-comparison operations

1. Loose equality comparison `==`
2. Strict equality comparison `===`

**Loose equality comparison** allow coercion but **Strict equality comparison** disallow it, it checks for the type too.

> And I lied to you it has 3 equality comparison operator instead of 2, the new one [object.is](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is) has been added recently but it uses the above two comparison operator inside so I didn't added it in the list 😉.

### Scope

In js _scope_ is current context of execution. Its the place where JS is looking for thing ( _values_ and _expressions_ ) if they are not present inside it will look for outer scope.

### Function expression

Its basically just functioned asiigned as value to some variable.

```js
var handleRequest = function () {}
```

**IIFE** these are _imediately invoked function expression_ that runs as soon as it is defined.

<!-- prettier-ignore-start -->

```js
(function () {
  //your code
})()
```

<!-- prettier-ignore-end -->

_IIFE_ prevents polluting global scope variable.

### Closure

Its a term defined for the case where a function _remembers_ the variables outside of it even if you pass that function elsewhere.

```js
function ask(question){
    return function holdYourQuestion()){
        console.log(question)
    }
}
 var myQuestion = ask('What is closure')

```

It preserves variable of a function to use them at different time of need.

### this

A function's this referrs the execution context fot that call, determined entirely by how the function was called. Therefore, _this_ has dynamic context and can be different each time function is called.

Arrow functions don't provide their own _this_ binding.

> Fun fact with **bind()** we can set the value of _this_ regardless of how its called.

### Prototype

Its an Object where instances are linked to. Or in [mdn's way](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes) a mechanism by which JavaScript object inherit features from one another.

```js
function Person(name) {
  this.name = name
}

Person.prototype.greet = function (phrase) {
  console.log(this.name, phrase)
}

var hrishikesh = new Person("Hrishikesh ")

hrishikesh.greet("Hello 👋") // hrishikesh hello
```

`new` creates object of the constructor function linked with prototype methods. So when a method is created with protoype its going to be linked to every instance of the construnctor

That's it for **javascript101**
