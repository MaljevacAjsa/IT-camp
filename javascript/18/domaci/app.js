// Ispiši sve ključeve nekog objekta.
const obj = { jedan: 1, dva: "2", tri: 3 };
console.log(Object.keys(obj));

// Saberi samo numeričke vrednosti.
const sum = Object.values(obj).reduce(
  (acc, val) => (typeof val === "number" ? acc + val : acc),
  0
);
console.log(sum);

// Prikaži "ključ: vrednost" koristeci forEach i entries
Object.entries(obj).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});

// Napravi novi objekat koji kombinuje oba objekta na dva nacina
const obj2 = { cetiri: 4, pet: 5 };

const combined1 = Object.assign({}, obj, obj2);
console.log(combined1);

const combined2 = { ...obj, ...obj2 };
console.log(combined2);

// Napravi novi objekat gde su ključevi i vrednosti zamenjeni
const swapped = Object.fromEntries(
  Object.entries(obj).map(([key, value]) => [value, key])
);
console.log(swapped);

// Napravi funkciju koja proverava da li objekat ima svojstvo koje prosledite kao argument, i vratite 'ima' ili 'nema'
function proveriSvojstvo(obj, svojstvo) {
  return obj.hasOwnProperty(svojstvo) ? "ima" : "nema";
}
console.log(proveriSvojstvo(obj, "dva"));
console.log(proveriSvojstvo(obj, "pet"));

// Napravi novi objekat koji sadrži samo "truthy" polja
const truthyObj = Object.fromEntries(
  Object.entries(obj).filter(([_, value]) => Boolean(value))
);
console.log(truthyObj);
