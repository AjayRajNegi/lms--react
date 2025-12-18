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

async function divide(a, b) {
  try {
    if (b === 0) throw new Error("Cannot be divided by 0");
    return a / b;
  } catch (error) {
    console.log(error);
    return null;
  }
}

async function mainFn() {
  console.log(await divide(10, 0));
  console.log("Divide", await divide(10, 2));
}

mainFn();
