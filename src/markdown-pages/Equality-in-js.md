---
title: "Equality (==)"
date: "2019-01-18"
description: "Understanding javascript =="
---

- `==` - Loosely check type.
- `===` - Strictly check type.

Apart from normal value checking both these operators check types and return a `Boolean` result. The `==` and `===` are absolutely equal when types match, What `===` does different is , it checks for type but no matter whats if they are different it returns `false` (no coercion happens). So decision in `==` and `===` is do you allow coercion to happen or not.

- `==` Allow coercion (When types are different).
- `===` Doesn't allow coercion.

### Loose equality operator :

```js
var blog = { topic: null }
var blog2 = {}

if (
  blog.topic === null ||
  (blog.topic === undefined && blog2.topic === null) ||
  blog2.topic === undefined
) {
  //rest of code
}

// Much readable way with ==

if (blog.topic == null && blog2.topic === null) {
  //rest of code
}
```

> It works because null and undefined coercion are same
> `null == undefined // true`

`==` prefers to do numeric coercion, so if something is `boolean` it will coerce it down to numbers. If you want to compare number with string by using `===` you need to do Number(x) on both sides, but for `==` if you know one side is number type then no need to, as it will try to convert string to numeric value.

`==` only compares primitive type, if we use `==` for something that's not primitive it invokes _ToPrimitive()_. So for non primitive make sure that both operands are of same type.

Now that we know how == works, and know about [js coercion](/JavaScript-Coercion-deep-dive/) let's see a popular example and try to explain it.

```js
var roll = 51
var roll2 = [51]

roll == roll2 //true
```

Instead of trolling JS about this, that how a number can ever be equal to an array, if we would have looked at its [specification](https://www.ecma-international.org/ecma-262/5.1/#sec-11.9.3) for it, the story would have been different nevertheless let me explain it to you.

1. roll2 being a non primitive type, due to `==` JS try to coerce it to primitive which yields "51" (as arrays are stringified for coercion)
2. Now `51 == "51"` (again numeric coercion of "51") hence **`true`**.

### AVOID THESE

- `==` with `0` or `""` (or `" "`).
- `==` with non primitives.
- `==` `true` or `==` `false` (its a waste).
- `==` when you are uncertain about the types of operands.

### Prefer == here:

- `==` is for comparison of known types and optionally for situation where coercion is helpful.

> Use === if you are uncertain about the types.

### Reference Links :

1. [Kyle Simpson's book - You don't know JS](https://leanpub.com/ydkjsy-get-started).
2. [EcmaScript specification](https://www.ecma-international.org/ecma-262/5.1/#sec-11.9.3).
3. [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality)
