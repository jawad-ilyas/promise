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
    console.log(error)
  }
}
consumePromiseFour();