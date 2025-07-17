const obj = {
  name: "Ajsa",
  lastname: "Maljevac",
  age: 20,
  godiste: 2005,
  trenutnaGodina: 2025,
  job: "web dev",
  "user name": "ajsa.maljevac",
  address: {
    street: "Generala Zivkovica",
    city: "Novi Pazar",
  },
  hobbies: ["eat", "sleep", "repeat"],
  greetFunction: function () {
    console.log("pozdrav");
  },
  greetFunction2: function () {
    return `Poz ${this.name}`;
  },
  mauArrow: () => {
    console.log("mau");
  },
  mauArrow2: () => {
    return `mau ${obj.name}`;
  },
  short() {
    console.log("Short hand sintaksa funkcije");
  },
  podaci: function () {
    return `Vase ime je ${this.name} ${this.lastname}, imate ${this.age} godina, vase zanimanje je ${this.job}, 
    vasi hobiji su ${this.hobbies}, vasa adresa je ${this.address.street} ${this.address.city}.`;
  },
  izracunajGodine: function () {
    return this.trenutnaGodina - this.godiste;
  },
};

obj.greetFunction();
const ime = obj.greetFunction2();
console.log(ime);
obj.mauArrow();
const mau = obj.mauArrow2();
console.log(mau);
obj.short();
const podaci = obj.podaci();
console.log(podaci);
console.log(obj.izracunajGodine());

const osoba = {
  ime: "Akica",
  prezime: "Maljevac",
};

console.log(Object.hasOwn(osoba, "ime"));
console.log(osoba.hasOwnProperty("ime"));

const nizVrednosti = Object.values(osoba);
const nizKljuceva = Object.keys(osoba);
const nizUlaza = Object.entries(osoba);
const objj = Object.fromEntries(nizUlaza);

console.log("Kljucevi: ", nizKljuceva);
console.log("Vrednosti: ", nizVrednosti);
console.log("Ulazi: ", nizUlaza);
console.log("Novi objekat nastao iz ulaza: ", objj);

const auto = {
  marka: "audi",
  godiste: 2008,
  model: "a3",
};

const auto2 = {
  // spread operator ali za objekte
  ...auto,
  marka: "bmw",
  godiste: 2003,
  mau: "nzm",
};

const auto3 = Object.assign({}, auto, { godina: 2025, boja: "crna" }); // spread operator ali za objekte

const auto4 = Object.create(auto);
console.log(auto4.godiste);
