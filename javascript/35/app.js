// 1. Delayed Callback Execution
// Write a JavaScript function that takes a callback and invokes it after a delay of 2 second.
// function invoked(func) {
//   setTimeout(func, 2000);
// }
// invoked(() => {
//   try {
//     console.log(aki);
//   } catch (e) {
//     console.log(e.message);
//   }
// });

// 2. Clone Array
// Write a JavaScript function to clone an array.
// Test Data :
// console.log(array_Clone([1, 2, 4, 0]));

// function array_Clone(array) {
//   const new_array = [...array];
//   return new_array;
// }
// console.log(array_Clone([1, [2, 3]]));

// 3. First Elements of Array
// Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array.
// Test Data :
// console.log(first([7, 9, 0, -2]));
// console.log(first([],3));JavaScript course
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));

// Expected Output :
// 7
// []
// [7, 9, 0]
// [7, 9, 0, -2]
// []

// function first(array) {
// if (array== null) return void 0;
//   return array[0];
// }

// console.log(first([1, 2, 3]));
// console.log(first([8, 2, 3]));
// console.log(first([[], 2, 3]));

// function firstNElements(array, n) {
//   if (array == null) return void 0;
//   if (n == null) return array[0];
//   if (n < 0) return [];
//   return array.slice(0, n);
// }

// console.log(firstNElements([6, 8, 2, -2]));
// console.log(firstNElements([null, 8, 2, -2]));
// console.log(firstNElements([6, 8, 2, -2], 3));

// 11. Sum of Squares in Array
// Write a JavaScript program to find the sum of squares of a numerical vector.

// function sumOfSquares(array) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     sum += Math.pow(array[i], 2);
//   }
//   return sum;
// }

// console.log(sumOfSquares([1, 2, 4]));

// 12. Sum and Product of Array
// Write a JavaScript program to compute the sum and product of an array of integers.

// function sumAndProduct(array) {
//   let sum = 0;
//   let product = 1;
//   for (let i = 0; i < array.length; i++) {
//     sum += array[i];
//   }
//   for (let i = 0; i < array.length; i++) {
//     product *= array[i];
//   }
//   return `sum: ${sum},\nproduct ${product}`;
// }

// console.log(sumAndProduct([1, 2, 3]));

// 13. Add Items to Array
// Write a JavaScript program to add items to a blank array and display them.

// const div = document.createElement("div");
// const input = document.createElement("input");
// const btnAdd = document.createElement("button");
// const btnDisplay = document.createElement("button");

// btnAdd.innerText = "Add";
// btnDisplay.innerText = "Display";
// div.style.display = "flex";

// div.append(input);
// div.append(btnAdd);
// div.append(btnDisplay);
// document.body.append(div);

// let blankArray = [];

// function add(n, array) {
//   array.push(n);
//   return array;
// }

// function display(array) {
//   array.forEach((el, i) => {
//     const p = document.createElement("p");
//     p.innerText = `Element ${i} = ${el}`;
//     document.body.append(p);
//   });
// }

// btnAdd.addEventListener("click", () => {
//   add(input.value, blankArray);
//   input.innerText = "";
//   console.log(blankArray);
//   console.log();
// });

// btnDisplay.addEventListener("click", () => {
//   display(blankArray);
//   console.log(blankArray);
// });

// 20. Find Duplicate Values
// Write a JavaScript program to find duplicate values in a JavaScript array.

// function findDuplicates(array) {
//   const duplicates = [];
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 1; j < i - 1; j++) {
//       if (array[j] === array[i]) {
//         duplicates.push(array[i]);
//       }
//     }
//   }
//   return duplicates;
// }
// console.log(findDuplicates([1, 2, 3, 4, 2, 3]));

// 21. Flatten Nested Array
// Write a JavaScript program to flatten a nested (any depth) array.
// If you pass shallow, the array will only be flattened to a single level.

// function flatten(array, shallow = false) {
//   if (shallow) {
//     // Flatten only one level
//     return array.reduce((acc, val) => acc.concat(val), []);
//   } else {
//     // Flatten recursively (any depth)
//     return array.reduce(
//       (acc, val) =>
//         Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val),
//       []
//     );
//   }
// }

// console.log(flatten([1, 2, [2, 4], [[4]], [[2, 3, 4]]])); // Full flatten tj deep flatten
// console.log(flatten([1, 2, [2, 4], [[4]], [[2, 3, 4]]], true)); // Shallow flatten

// const arr = [5, 9, [9, 0], [[6]], [[2, 7, 4]]];
// console.log(arr.flat(Infinity));
// console.log(arr.flat());
