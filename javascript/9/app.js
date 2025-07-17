// 1. Zadatak:
//     Napiši funkciju kvadrat(broj) koja vraća kvadrat tog broja.
//     (kvadrat(5) => 25)

// function square(n) {
//   return n * n;
// }

// let n = square(5);
// console.log(n);

// 2. Zadatak:
//     Napiši funkciju jeParan(broj) koja vraća true ako je broj paran,
//     a false ako nije.

// function isEven(n) {
//   return n % 2 === 0;
// }

// 3. Zadatak:
//     Napiši funkciju maksimum(a, b) koja vraća veći od dva broja.
//     Ako su a i b jednaki, vrati string "Brojevi su jednaki".

// function maximum(a, b) {
//   if (typeof a !== "number" || typeof b !== "number") {
//     return "Uneti argumenti moraju biti brojevi";
//   }
//   if (a < b) {
//     return b;
//   } else if (a > b) {
//     return a;
//   } else {
//     return "Brojevi su jednaki";
//   }
// }

// 4. Zadatak:
//     Napiši funkciju zbirDoN(n) koja računa zbir svih brojeva od 1 do n
//     (koristi for petlju).

// function sumToN(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }

// 5. Zadatak:
//     Napiši funkciju stepen(baza, izlozilac) koja vraća rezultat baza
//     na izlozilac. (koristi for, bez Math.pow ili operatora **)
//     + ukoliko je izlozilac 1, odmah vratite bazu, a ako je 0, vratite 1.

// function stepen(baza, izlozilac) {
//   if (izlozilac === 0) {
//     return 1;
//   }
//   if (izlozilac === 1) {
//     return baza;
//   }
//   let rezultat = 1;
//   for (let i = 0; i < izlozilac; i++) {
//     rezultat *= baza;
//   }
//   return rezultat;
// }

// 6. Zadatak:
//     Napiši funkciju brojCifara(n) koja vraća koliko cifara ima broj n.
//     Hint: koristi while (n > 0) i n = Math.floor(n / 10).

// function brojCifara(n) {
//   let brojac = 0;
//   if (n === 0) return 1;
//   while (n > 0) {
//     brojac++;
//     n = Math.floor(n / 10);
//   }
//   return brojac;
// }

// 7. Zadatak:
//     Napiši funkciju daLiJeProst(broj) koja vraća true ako je broj prost,
//     u suprotnom false.
//     Hint: Broj je prost ako je deljiv samo sa 1 i samim sobom.

// function daLiJeProst(broj) {
//   if (broj <= 1) return false;
//   for (let i = 2; i <= Math.sqrt(broj); i++) {
//     if (broj % i === 0) return false;
//   }
//   return true;
// }

// 8. Zadatak:
//     Napiši funkciju faktorijel(n) koja vraća n! — proizvod svih brojeva od 1 do n.
//     Primer: faktorijel(4) vraća 24.
//     (Koristi for ili while)

// function faktorijel(n) {
//   if (n === 0 || n === 1) return 1;
//   let proizvod = 1;
//   for (let i = 1; i <= n; i++) {
//     proizvod *= i;
//   }
//   return proizvod;
// }

// 9. Zadatak:
//     Napiši funkciju kalkulator(a, b, operator) koja koristi switch da izvrši sabiranje,
//     oduzimanje, množenje ili deljenje na osnovu operator vrednosti (+, -, *, /).

// function kalkulator(a, b, operator) {
//   switch (operator) {
//     case "+":
//       return a + b;
//     case "-":
//       return a - b;
//     case "*":
//       return a * b;
//     case "/":
//       if (b === 0) {
//         return "Deljenje sa nulom nije dozvoljeno";
//       }
//       return a / b;
//     default:
//       return "Nepoznat operator";
//   }
// }

// 10. Zadatak:
//     Napiši funkciju meni() koja u while petlji prikazuje meni korisniku:

//         1 - Kvadrat broja
//         2 - Da li je paran
//         3 - Zbir do N
//         0 - Izlaz

// function meni() {
//   let izbor;
//   do {
//     console.log("1 - Kvadrat broja");
//     console.log("2 - Da li je paran");
//     console.log("3 - Zbir do N");
//     console.log("0 - Izlaz");

//     izbor = parseInt(prompt("Unesite opciju:"));

