const btn = document.getElementById("btn");
console.log(name);

btn.addEventListener("click", () => {
  const name = document.getElementById("name").value.trim();
  localStorage.setItem("ime", name);
  //   alert(`Zdravo ${localStorage.getItem("ime")}`);
});
if (localStorage.getItem("ime")) {
  document.writeln(`Zdravo ${localStorage.getItem("ime")}`);
}

const theme = document.getElementById("theme");
document.body.style = "background-color:black";

theme.addEventListener("click", () => {
  if (document.body.style.backgroundColor == "black") {
    document.body.style.backgroundColor = "white";
    localStorage.setItem("theme", "light");
  } else {
    document.body.style.backgroundColor = "black";
    localStorage.setItem("theme", "dark");
  }
});

if (localStorage.getItem("theme") == "dark") {
  document.body.style.backgroundColor = "black";
} else {
  document.body.style.backgroundColor = "white";
}

// JSON.stringify(user) da saljemo u localStorage kao string

// JSON.parse(user) da uzmemo iz localStorage da koristimo
