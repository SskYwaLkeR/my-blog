---
title: "Functional Programming"
date: "2018-11-3"
description: "Basics of javascript"
---

Functional programming is a programming paradigm, its a way of thinking about problem based on some fundamental principles.So what are these _principles_?? basically its a way of building software by composing **pure functions** , avoiding **shared state**, **mutable data** and **side effects**. Its a **declarative** approach rather than **imeprative** one, if I threw too many jargons at you don't worry we'll discuss it later.

### Why Functional Programming

Object oriented javascript is a little bit tricky and has a little bit of learning curve to it like, knowing what is inheritence, what's the prototype (and much much deeper concepts). While functional code on the other hand is more concise, more predictible and easier to debug and test.

### Thinking in functional programming

Express everything in your program as a function. A function (essentially) means that something that takes an input and gives an output. So here we just need to think about the flow of data in our program, how application state will flow through _pure functions_. Instead of like thinking about object, encapsulation or steps to produce outcome.

### _Buzz_ words of functional programming

Functional programming in general is easy but the reason many of us (beginners) is not adapting to, is because of some fancy jargons being sprinkled around the core concept of it. Like

- **Pure Function**
- **Side effects**
- **Function composition**
- **Shared state**
- **Mutability**
- **Higher order function**

Let's have a look into each of them.

### Pure fuction

A pure function is a function that gives same output for same given inputs and has no _side effects_

For Example:

```js
// pure function because here its only using its own input and only thing it does is it return its output
function cheer(name) {
  return `Cheer ${name}`
}

cheer("hrishikesh")
```

### Side effects

Side effects are those things inside a function which are accessing things beyond its scope, or changing things outside scope of the function. For example `console.log` or, if your function uses some globally defined variables to define output ,that function doesn't depend solely on its input its using something outside of it.

```js
// this function is not pure because its using side effects (the global variable) and not its own input to compute value
var name = "hrishikesh"
function cheer() {
  console.log("Cheers" + name)
}
```

> The basic idea here is that your function should take an input and use only that to give output.

### Function Composition

Its process of combining two or more function in order to produce a new function or perform some computation. For example

```js
var person = name => {
  return `Hello' + ${name}`
}
var exclaim = statement => {
  return `${statement.toUpperCase()} !`
}

const cheer = _.compose(person, exclaim)

cheer("Hrishikesh") // Hello HRISHIKESH !
```

### Shared State

Its any variable, object that exist in a shared scope, or as the propety of an object being passed between scopes. Functional programming avoid shared state, it instead depends on immutable data and pure calculation to derive new data from existing one because, the problem with shared state is that in order to understand the effects of a function, you have to know the entire history of every shared variable that the function uses or affects.

### Mutability

Mutable data is any data that can be changed after its been created, while _immutable data_ is just opposite, it can't be (or shouldn't ) be changed after it's created.

Mostly when dealing with objects we use `Object.assign()` or `Object.freeze()` depending on case to create immutable data when dealing with them. And why I took objects as an example is because _Objects_ are _Non primitive type_ so their value is **passed by reference** so any direct action can modify the actual content which is sort of against the law of functional programming and we need to be a lot more careful while using them.

Now it may concern some of you that what about space complexity that we are going to introduce with this concept and to solve this problem various libraries like [mori](http://swannodette.github.io/mori/) have introduced a special data structure _trie_ which use structural sharing to share reference memory location for all parts of the object which are unchanged after an object has been copied by an operator.

> Remember not mutating the data in functional programming

### Higher order function

In JS, functions are values (**first class citizens**). This mean that they can be assigned to variables or can be passed as value. Higher order function are function that takes another function as arguments or return function as their result. Something we see in Function composition above. The best use case of it is that we can create smaller functions that only take care of one piece of logic. Then we can compose more complex functions by using different smaller functions. Or we can use it as utility that can act on wide variety of data types or create a _curried function_.

Good example of these will be `Array.map()`, `_.curry` etc.

### Reference link

1. Here's a link to a good [medium blog](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0) about functional programming.

2. An Excellent talk about functional programming by Anjana Vakil <iframe width="560" height="315" src="https://www.youtube.com/embed/e-5obm1G_FY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
