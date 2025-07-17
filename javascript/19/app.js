const osoba = {
  ime: "Ajsa",
  pozdrav() {
    return `Pozdrav ${this.ime}`;
  },
};

osoba.pozdrav();

let pozdravFn = osoba.pozdrav;
console.log(pozdravFn());

const osoba2 = {
  ime: "Sumeja",
};

// CALL APPLY BIND

//

pozdravFn.call(osoba2);

function predstavi(pozicija, sektor) {
  console.log(
    `Zovem se ${this.ime}, radim kao ${pozicija} u sektoru ${sektor}`
  );
}

// let predstaviFn = predstavi;

const osoba3 = {
  ime: "Akica",
};

predstavi.call(osoba3, "programer", "CEO");

predstavi.apply(osoba3, ["programer", "CEO"]);

const predstaviZaOsobu3 = predstavi.bind(osoba3, "mark", "menadz");
predstaviZaOsobu3();

function racunaj(cena, porez) {
  console.log(`Ukupno: ${this.valuta}${cena + cena * porez}`);
}

const rsd = { valuta: "RSD " };
const eur = { valuta: "EUR " };

const racunajRSD = racunaj.bind(rsd);
racunajRSD(5000, 0.3);

const racunajEUR = racunaj.bind(eur);
racunajEUR(5000, 0.3);

const osoba4 = {
  ime: "Milica",
  pozdrav: function (grad, godina) {
    console.log(`Zdravo ja sam ${this.ime} iz ${grad}, imam ${godina} godina`);
  },
};
const drugaOsoba = { ime: "Stefan" };

osoba.pozdrav.call(drugaOsoba, "Novi Sad", 25);
