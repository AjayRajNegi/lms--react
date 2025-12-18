function delayFn(time) {
  //   console.log("Function");
  return new Promise((resolve) => setTimeout(resolve, time));
}
console.log("Promies starts");
delayFn(2000).then(() => {
  console.log("After 2 seconds.");
});

function divide(a, b) {
  return new Promise((resolve, reject) => {
    if (b === 0) {
      reject("Can not perofrm division by 0");
    } else {
      resolve(a / b);
    }
  });
}

divide(4, 2)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.log(error, "err"));
