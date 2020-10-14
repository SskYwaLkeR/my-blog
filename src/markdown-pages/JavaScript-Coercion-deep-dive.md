---
title: "JavaScript Coercion a deep dive"
date: "2019-01-03"
description: "Understand the concept of JS coercion"
---

I'm pretty sure being in JavaScript community you might have come across the term **coercion** a lot of time. And you might have even got into problem because of it, or you might have question what it is, why it exits, what's its purpose how it works. I know I have them too So why not take a deeper look into it and answer some of our common question learn some tips and tricks around it.

### Ok, what is coercion?

Type coercion is automatic conversion of values from one data type to anonther. There are two types of coercion (we say) in JavaScript.

- Explicit coercion
- Implicit coercion

_**Explicit coercion**_ is when we try to convert a value of one type into another. When writing Js code we do it often time to ensure it does not introduce any bug in our app. For example :

```js
function formData(age) {
  const age = Number(age) //we are trying to explicitly convert age to number
  const agePlus10 = age + 10
  console.log(`your age after 10 years will be  ${agePlus10}`)
}
```

_**Implicit coercion**_ is when the compiler automatically assigns the data types. It happens when you apply operators to value of different types, or it can happen due to sorrounding context `if(value)` where value is coerced to `Boolean` . For example :

```js
var rollNo = 51
var rollNo2 = 51 + "" // implicit coercion where Js complier will convert rollNo2 to "51" a string type
```

### Why it even does coercion? Why it exists

To make web a beautifull place to be at

Its something about the language design, JavaScript was meant to be more forgiving for the common mistakes that we as a developer do , more loved and adapted language and to maintain that language designer implemeted some of these concepts. its because of this intent of designer that we are able to do some of things that is not even imaginable in other laguage so easily. like `"2" + 1` trust me knowingly or unknowingly you have used this so many times. Should I remind you when ? How many time while taking input from a form you cared for the fact that a users input can be a string instead of a number that you expect, Js instead of screaming hey you did mistake why would you add 1 to a string type number, it be more generous and does the coercion automatically for you. And here in this perticular case its helpful too. Some of you coming from strongly typed language might prefer hey just scream, what's wrong is wrong. I get that I understand but there are atleast if not 100 millions of website that's using this _feature_ of JS and if suddenly we induce this into the language just imagine those website going down and not working its a problem. So what's the solution then

the best solution will be that we understand it properly and work around this _functionality_ of js

> Implicit type coercion is double edge sword, it can frustrate us as well as allow us to write less code which is more readible.

### How the conversion happens

If you look into [EcmaScript specification](https://www.ecma-international.org/ecma-262/5.1/#sec-9), you will find there are various rule that govern how values become either `String`, `Boolean`, or `Number` type. But here we will look into few of them :

- **toString**
- **toBoolean**
- **toNumber**

and also _toPrimitive_ method.

### toString

toString abstract operation is used to coerce a non-string value to string type. `+` operator prefer string coercion if either of side is string. Moreover _Unary + operator_ will prefer **toNumber** hence it converts a string to number if used before string.

```js
var a = 5 + "5"
typeof a // "55" string type

var b = +"5"
typeof b // 5 number type
```

All primitve types are converted to string type naturally except for few cases.

```js

[] // " "
[1,2,3] // "1,2,3"
1 // "1"
[, , , , ] // ", , ,"
true // "true"
-5 // "-5"

```

Edge cases and gotchas:

<!-- prettier-ignore-start -->

```js
[null, undefined] // ","
-0 // "0"
```
<!-- prettier-ignore-end -->

### toNumber

If any non number value is used in a way that requires it to be number, then toNumber abstract operation is triggered.

> If you are curious about what abstract operation means, it means "internal-only operation"

Example:

<!-- prettier-ignore-start -->

```js
"0" // 0
"" // 0
"-0" // 0
"007" //7
"0." // 0
".0" // 0
"." // NaN
false // 0
true // `
null // 0
undefined // NaN
[""] //0
[undefined] // 0
["-0"] // -0
[null] //0
[1,2,3] // NaN

```
<!-- prettier-ignore-end -->

### toBoolean

Anytime any value that's not boolean but needs to be boolean, then _toBoolean_ abstract operation is triggered.

```js
// FALSY

" "
0,-0
null
NaN
false
undefined

// TRUTHY

[]
{}
```

### toPrimitive

toString and toNumber operation goes through toPrimitive abstract operation. It takes an input and an _optional argument_ **PreferredType**, and converts its input argument to a non Object type.

The algo is recursive so if ToPrimitive doesn't give a primitive type it will recursively call untill it gets one or an error.

The algo works in following way:

1. If input is primitive, do nothing return it.
2. Call `input.toString()`, if the result is primitive return it.
3. Call `input.valueOf()`, if the result is primitive return it.
4. If neither of them results in primitive throw _Error_.

Numeric conversion first calls `valueOf()` with a fallback to `toString()`. While String conversion does the opposite: `toString()` followed by `valueOf()`.

```js
undefined //no conversion
null // no conversion
Boolean // no conversion
Number // no conversion
String // no conversion
Object // return a default value for object.
```

For Array and Objects `valueOf()` return itself (_this_) so it ignores `valueOf` and directly goes to `toString()`.

### A cool example

```js
Number.prototype.valueOf = function () {
  return 5
}

new Number(1) == 5 //true
```

**HOW??** , here in this case `1 == 5` would have worked just fine without any problem (ofcourse the output would be false too) but just because we used `Number(1)` it has to go through the `toPrimitive` and thus invoke valueOf() which returns 5 and hence `true`.

> The point of this example was just to give you an idea(flow) of how conversion happens 😬.

So that's pretty much about javascript coercion that I have to say. Hope you get some good idea about it.

### Referece

1. [Kyle Simpson's book - You don't know JS](https://leanpub.com/ydkjsy-get-started).
2. [Ecma script docs](https://www.ecma-international.org/ecma-262/5.1/#sec-9.1).
3. [An amazing blog about it](https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839/)
