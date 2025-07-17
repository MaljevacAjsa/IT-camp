console.dir(document);

const paragraf = document.getElementById("par");

const parKlasaPrvi = document.getElementsByClassName("parKlasa")[0]; //vraca prvi element niza
const parKlasaSvi = document.getElementsByClassName("parKlasa"); //vraca niz
console.log(document.getElementsByTagName("p"));

document.querySelector("#par"); // vraca prvo podudaranje
document.querySelectorAll("#par"); // vraca niz svih podudaranja

const p = document.createElement("p");
document.body.appendChild(p); // moze da appenda elemente i stariji je nacin
document.body.append(); // moze da appenda SVE i noviji je nacin
p.append("ajsa");

const p2 = document.getElementById("par2");
p2.innerText = "ajsa2";

const div1 = document.createElement("div");
div1.textContent = "div1";
document.body.append(div1);
div1.innerHTML = "<p>MAU</p>";

const paragraf1 = document.createElement("p");
paragraf1.innerText = "PARAGRAF";
div1.appendChild(paragraf1);

// 2. Koristi append da dodaš
// novi paragraf u postojeći div.

// Kreiraj div u HTML-u,
// a u JavaScript-u napravi novi <p> element
//  i dodaj ga pomoću append.

const container = document.getElementById("container");
const paragraf2 = document.createElement("p");
paragraf2.textContent = "div";
container.append(paragraf2);

// 3. Koristi appendChild da dodaš <li> u postojeću <ul>.
// Neka lista ima već bar jedan <li>,
// a ti dodaj još jedan pomoću appendChild.

const lista2 = document.getElementById("lista2");
const listItem = document.createElement("li");
listItem.textContent = `List item 2`;
lista2.appendChild(listItem);

// 4. Koristi createElement da napraviš novi <button> i
// prikaži ga na stranici.
// Postavi mu neki tekst i dodaj ga u telo dokumenta.

const newBtn = document.createElement("button");
newBtn.textContent = "SUBSCRIBE";
newBtn.classList.add("subscribe");
document.body.appendChild(newBtn);

// <div> span
// 5. Istraži razliku između innerText i textContent.
// Kreiraj element i isprobaj oba svojstva na istom elementu.
// Neka studenti uporede rezultate kad postoji display: none.

const testDiv = document.createElement("div");
testDiv.innerHTML = `
    <span style="display:none">Hidden</span>
    <span>Visible</span>
`;
document.body.append(testDiv);

const textContentP = document.createElement("p");
textContentP.textContent = testDiv.textContent; // uljucuje "HiddenVisible"
document.body.append(textContentP);

const innerTextP = document.createElement("p");
innerTextP.innerText = testDiv.innerText; // ukljucuje samo "Visible"
document.body.append(innerTextP);

// 6. Koristi innerHTML da dodaš HTML kod u neki div.

// Neka div na početku bude prazan, a JavaScript neka ubaci <h2> i neki tekst.

// 7. Koristi remove da obrišeš neki element sa stranice.

// Neka dugme briše <p> kada se klikne.

// 8. Koristi removeChild da obrišeš <li> iz <ul>.
// Neka lista ima više stavki, obriši drugu stavku.

const lista = document.getElementById("list");
lista.removeChild(lista.getElementsByTagName("li")[1]);

// 9. Kreiraj novi <div> pomoću createElement i dodaj ga u body pomoću appendChild.
// Napiši neki tekst unutar tog <div> pomoću innerText.

// 10. Napravi dva <p> elementa i dodaj oba u jedan <div> pomoću append.
// Neka <div> već postoji u HTML-u.

// 11. Koristi textContent da dodaš tekst u <h1> element koji već postoji u HTML-u.

// 12. Napravi <button> koji kada se klikne doda novi <li> u <ul>.

// 13. Napravi <button> koji kada se klikne obriše <div> pomoću remove.

// 14. Kreiraj prazan <div> i pomoću innerHTML ubaci dva <p> unutar njega odjednom.

// 15. Kreiraj prazan <ul>, pa pomoću petlje (for) dodaj 5 <li> stavki pomoću appendChild.

// 16. Napravi <button> koji kada se klikne uklanja poslednji <li> iz <ul> pomoću removeChild.

// 17. Kreiraj <button> koji dodaje tekst "Kliknuto!" na kraj <div> pomoću append.

// 18. Pomoću createElement napravi <span>, dodaj mu tekst pomoću textContent i ubaci ga u <p>.
