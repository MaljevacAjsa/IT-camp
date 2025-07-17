// const cena = prompt("Unesite cenu: ", "0");

// if (cena > 5000) {
//   let new_cena = cena;
//   new_cena - cena / 10;
//   console.log(new_cena);
//   console.log(cena);
// }

// const userInput = prompt("Please enter your name:", "GeeksForGeeks User");

// if (userInput !== null) {
//   alert("Hello, " + userInput + "!");
// } else {
//   alert("You canceled the input.");
// }

//1.
// const prompt = require("prompt-sync")();
// let a = prompt("enter a number: ");
// console.log(a);

//2.
// let cena = Number(prompt("Unesite cenu: "));

// if (cena > 5000) {
//   let cenap = cena * 0.9;
//   console.log(cena, cenap);
// } else {
//   console.log("nema popusta");
// }

//3.
// let visina = Number(prompt("Unesite visinu: "));
// if (visina < 150) {
//   console.log("Niska osoba");
// } else if (visina > 150 && visina < 179) {
//   console.log("Srednje visoka osoba");
// } else {
//   console.log("Visoka osoba");
// }

//4.
// let bodovi = Number(prompt("Unesite broj bodova (0-100): "));
// if (bodovi < 0 || bodovi > 100) {
//   console.log("Bodovi moraju biti od 0 do 100");
// } else if (bodovi >= 90) {
//   console.log("Ocena 5");
// } else if (bodovi >= 80 && bodovi <= 89) {
//   console.log("Ocena 4");
// } else if (bodovi >= 70 && bodovi <= 79) {
//   console.log("Ocena 3");
// } else if (bodovi >= 60 && bodovi <= 69) {
//   console.log("Ocena 2");
// } else if (bodovi >= 50 && bodovi <= 0) {
//   console.log("Ocena 1");
// }

//5.
// let broj = Number(prompt("Unesite trocifern broj: "));
// if (broj >= 100 && broj <= 999) {
//   console.log("Broj je pozitivan");
// } else if (broj <= -100 && broj >= -999) {
//   console.log("Broj je negativan");
// } else {
//   console.log("Broj nije trocifren");
// }

// // 6.
// let broj = Number(prompt("Unesite broj (od 1 do 7): "));
// if (isNaN(broj)) {
//   console.log("Nije broj");
// } else if (broj == 1) {
//   console.log("Ponedeljak");
// } else if (broj == 2) {
//   console.log("Utorak");
// } else if (broj == 3) {
//   console.log("Sreda");
// } else if (broj == 4) {
//   console.log("Cetvrtak");
// } else if (broj == 5) {
//   console.log("Petak");
// } else if (broj == 6) {
//   console.log("Subota");
// } else if (broj == 7) {
//   console.log("Nedelja");
// }

// 7.
// const GODINA = 2025;
// let godina_rodjenja = Number(prompt("Unesite godinu rodjenja: "));

// let starost = GODINA - godina_rodjenja;

// if (starost < 18) {
//   console.log("Nemate pravo glasa");
// } else if (starost >= 18 && starost <= 65) {
//   console.log("Imate pravo glasa");
// } else {
//   console.log(
//     "Imate pravo glasa i mozete ostvariti olaksice za starije gradjane"
//   );
// }

// .8
// let a = Number(prompt("Unesite stranicu a: "));
// let b = Number(prompt("Unesite stranicu b: "));
// let c = Number(prompt("Unesite stranicu c: "));
// if (a <= 0 || b <= 0 || c <= 0) {
//   console.log("Unete vrednosti ne mogu formirati trougao");
// } else if ((c = Math.sqrt(a * a + b * b))) {
//   console.log("Trougao je pravougli");
// } else {
//   console.log("Trougao nije pravougli");
// }

//.9
