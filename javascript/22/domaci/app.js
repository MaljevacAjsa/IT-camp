// 1. Neka HTML ima <a href="https://example.com">Link</a> – prikaži href u konzoli.
const link = document.getElementById("myLink");
console.log(link.href); // .href da bi se prikazao href, kroz dot notaciju pristupamo atributima

// 2. Kreiraj <img> bez src u HTML-u, a u JS postavi src.
const img = document.getElementById("myImage");
img.src = "https://via.placeholder.com/150"; // opet dot notacijom pristupamo atributu src iz img varijable, tj taga

// 3. Neka dugme bude disabled, a klik na drugo dugme ga omogućava.
const enBtn = document.getElementById("enableBtn");
const dsBtn = document.getElementById("targetBtn");
enBtn.classList.add("btn");
enBtn.addEventListener("click", () => {
  dsBtn.disabled = false;
  dsBtn.classList.add("btn");
});

// 4. Kreiraj <div> sa data-info="Test info" i pročitaj ga pomoću dataset.
const infoDiv = document.getElementById("infoDiv");
console.log(infoDiv.dataset.info);

// 5. Dodaj klasu highlight na neki paragraf.
document.getElementById("myParagraph").classList.add("highlight");

// 6. Ukloni klasu active sa dugmeta kad se klikne.
const btn = document.getElementById("activeBtn");
btn.addEventListener("click", function () {
  this.classList.remove("active");
  this.classList.add("unactive");
});

const darkBtn = document.getElementById("toggleDark");
darkBtn.classList.add("btn");
// 7. Na klik dugmeta dodaj/ukloni klasu dark-mode na body.
darkBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode"); // toggle jer proverava da li je klasa vec prisutna i ako nije doda je
});

// 8. Napravi <button>. Kada se klikne, neka promeni tekst u "Kliknuto!"
const clickMeBtn = document.getElementById("clickMeBtn");
clickMeBtn.classList.add("btn");
clickMeBtn.addEventListener("click", function () {
  this.textContent = "Kliknuto!";
});

// 9. Napravite <div> i <button>. Klikom na dugme menjaš boju <div> (ako je bela ➜ crvena ➜ bela).
let isWhite = true;

const box = document.getElementById("colorBox");
const toggleBtn = document.getElementById("toggleColor");

toggleBtn.addEventListener("click", () => {
  box.style.backgroundColor = isWhite ? "rgb(170, 57, 57)" : "white";
  isWhite = false;
});

// 10. Kada pređeš mišem preko <div>, neka mu se poveća širina. Kada miš ode, vrati se na staro.
const hoverBox = document.getElementById("hoverBox");

hoverBox.addEventListener("mouseenter", () => {
  hoverBox.style.width = "200px";
});

hoverBox.addEventListener("mouseleave", () => {
  hoverBox.style.width = "100px";
});

// 11. Na pritisak tastera "a" dodaj novi <p> sa tekstom "Pritisnuto A" u <body>.
document.addEventListener("keydown", (e) => {
  if (e.key === "a" || e.key === "A") {
    const p = document.createElement("p");
    p.textContent = "Pritisnuto A";
    document.body.appendChild(p);
  }
});

// 12. Dugme koje broji koliko puta je kliknuto i ispisuje taj broj u <p>.
let count = 0;

const counterBtn = document.getElementById("counterBtn");

counterBtn.addEventListener("click", () => {
  count++;
  document.getElementById("countDisplay").textContent = `Kliknuto: ${count}`;
});

// 13. Klik na dugme ➜ dodaje novi list item sa tekstom "List item i odgovarajuci broj po redu" ispod.
let itemCount = 1;

const addItemBtn = document.getElementById("addItemBtn");

addItemBtn.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = `List item ${itemCount++}`;
  document.getElementById("myList").appendChild(li);
});
