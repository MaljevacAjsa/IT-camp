const prom = new Promise((resolve, reject) => {
  const condition = true;
  if (condition) {
    resolve("bravo");
  } else {
    reject("ne brv");
  }
});

prom.then((res) => {
  console.log(res);
});
