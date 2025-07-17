//  2.
//      Unos brojeva – preskoči 0, prekini ako je broj veći od 100

let n = Number(prompt("Unesite broj (do 100):"));
while (n <= 100) {
  if (n === 0) {
    n = Number(prompt("Unesite broj (do 100):"));
    continue;
  }
  if (n > 100) {
    break;
  }
  n = Number(prompt("Unesite broj (do 100):"));
}

//  3.
//      Ispiši samo neparne brojeve od 1 do 20

for (let i = 1; i <= 20; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

//  4.
//      Saberi sve brojeve od 1 do 20, ali preskoči one koji su deljivi sa 4

let suma = 0;
for (let i = 1; i <= 20; i++) {
  if (i % 4 !== 0) {
    suma += i;
  }
}
console.log(suma);
