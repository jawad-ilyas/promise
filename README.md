# JavaScript Promises and Fetch API Example

This repository contains a simple example of using JavaScript Promises and the Fetch API to handle asynchronous operations in JavaScript.

## How to Run

1. Clone the repository to your local machine.

2. Open the `index.html` file in your browser.

3. Open the browser's developer console to view the output of the JavaScript code.

## Explanation

The `index.html` file includes a JavaScript script with examples of using Promises and the Fetch API.

### Creating a Basic Promise

The first example demonstrates how to create a basic Promise using the `setTimeout` function. However, the initial implementation misses the `resolve()` call inside the `setTimeout` function. As a result, the Promise doesn't get resolved, and the subsequent `then()` block doesn't execute.

```javascript
const promiseOne = new Promise((resolve, reject) => {
  setTimeout(function () {
    console.log("promise one function is called");
  }, 1000);
});

promiseOne
  .then(function () {
    console.log("async function is called");
  })
  .catch((error) => console.log(error));



 To fix this, we need to include the resolve() call inside the ### setTimeout function so that the Promise gets resolved properly.


const promiseOne = new Promise((resolve, reject) => {
  setTimeout(function () {
    console.log("promise one function is called");
    resolve();
  }, 1000);
});

promiseOne
  .then(function () {
    console.log("async function is called");
  })
  .catch((error) => console.log(error));


const promiseOne = new Promise((resolve, reject) => {
  setTimeout(function () {
    console.log("promise one function is called");
    resolve();
  }, 1000);
});

promiseOne
  .then(function () {
    console.log("async function is called");
  })
  .catch((error) => console.log(error));



Creating Promises with Chaining
The next examples show how to create Promises with chaining and handle successful and error responses.



// Example 1: Chaining Promises
new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("promise two");
    resolve("promise two function");
  }, 1000);
}).then(function (response) {
  console.log("i am the inside the then function " + response);
});

// Example 2: Handling Errors in Promises
const promiseThree = new Promise((resolve, reject) => {
  const error = false;
  if (!error) {
    setTimeout(() => {
      console.log("promise three");
      resolve({ username: "jawad", rollNumber: "l1s21bsse0079" });
    }, 100);
  } else {
    reject("Error: promise three error");
  }
});

promiseThree
  .then(function (response) {
    console.log(response);
    return response.username;
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error);
  });



Using Async/Await with Promises
The examples also demonstrate how to use async/await with Promises to write asynchronous code in a more synchronous style.



const promiseFour = new Promise(function (resolve, reject) {
  const error = false;
  if (!error) {
    resolve("jawad");
  } else {
    reject("error");
  }
});

async function consumePromiseFour() {
  try {
    const response = await promiseFour;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFour();

Fetch API Example
Finally, the last example shows how to use the Fetch API to make a simple HTTP request and handle the response using Promises.

fetch("https://api.github.com/users/hiteshchoudhary")
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(typeof error);
  });


This complete README.md file includes all the code examples provided earlier in a single document. Feel free to use it in your project as needed.
