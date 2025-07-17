// 1.
//     Imaš niz godina. Izdvoji samo punoletne.
// let niz = [20, 12, 15, 19];
// let nizPunoletnih = niz.filter((age) => age >= 18);
// console.log(nizPunoletnih);

// 2.
//     Imaš niz godina. Pronađi prvu punoletnu osobu.
// let niz = [20, 12, 15, 19];
// let prvaPunoletnaOsoba = niz.find((age) => age >= 18);
// console.log(prvaPunoletnaOsoba);

// 3.
//     Imaš niz reči. Izdvoji one koje imaju tačno 4 slova.
// let niz = ["ajsa", "pas", "macka", "papuca", "hleb"];
// let nizReciOd4Slova = niz.filter((word) => word.length == 4);
// console.log(nizReciOd4Slova);

// 4.
//     Imaš niz brojeva. Zadrži samo one deljive sa 3.
// let niz = [2, 5, 3, 6, 8, 9];
// let nizDeljivihSa3 = niz.filter((n) => n % 3 == 0);
// console.log(nizDeljivihSa3);

// 5.
//     Sacuvaj prvi broj deljiv sa 7.
// let niz = [9, 4, 12, 14, 7, 64, 21, 56];
// let prviDeljivSa7 = niz.find((n) => n % 7 == 0);
// console.log(prviDeljivSa7);

// 6.
//     Imaš niz brojeva. Pronađi prvi negativan broj.
// let niz = [1, 6, 32, 0, -2, 8, -3.2];
// let prviNegativanBroj = niz.find((n) => n < 0);
// console.log(prviNegativanBroj);

// 7.
//     Pronađi prvi broj koji je deljiv i sa 3 i sa 5.
// let niz = [1, 4, 3, 5, 15, 33, 315];
// let prviDeljivSa3i5 = niz.find((n) => n % 3 == 0 && n % 5 == 0);
// console.log(prviDeljivSa3i5);

// 8.
//     Pronađi prvi broj koji je kvadrat nekog celog broja (npr. 4, 9, 16...). koristite built in f-je
// let niz = [3, 7, 9, 4, 5, 16];
// let prviKvadratCelogBroja = niz.find((n) => Number.isInteger(Math.sqrt(n)));
// console.log(prviKvadratCelogBroja);

// 9.
//     Pronađi prvi prost broj u nizu.
// let niz = [6, 4, 7, 8, 12, 5];
// function jeProst(n) {
//   if (n <= 1) return false;
//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) return false;
//   }
//   return true;
// }
// let prviProstBroj = niz.find((n) => jeProst(n));
// console.log(prviProstBroj);

// 10.
//     Pronađi prvi broj koji nije deljiv ni sa jednim brojem od 2 do 10.
// let niz = [11, 13, 17, 22, 23, 29, 30, 31];
// let prviNedeljiv = niz.find(function (n) {
//   for (let i = 2; i <= 10; i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true;
// });
// console.log(prviNedeljiv);

// 11.
// Zadatak je da iz niza celih brojeva izdvojiš sve parne brojeve,
// zatim izračunaš njihove kvadrate i na kraju pronađeš prvi broj u tom nizu kvadrata koji je veći od 100.
// let brojevi = [3, 8, 12, 5, 10, 7, 6];
// let prviKvadratVeciOd100 = brojevi
//   .filter((n) => n % 2 === 0)
//   .map((n) => n * n)
//   .find((kv) => kv > 100);
// console.log(prviKvadratVeciOd100);

// 12.
// Prvo filtrirati pozitivne brojeve, zatim proveriti da li su prosti (možeš koristiti pomoćnu funkciju),
//  kvadrirati ih, i na kraju filtrirati one čiji kvadrat nije deljiv sa 3.
// function jeProst(n) {
//   if (n <= 1) return false;
//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) return false;
//   }
//   return true;
// }
// let niz2 = [4, 5, 7, -3, 9, 11, 12];
// let rezultat = niz2
//   .filter((n) => n > 0)
//   .filter(jeProst)
//   .map((n) => n * n)
//   .filter((kv) => kv % 3 !== 0);
// console.log(rezultat);
