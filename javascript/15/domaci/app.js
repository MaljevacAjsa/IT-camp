// Ispiši svaki broj u nizu.

// Ispiši kvadrat svakog broja.

// Ispiši poruku: "Broj X je paran/neparan".

// Saberi sve brojeve i ispiši zbir (koristi promenljivu van forEach).

// Prebroj koliko brojeva u nizu je veće od 10.

// Ispiši redni broj (indeks) i vrednost svakog broja.

// Ispiši dvostruku vrednost samo parnih brojeva.

// Ispiši sve brojeve koje kada podeliš sa 5 daju ostatak 2.

// Nađi najveći broj u nizu koristeći forEach.

// Napravi zbir svih pozitivnih brojeva

// -------------------- REDUCE --------------------

// Izračunaj zbir svih brojeva.

let niz = [3, 7, -2, 15, 0, 8];

let zbir = niz.reduce((acc, curr) => acc + curr, 0);
console.log("Zbir svih brojeva:", zbir);

// Izračunaj proizvod svih brojeva.
let proizvod = niz.reduce((acc, curr) => acc * curr, 1);
console.log("Proizvod svih brojeva:", proizvod);

// Izračunaj zbir svih parnih brojeva.
let zbirParnih = niz.reduce(
  (acc, curr) => (curr % 2 === 0 ? acc + curr : acc),
  0
);
console.log("Zbir svih parnih brojeva:", zbirParnih);

// Izračunaj zbir kvadrata svih brojeva.
let zbirKvadrata = niz.reduce((acc, curr) => acc + curr * curr, 0);
console.log("Zbir kvadrata svih brojeva:", zbirKvadrata);

// Nađi najveći broj u nizu.
let najveci = niz.reduce((max, curr) => (curr > max ? curr : max), niz[0]);
console.log("Najveći broj u nizu:", najveci);

// Nađi najmanji broj u nizu.
let najmanji = niz.reduce((min, curr) => (curr < min ? curr : min), niz[0]);
console.log("Najmanji broj u nizu:", najmanji);

// Izračunaj prosečnu vrednost niza.
let prosek = niz.reduce((acc, curr) => acc + curr, 0) / niz.length;
console.log("Prosečna vrednost niza:", prosek);

// Prebroj koliko brojeva je manje od 0.
let manjeOdNule = niz.reduce(
  (count, curr) => (curr < 0 ? count + 1 : count),
  0
);
console.log("Brojeva manjih od 0:", manjeOdNule);

// Saberi samo brojeve koji su deljivi sa 3.
let zbirDeljivihSaTri = niz.reduce(
  (acc, curr) => (curr % 3 === 0 ? acc + curr : acc),
  0
);
console.log("Zbir brojeva deljivih sa 3:", zbirDeljivihSaTri);

// Kombinuj brojeve tako da praviš broj (npr. [1, 2, 3] → 123).
let kombinovaniBroj = niz.reduce((acc, curr) => acc * 10 + Math.abs(curr), 0);
let kombinovaniBroj2 = niz.reduce((acc, curr) => acc + curr, "");
console.log("Kombinovani broj:", kombinovaniBroj);
console.log("Kombinovani broj:", kombinovaniBroj2);

// niz.join("")

// -------------------- TERNARNI OPERATOR --------------------

// Napiši program koji koristi ternarni operator da proveri da li je dati broj paran ili neparan.
let broj = 7;
console.log(broj % 2 === 0 ? "Broj je paran" : "Broj je neparan");

// Koristi ternarni operator da pronađeš veći od dva uneta broja.
let a = 12;
let b = 8;
console.log(a > b ? a : b);

// Koristi ternarne operatore da proveriš da li je broj pozitivan, negativan ili nula (ovde ce vam trebati ugnjezdeni ternarni operator)
let x = 0;
console.log(x > 0 ? "Pozitivan" : x < 0 ? "Negativan" : "Nula");

// -------------------- NIZOVI --------------------

// Napiši funkciju koja vraća novi niz sa svim elementima uvećanim za 1, bez modifikovanja originalnog niza.
function uvecajZaJedan(arr) {
  return arr.map((x) => x + 1);
}

function uvecajZaJedanFE(arr) {
  const noviNiz = [];
  arr.forEach((x) => {
    noviNiz.push((el) => el + 1);
  });
  return noviNiz;
}

let noviNiz = uvecajZaJedan(niz);
let noviNizFE = uvecajZaJedanFE(niz);
console.log(`Novi niz: ${noviNiz}`);
console.log(`Novi niz: ${noviNizFE}`);
console.log(`Originalni niz: ${niz}`);

// Malo za mozganje:

// let a = [1, 2, 3];
// let b = a;
// let c = [1, 2, 3];
// Koji ce biti rezultat za a == b, a koji za b == c?

//      ODGOVOR
//      a == b TRUE
//      b == c FALSE

// Ako deklarisem niz sa const, a onda pokusam da ubacim novi el u niz, to predstavlja menjanje niza. Ako znamo da js ne
// dozvoljava menjanje varijable deklarisano sa const, zbog cega ovde ne dobijamo gresku?

// const cuva da se referenca ne menja, a ako dodamo element mi menjamo samo strukturu a ne referencu, tj pointer
