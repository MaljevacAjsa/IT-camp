const par = document.getElementById("paragraf");
par.style.color = "white";
par.style.fontFamily = "Arial";
par.style.backgroundColor = "pink";
par.style.fontSize = "40px";

console.dir(par);

par.classList.add("class", "treca");

par.id = "nst";
console.dir(par);

console.log(par.getAttribute("id"));
console.log(par.getAttribute("class"));

par.setAttribute("title", "naslov");
par.title = "Novi naslov";
par.removeAttribute("title");

const par2 = document.getElementById("paragraf2");

par2.class = "prva"; // read only

par2.className = "prva"; // menja vrednost
par2.className += " druga"; // dodaje vrednost

par2.setAttribute("class", "prva");
par2.setAttribute("class", "prva druga treca");

const par3 = document.getElementById("paragraf3");
par3.classList.add("treca", "cetvrta");

if (par2.classList.contains("prva")) {
  par.classList.remove("prva");
} else {
  par.className += "prva";
}

par3.classList.toggle("druga");

const par4 = document.getElementById("paragraf4");
par4.classList.toggle("treca"); // toggle

par2.classList.replace("druga", "cetvrta"); // replace

par3.setAttribute("style", "padding: 10px; text-align:center;font-size:25px");
console.log(par3.classList.length);

const btn = document.querySelector("button"); // class, id ili tag

const p = document.getElementById("click");
btn.addEventListener("click", () => {
  p.innerText = "Clicked";
});

const link = document.getElementById("link");
console.log(link.getAttribute("href"));
