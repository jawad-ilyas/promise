fetch("https://api.github.com/users/hiteshchoudhary")
  .then((response) => {
    console.log( response);
  })
  .catch((error) => {
    console.log(typeof error);
  });
