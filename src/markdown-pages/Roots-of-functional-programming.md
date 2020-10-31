---
title: "Roots of Functional Programming"
date: "2018-12-22"
description: "Implementing some of the core functions used in functional programming"
---

Now that you are aware of [theory of functional programming](/javascript-functional-programming) let's unfold some of the popular methods used in functional programming and see what they do from inside.

### Map()

There couldn't be any better topic to pick first other than _map()_. So what is a _map()_ ?
A `map()` method creates a new array populated with the results of calling a provided function on every element in the calling data. And by data I mean arrays or objects. Now, let's see the implementation of `map()` method

```js
const _ = {}

_.map = function (list, callback) {
  let storage = []
  if (Array.isArray(list)) {
    let length = list.length
    for (let i = 0; i < length; i++) {
      storage.push(callback(list[i], i, list))
    }
  } else {
    for (let keys in list) {
      storage.push(callback(list[keys], keys, list))
    }
  }
  return storage
}

// Example
let obj = { name: "sky", roll: 51 }
let arr = [1, 2, 3]
let callback = function (value, index, list) {
  return value
}
let mapObj = _.map(obj, callback)
console.log(mapObj) //logs ['sky', 51]

let mapArr = _.map(arr, callback)
console.log(mapArr) // [1,2,3]
```

Why we use map over regular `for` is because we do not want to mutate data while iterating over it and with map, as it returns a new array of data and also does not affect the actual data that is being used to iterate over.

Here's [link](https://github.com/SskYwaLkeR/map-Function-For-Array-And-Objects/blob/master/index.js) to the above code.

### forEach()

JS forEach method allows you to execute a provided function once for each array element. It calls provided callback once for each element in arrray. I just have genralised it, to be used with objects along with arrays.

```js
const _ = {}
_.each = function (list, callback) {
  if (Array.isArray(list)) {
    for (let i = 0; i < list.length; i++) {
      callback(list[i], i, list)
    }
  } else {
    for (let keys in list) {
      callback(list[keys], keys, list)
    }
  }
}

//Demonstration

let arr = [1, 2, 3]
let obj = {
  person1: "hrishi",
  person2: "skywalker",
}

let cbFunction = function (elements, index) {
  console.log(elements, index)
}

_.each(obj, cbFunction) //logs hrishi skywalker along with person1 and person2
_.each(arr, cbFunction) //logs 1 2 3 and 0 1 2 (indexes)
```

[Github link](https://github.com/SskYwaLkeR/iterables/blob/master/index.js) for the above code.

### .reduce()

The reduce method result in single value output, using a **reducer** (that we provide) function on each element.

```js
let reduce = function (list, callback, initialValue) {
  let memo = initialValue
  let length = list.length
  for (let i = 0; i < length; i++) {
    if (i === 0 && memo === undefined) {
      memo = list[0]
    } else {
      memo = callback(list[i], memo)
    }
  }
  return memo
}

//Demonstration
reduce([1, 2, 3, 4], (v, sum) => v + sum, 0) // logs 10
```

[Github link](https://github.com/SskYwaLkeR/reduce/blob/master/index.js) for the above code.
