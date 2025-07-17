// 1. Ispis brojeva od 1 do 10
//     Napiši program koji pomoću while petlje ispisuje brojeve od 1 do 10.
// let i = 1;
// while (i < 11) {
//   console.log(i);
//   i++;
// }

// 2. Suma unetih brojeva
//     Korisnik unosi brojeve dok ne unese nulu.
//     Program na kraju ispisuje zbir svih unetih brojeva (osim nule).
// let sum = 0;
// let n = Number(prompt("Unesite broj: "));
// while (n !== 0) {
//   sum += n;
//   n = Number(prompt("Unesite broj: "));
// }
// console.log(`Zbir unetih brojeva je: ${sum}`);

// ----- DOMACI -----

// 3. Pogodi broj

// let n = Math.floor(Math.random() * 10 + 1);
// console.log("Broj je generisan.");
// let guess = Number(prompt("Pogodi broj između 1 i 10: "));
// while (guess !== n) {
//   if (guess < n) {
//     console.log("Pokušaj sa većim brojem.");
//   } else {
//     console.log("Pokušaj sa manjim brojem.");
//   }
//   guess = Number(prompt("Pogodi broj između 1 i 10:"));
// }
// console.log(`Čestitamo! Pogodili ste broj: ${n}`);

// 4. Ispis svih parnih brojeva između 1 i 100 (while)
//     Pomoću while petlje ispiši sve parne brojeve između 1 i 100.
// let i = 2;
// while (i <= 100) {
//   console.log(i);
//   i += 2;
// }

// 5. Unos lozinke
//     Program traži od korisnika da unese lozinku. Ako lozinka nije "tajna123",
//     traži ponovni unos. Kada unese tačnu lozinku, ispiši poruku dobrodošlice

// const password = "tajna123";
// let guess = prompt("Unesite lozinku: ");
// while (guess !== password) {
//   guess = prompt("Unesite lozinku: ");
// }
// console.log("Dobrodošli!");

// 6. Provera da li je broj prost
//     Korisnik unosi broj, a program proverava da li je taj broj prost (deljiv samo sa 1 i samim sobom).
//     Koristi while petlju za proveru deljivosti.

// let number = Number(prompt("Unesite broj: "));
// let isPrime = true;

// if (number <= 1) {
//   isPrime = false;
// } else {
//   let i = 2;
//   while (i <= Math.sqrt(number)) {
//     if (number % i === 0) {
//       isPrime = false;
//       break;
//     }
//     i++;
//   }
// }

// if (isPrime) {
//   console.log(`${number} je prost broj.`);
// } else {
//   console.log(`${number} nije prost broj.`);
// }

// 7. Kalkulator sa menijem
//     Napravi meni koji korisniku daje sledeće opcije:

//         Sabiranje
//         Oduzimanje
//         Množenje
//         Deljenje
//         Izlaz

//     Korisnik bira opciju i unosi dva broja, a program ispisuje rezultat.
//     Meni se ponavlja dok korisnik ne izabere opciju "Izlaz".
//     (switch + while).

// let option = prompt(
//   "Odaberite opciju (`Sabiranje`,`Oduzimanje`,`Mnozenje`,`Deljenje`,`Izlaz`):"
// );
// while (option !== "Izlaz") {
//   let num1 = Number(prompt("Unesite prvi broj:"));
//   let num2 = Number(prompt("Unesite drugi broj:"));
//   let result;

//   switch (option) {
//     case "Sabiranje":
//       result = num1 + num2;
//       console.log(`Rezultat sabiranja: ${result}`);
//       break;
//     case "Oduzimanje":
//       result = num1 - num2;
//       console.log(`Rezultat oduzimanja: ${result}`);
//       break;
//     case "Mnozenje":
//       result = num1 * num2;
//       console.log(`Rezultat mnozenja: ${result}`);
//       break;
//     case "Deljenje":
//       if (num2 !== 0) {
//         result = num1 / num2;
//         console.log(`Rezultat deljenja: ${result}`);
//       } else {
//         console.log("Deljenje sa nulom nije dozvoljeno.");
//       }
//       break;
//     default:
//       console.log("Nepoznata opcija.");
//   }

//   option = prompt(
//     "Odaberite opciju (`Sabiranje`,`Oduzimanje`,`Mnozenje`,`Deljenje`,`Izlaz`):"
//   );
// }
// console.log("Izlaz iz programa.");

// 8. Provera da li je broj palindrom (npr. 121, 1331)
//     Korisnik unosi broj, a program proverava da li je isti kada se pročita unazad.

// let number = prompt("Unesite broj: ");
// let reversedNumber = number.split("").reverse().join("");
// if (number === reversedNumber) {
//   console.log(`${number} je palindrom.`);
// } else {
//   console.log(`${number} nije palindrom.`);
// }

// 9. Brojanje cifara unetog broja
// let inputNumber = prompt("Unesite broj:");

// console.log(`Broj ${inputNumber} ima ${inputNumber.length} cifara.`);

// 10. Pogodi lozinku sa ograničenim brojem pokušaja

// const correctPassword = "js123";
// let attempts = 3;
// let userPassword;

// while (attempts > 0) {
//   userPassword = prompt("Unesite lozinku:");
//   if (userPassword === correctPassword) {
//     console.log("Dobrodošao!");
//     break;
//   } else {
//     attempts--;
//     if (attempts > 0) {
//       console.log(`Pogrešna lozinka. Preostalo pokušaja: ${attempts}`);
//     } else {
//       console.log("Pristup odbijen.");
//     }
//   }
// }
