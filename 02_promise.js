// on other way to make the proimse

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("promise two ");
    resolve("promise two function ");
  }, 1000);
}).then(function (response) {
  console.log("i am the inside the then function " + response);
});
