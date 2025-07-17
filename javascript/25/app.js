const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

// grandparent.addEventListener(
//   "click",
//   () => {
//     console.log("grandparent capture");
//   },
//   { capture: true }
// );
// grandparent.addEventListener("click", () => {
//   console.log("grandparent");
// });

// parent.addEventListener(
//   "click",
//   () => {
//     console.log("parent capture");
//   },
//   { capture: true }
// );
// parent.addEventListener("click", () => {
//   console.log("parent");
// });

// child.addEventListener(
//   "click",
//   () => {
//     console.log("child capture");
//   },
//   { capture: true }
// );
// child.addEventListener("click", () => {
//   console.log("child");
// });

// document.addEventListener(
//   "click",
//   () => {
//     console.log("document capture");
//   },
//   { capture: true }
// );
// document.addEventListener("click", () => {
//   console.log("document");
// });

document.addEventListener("click", () => {
  console.log("document");
});

grandparent.addEventListener("click", (event) => {
  console.log(event.target, "target"); // el na koji smo bukvalno kliknuli, uevk ono na sta smo kliknuli
  console.log(event.currentTarget, "curr target"); // onaj na koji smo postavili eventListener
  console.log("grandparent");
});

parent.addEventListener("click", () => {
  console.log("parent");
  event.stopPropagation();
});

child.addEventListener("click", () => {
  console.log("child");
});