//     switch (izbor) {
//       case 1:
//         let broj1 = parseInt(prompt("Unesite broj:"));
//         console.log(`Kvadrat broja ${broj1} je ${square(broj1)}`);
//         break;
//       case 2:
//         let broj2 = parseInt(prompt("Unesite broj:"));
//         console.log(`Broj ${broj2} je ${isEven(broj2) ? "paran" : "neparan"}`);
//         break;
//       case 3:
//         let broj3 = parseInt(prompt("Unesite broj:"));
//         console.log(`Zbir brojeva do ${broj3} je ${sumToN(broj3)}`);
//         break;
//       case 0:
//         console.log("Izlaz iz programa.");
//         break;
//       default:
//         console.log("Nepoznata opcija. Pokušajte ponovo.");
//     }
//   } while (izbor !== 0);
// }
// meni();
// 11. Zadatak:
// Napiši funkciju zbirParnih(n) koja računa zbir svih parnih brojeva od 1 do n.
// Primer: zbirParnih(6) vraća 2 + 4 + 6 = 12

// 12. Zadatak:
// Napiši funkciju zbirNeparnih(n) koja računa zbir svih neparnih brojeva od 1 do n.
// Primer: zbirNeparnih(5) vraća 1 + 3 + 5 = 9

// 13. Zadatak:
// Napiši funkciju obrniBroj(n) koja vraća broj n sa obrnutim ciframa.
// Hint: koristi ostatak pri deljenju i množenje sa 10
// Primer: obrniBroj(123) vraća 321

// function obrniBroj(n) {
//   let obrnuti = "";
//   let kopija = n;
//   while (kopija !== 0) {
//     let trCifra;
//     trCifra = kopija % 10;
//     obrnuti += trCifra;
//     kopija = Math.floor(kopija / 10);
//   }

//   return +obrnuti;
// }

// 14. Zadatak:
// Napiši funkciju sumaCifara(n) koja vraća zbir svih cifara broja.
// Primer: sumaCifara(1234) vraća 1 + 2 + 3 + 4 = 10

// function sumaCifara(n) {
//   let sum = 0;
//   let kopija = n;
//   while (kopija !== 0) {
//     let trCifra = kopija % 10;
//     sum += trCifra;
//     kopija = Math.floor(kopija / 10);
//   }
//   return sum;
// }

// 15. Zadatak:
// Napiši funkciju proizvodCifara(n) koja vraća proizvod svih cifara broja.
// Primer: proizvodCifara(123) vraća 1 × 2 × 3 = 6

// 16. Zadatak:
// Napiši funkciju daLiJeSavrsen(broj) koja vraća true ako je broj savršen.
// Savršen broj je jednak zbiru svojih delilaca (bez samog sebe).
// Primer: 6 → 1 + 2 + 3 = 6 → savršen broj

// function daLiJeSavrsen(broj) {
//   let sum = 0;
//   let savrsen = false;
//   for (let i = 1; i < broj; i++) {
//     if (broj % i == 0) {
//       sum += i;
//     }
//   }
//   if (sum === broj) {
//     savrsen = true;
//   }
//   return savrsen;
// }

// 17. Zadatak:
// Napiši funkciju zbirDelilaca(broj) koja vraća zbir svih brojeva manjih od datog broja koji ga deli bez ostatka.
// Primer: zbirDelilaca(8) → 1 + 2 + 4 = 7

// function zbirDelilaca(broj) {
//   let sum = 0;
//   for (let i = 1; i < broj; i++) {
//     if (broj % i == 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }

// 18. Zadatak:
// Napiši funkciju daLiJeArmstrong(n) koja proverava da li je broj Armstrongov.
// Armstrongov broj: zbir kubova svih cifara je jednak broju.
// Primer: 153 → 1³ + 5³ + 3³ = 153

// function daLiJeArmstrong(n) {
//   let sum = 0;
//   let kopija = n;
//   while (kopija !== 0) {
//     let trCifra = kopija % 10;
//     sum += trCifra ** 3;
//     kopija = Math.floor(kopija / 10);
//   }
//   return sum == n;
// }

// function daLiJeArmstrong(n) {
//   let suma = 0;
//   let kopija = n;
//   while (kopija !== 0) {
//     let trCifra;
//     trCifra = kopija % 10;
//     zbir += trCifra * trCifra;
//     kopija = Math.floor(kopija / 10);
//   }
// }

// 19. Zadatak:
// Napiši funkciju najmanjiDelilac(n) koja vraća najmanji prirodan delilac veći od 1 (osim 1).
// Primer: najmanjiDelilac(15) vraća 3

// function najmanjiDelilac(n) {
//   if (n < 2) {
//     return "Broj mora biti veći od 1";
//   }
//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) {
//       return i;
//     }
//   }
//   return n; // If no divisor is found, n is prime
// }

// 20. Zadatak:
// Napiši funkciju zbirKvadrataDoN(n) koja vraća zbir kvadrata svih brojeva od 1 do n.
// Primer: zbirKvadrataDoN(3) → 1² + 2² + 3² = 14

// function zbirKvadrataDoN(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i * i;
//   }
//   return sum;
// }

// Math.sqrt()
