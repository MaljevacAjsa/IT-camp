const objekat = {
  key: "value",
  kljuc: "vrednost",
  "user name": "ajsa.maljevac",
};

objekat["zanimanje"] = "programer";
objekat.hobi = "trening";

delete objekat.key;

objekat["hobiji"] = ["ajsa", "sije", "programira", "trenira", "mjauce"];

for (let i = 0; i < objekat.hobiji.length; i++) {
  console.log(objekat.hobiji[i]);
}
const telefon = {
  brend: "ajfon",
  model: "fajf",
  cena: "miljion",
};

delete telefon.cena;
