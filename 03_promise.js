const promiseThree = new Promise((resolve, reject) => {
  const error = false;
  if (!error) {
    setTimeout(() => {
      console.log("promise three ");
      resolve({ usename: "jawad", rollNumber: "l1s21bsse0079" });
    }, 100);
  } else {
    reject("Error : promise three error");
  }
});

promiseThree
  .then(function (response) {
    console.log(response);
    return response.usename;
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error);
  });
