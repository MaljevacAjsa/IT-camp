// let boje = ["red", "geeen", "blue"];

// for (let i = 0; i < boje.length; i++) {
//   console.log(boje[i]);
// }

// let emptyArray = [];
// for (let i = 1; i < 11; i++) {
//   emptyArray.push(i);
// }
// for (let j = 1; j < 10; j++) emptyArray.unshift(j);

// console.log(emptyArray);

// let emptyArray2 = [];

// for (let i = 1; i < 11; i++) emptyArray2.unshift(i);
// console.log(emptyArray2);

// for (let i = 0; i < emptyArray2.length / 2; i++) {
//   emptyArray2.shift();
// }
// console.log(emptyArray2);

// let sum = 0;

// for (let i = 0; i < emptyArray2.length; i++) {
//   sum += emptyArray2[i];
// }

// console.log(sum);

// let sum2 = 0;
// let sv = 0;

// for (let i = 0; i < emptyArray2.length; i++) {
//   sum2 += emptyArray2[i];
// }
// sv = sum2 / emptyArray2.length;
// console.log(sv);

// let najmanji = emptyArray2[0];

// for (let i = 1; i < emptyArray2.length; i++) {
//   if (emptyArray2[i] < najmanji) najmanji = emptyArray2[i];
// }
// console.log(`Najmanji: ${najmanji}`);

// let najveci = emptyArray2[0];

// for (let i = 1; i < emptyArray2.length; i++) {
//   if (emptyArray2[i] > najveci) najveci = emptyArray2[i];
// }
// console.log(`Najveci: ${najveci}`);

// let brojParnih = 0;

// for (let i = 0; i < emptyArray2.length; i++) {
//   if (emptyArray2[i] % 2 == 0) brojParnih++;
// }
// console.log(`Broj parnih: ${brojParnih}`);

// let brojVecihOd10 = 0;

// for (let i = 0; i < emptyArray2.length; i++) {
//   if (emptyArray2[i] > 4) brojVecihOd10++;
// }
// console.log(`Broj vecih od 4: ${brojVecihOd10}`);

// for (let i = emptyArray2.length - 1; i >= 0; i--) {
//   console.log(emptyArray2[i]);
// }

// let arraySquared = [];

// for (let i = 0; i < emptyArray2.length; i++)
//   arraySquared.unshift(emptyArray2[i] ** 2);

// console.log(`Niz kvadrata: [${arraySquared}]`);

//
////////////////////////////////////////////         DOMACI         ///////////////////////////////////////////////////
//

//// let tren;
//// for (let i = 0; i < emptyArray2.length * 2; i++) {
////   doubleElements[i] = emptyArray2[i];
//// }
//// console.log(doubleElements);

// // 10. Kreiraj novi niz sa samo parnim brojevima iz postojećeg.
// let evenElements = [];
// for (let i = 0; i < emptyArray.length; i++) {
//   if (emptyArray[i] % 2 == 0) evenElements.push(emptyArray[i]);
// }
// console.log(evenElements);

// // 11. Obriši sve duplikate iz niza (ručno, bez Set).
// let duplicatesArray = [1, 6, 2, 7, 3, 5, 1, 6, 2, 5, 3];
// for (let i = 0; i < duplicatesArray.length - 1; i++) {
//   for (let j = i + 1; j < duplicatesArray.length; j++) {
//     if (duplicatesArray[i] == duplicatesArray[j]) {
//       duplicatesArray.splice(j, 1);
//       j--;
//     }
//   }
// }
// console.log(duplicatesArray);

// // 12. Broj ponavljanja određenog broja u nizu.
// let array = [1, 2, 2, 2, 3, 3, 2, 4, 1, 1, 3, 4, 4, 4, 4];
// let counted = [];
// for (let i = 0; i < array.length; i++) {
//   if (!counted.includes(array[i])) {
//     let reps = 0;
//     for (let j = 0; j < array.length; j++) {
//       if (array[i] == array[j]) {
//         reps++;
//       }
//     }
//     console.log(array[i], reps);
//     counted.push(array[i]);
//   }
// }

// // 13. const niz = [1, 2, 3, 2, 4, 2];
// // broj = 2 → rezultat: 3 puta
// // Zameni mesta prvom i poslednjem elementu.
// const niz = [1, 2, 3, 2, 4, 2];
// let brojac = 0;
// for (let i = 0; i < niz.length; i++) {
//   if (niz[i] == 2) brojac++;
// }
// console.log(`2 → rezultat: ${brojac} puta`);
// let prvi = niz.shift();
// let zadnji = niz.pop();
// niz.unshift(zadnji);
// niz.push(prvi);
// console.log(niz);

// 14. Proveri da li niz sadrži određen broj (bez includes).
// let niz = [1, 2, 3, 4, 5, 6];
// let broj = 4;
// function ifIncludes(arr, n) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === n) {
//       return true;
//     }
//   }
//   return false;
// }
// console.log(ifIncludes(niz, broj));

// // 15. const reci = ["pas", "kuca", "zmaj", "on"];
// // Spoji dva niza u jedan (bez concat).
// const reci = ["pas", "kuca", "zmaj", "on"];
// let recce = ["a", "li", "ej", "pa"];
// for (let i = 0; i < reci.length; i++) {
//   recce.push(reci[i]);
// }
// console.log(recce);

// // 16. Sortiraj niz brojeva ručno.
// let niz = [5, 8, 3, 7, 1, 2, 6];
// for (let i = 0; i < niz.length - 1; i++) {
//   let temp;
//   for (let j = i + 1; j < niz.length; j++) {
//     if (niz[i] > niz[j]) {
//       temp = niz[i];
//       niz[i] = niz[j];
//       niz[j] = temp;
//     }
//   }
// }
// console.log(niz);

// // 17. Proveri da li je niz palindrom (čita se isto s leva i s desna).
// let niz1 = [1, 2, 3, 4, 5, 6];
// let niz2 = [1, 2, 3, 2, 1];
// function isPalindrom(niz) {
//   for (let i = 0; i < Math.floor(niz.length / 2); i++) {
//     if (niz[i] !== niz[niz.length - 1 - i]) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(isPalindrom(niz1));
// console.log(isPalindrom(niz2));

// // 18. const niz = [1, 2, 3, 2, 1]; jeste palindrom
// // Kreiraj novi niz koji sadrži samo jedinstvene elemente (ručno, bez Set).
// const niz = [1, 2, 3, 2, 1];
// let noviNiz = [];
// for (let i = 0; i < niz.length; i++) {
//   let exists = false;
//   for (let j = 0; j < noviNiz.length; j++) {
//     if (niz[i] === noviNiz[j]) {
//       exists = true;
//       break;
//     }
//   }
//   if (!exists) {
//     noviNiz.push(niz[i]);
//   }
// }
// console.log(noviNiz);
