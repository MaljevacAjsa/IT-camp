const inner = document.querySelector(".inner");
const middle = document.querySelector(".middle");
const outer = document.querySelector(".outer");

inner.addEventListener("click", (event) => {
  event.currentTarget.classList.toggle("clicked");
});

middle.addEventListener("click", (event) => {
  event.stopPropagation(); // zasto ovde mora stopPropagation() ako dodajemo klasu samo na currentTarget
  event.currentTarget.classList.toggle("clicked");
});

outer.addEventListener("click", (event) => {
  event.currentTarget.classList.toggle("clicked");
});

// kako birati sve elemente

const divs = document.querySelectorAll("div");

divs.forEach((div) => {
  div.addEventListener("click", () => {
    console.log("klik");
  });
});

document.addEventListener("click", (event) => {
  if (event.target.matches("div")) {
    //matches()
    console.log("klik na div");
  }
});

const input = document.getElementById("input");
input.addEventListener("keydown", (event) => {
  console.log("Pritisnut taster:", event.key); // event.key
});

//.preventDefault() zaustavlja default ponasanje
