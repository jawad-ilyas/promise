    // firstly we will discuss about how can we simply make promise

    const promiseOne = new Promise((resolve, reject) => {
    setTimeout(function () {
        console.log("promise one function is called ");
    }, 1000);
    });
    // why this function is not called because we dont use the resolve function called into the setTimeoutFunction resolve directly connect with then 
    promiseOne
    .then(function () {
        console.log("async function is called");
    })
    .catch((error) => console.log(error));
