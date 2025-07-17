// let i = 1;

// do {
//   console.log(i);
//   i++;
// } while (i <= 10);

// 5. Unos lozinke
//     Program traži od korisnika da unese lozinku. Ako lozinka nije "tajna123",
//     traži ponovni unos. Kada unese tačnu lozinku, ispiši poruku dobrodošlice

// const password = "tajna123";
// let guess;

// do {
//   guess = prompt("Unesite lozinku: ");
// } while (guess !== password);

// let brojac = 0;
// const password = "tajna123";
// let guess;

// do {
//   guess = prompt("Unesite lozinku: ");
//   if (brojac === password) {
//     console.log("Bujrum");
//     break;
//   } else if (brojac == 2) {
//     console.log("No");
//   }
//   brojac++;
// } while (brojac < 3);

// let n = Math.floor(Math.random() * 10 + 1);
// console.log(n);
// let guess;

// do {
//   guess = Number(prompt("Pogodi broj: "));
//   if (guess > n) {
//     console.log("Veci");
//   } else if (guess < n) {
//     console.log("Manji");
//   }
// } while (guess !== n);

// ugnjezdene petlje

// for(let i=1;i<11;i++){
//     for(let j=1;j<11;j++){

//     }
// }

// for (let i = 1; i < 4; i++) {
//   for (let j = 1; j < 4; j++) {
//     console.log(`${i}*${j}=${i * j}`);
//   }
// }

// for (let i = 5; i <= 15; i += 5) {
//   for (let j = 1; j < 4; j++) {
//     console.log(`${i}*${j}=${i * j}`);
//   }
// }
