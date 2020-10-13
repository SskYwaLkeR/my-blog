---
title: "Dealing with NaN and negative zero (-0)"
date: "2019-02-4"
description: "Dealing with NaN and negative zero (-0)"
---

How many times we came across so many popular libraries and application and have seen _NaN_, plenty! I know right 😅. Well there is no such way to avoid them because their occurence depends on lot of factor about how you wrote your code. But here let's find out how to test against them properly and some tips and tricks 🙃.

### NaN

NaN is value representing Not-a-number. Its a property of the global object [ according to MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN). It can appear due to various types of operations like `"Cake" / 2` and much more other ways. The intresting part of a _NaN_ is that it ain't even equal to itself, So if you do

```js
NaN == NaN // false
NaN === NaN // false
```

As you can see it returns false when checked against itself.

One of the old way to check if something is NaN was like :

```js
function formInputName(name) {
  if (name != name) {
    // rest of code
  }
}

// Because NaN != NaN -> true
```

But with introduction of `Number.isNaN()` in ES5 checking for NaN became more (descriptive) and robust. It returns `true` if given value is NaN.

> NOTE: there is also one other way of checking NaN i.e `isNaN()` but it has some caveats to it like `isNaN(undefined) //true` so I didn't discuss it here you can see [MDN docs for it](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN).

### Negative Zero

Negative zero (-0) is something that we don't encounter more often in our day to day code, but its something that might come and checking against it is a little bit _tricky_.

```js
var nikeStocks = -0

if (nikeStocks == 0) {
  alertNike()
}
```

Now above code might seems _okay_ to you but there's **problem**, which is `-0 === 0` returns `true`. So how do one test for -0 🤔. One immediate idea that strike my mind is _Hmm_ How about if we do

```js
if (nikeStocks < 0) {
  //rest of code
}
```

But ` -0 < 0` returns `false` (also `-0 > 0` returns same `false`).

So the best option to check for _negative zero_ is by using **`Object.is()`**

```js
Object.is(nikeStocks, -0) // true
```

> Also `Object.is(NaN, NaN)` yields `true` so you can use this method to check for NaN aswell.
