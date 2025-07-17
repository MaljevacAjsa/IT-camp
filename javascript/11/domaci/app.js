// 1.

// let food = ["apple", "banana", "bread"];
// let drinks = ["water", "juice"];

// Napravi novi niz `menu` koji kombinuje hranu i piće
// Iz niza `menu` napravi string koji izgleda kao: "Menu: apple, banana, bread, water, juice"
// Ispiši koliko stavki ima u meniju i koji je poslednji element (koristi `.at()`)

// let food = ["apple", "banana", "bread"];
// let drinks = ["water", "juice"];

// let menu = food.concat(drinks);
// console.log("Menu: " + menu.join(", "));
// let lengthMenu = menu.length;
// console.log(lengthMenu);
// let lastElement = menu.at(-1);
// console.log(lastElement);

// 2.

// let cart = [];

// Dodaj redom: "laptop", "mouse", "headphones"
// Ukloni poslednji dodat proizvod i sačuvaj ga u promenljivoj `removed`
// Dodaj "keyboard" i "USB stick" na početak niza
// Ispiši trenutni sadržaj korpe, broj proizvoda i poziciju "mouse"

// let cart = [];
// cart.push("laptop", "mouse", "headphones");
// let removed = cart.pop();
// cart.unshift("keyboard");
// cart.unshift("USB stick");
// console.log(cart);
// console.log(cart.length);
// console.log(cart.indexOf("mouse"));

// 3.

// let movies = ["Inception", "Titanic", "Matrix", "Avatar"];

// Korisnik unosi naziv omiljenog filma (simuliraj sa pomocnom varijablom)
// Proveri da li film postoji u nizu
// Ako ne postoji, dodaj ga na kraj

// let movies = ["Inception", "Titanic", "Matrix", "Avatar"];
// let favouriteMovie = prompt("Unesite svoj omiljeni film: ");
// if (!movies.includes(favouriteMovie)) {
//   movies.push(favouriteMovie);
//   console.log(`Film ${favouriteMovie} je dodat u listu`);
// } else {
//   console.log(`Film ${favouriteMovie} je vec u listi`);
// }

// 4.

// let waitingList = ["Ana", "Marko", "Jelena", "Stefan"];

// Marko i Ana su odustali — ukloni ih iz liste
// Na početak liste dodaj "Ivana" i "Nikola"
// Proveri da li "Stefan" i dalje čeka, i na kojoj poziciji

// let waitingList = ["Ana", "Marko", "Jelena", "Stefan"];

// waitingList.splice(waitingList.indexOf("Ana"), 2);

// waitingList.unshift("Ivana", "Nikola");

// if (waitingList.includes("Stefan")) {
//   console.log(`Stefan je na poziciji ${waitingList.indexOf("Stefan")}`);
// } else {
//   console.log("Stefan nije na listi čekanja");
// }
