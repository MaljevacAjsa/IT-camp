function Osoba(imeP, prezimeP) {
  this.ime = imeP;
  this.prezime = prezimeP;
  this.pozdrav = function () {
    console.log(`CAO ${this.ime}`);
  };
}

Osoba.prototype.pozdrav = function () {
  console.log(`CAO ${this.ime}`);
};

const najOsob = new Osoba("Ajsa", "Maljevac");
najOsob.pozdrav();

function Student(ime, prosek) {
  this.ime = ime;
  this.prosek = prosek;
}

Student.prototype.predstaviSe = function () {
  console.log(`Zdravo ja sam ${this.ime} i moj prosek je ${this.prosek}`);
};

const student1 = new Student("Ajsa", 5);
student1.predstaviSe();

function Auto(marka, godina) {
  Vozilo.call(this, "auto");
  this.marka = marka;
  this.godina = godina;
}

Auto.prototype.starost = function (trGodina) {
  return trGodina - this.godina;
};
const auto1 = new Auto("Audi", 2010);
console.log(auto1.starost(2025));
// const auto2 = Auto("Audi", 2010);
// console.log(auto2.starost(2025));

function Vozilo(tip) {
  this.tip = tip;
}
console.log(auto1);
