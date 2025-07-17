const name = document.getElementById("ime");
const surname = document.getElementById("prezime");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passConfirm = document.getElementById("confirmPassword");
const dob = document.getElementById("dob");
const genderInputs = document.querySelectorAll("input[name='gender']");
const terms = document.getElementById("terms");
const submitBtn = document.querySelector("button");
const form = document.getElementById("registerForm");

const inputs=document.querySelectorAll("input")

// const inputs = [name, surname, email, password, passConfirm, dob];

inputs.forEach(input,(event)=>{
    input.addEventListener("input",(event)=>{
        console.log(event.target.value)
    })
});

// name.addEventListener("input", (event) => {
//   console.log(event.target.value);
// });

// surname.addEventListener("input", (event) => {
//   console.log(event.target.value);
// });

// password.addEventListener("input", (event) => {
//   console.log(event.target.value);
// });

// passConfirm.addEventListener("input", (event) => {
//   console.log(event.target.value);
// });

// email.addEventListener("input", (event) => {
//   console.log(event.target.value);
// });

inputs.forEach(input => {
  input.addEventListener("focus", () => {
    input.classList.remove("blurred");
    input.style.border = "2px solid green";
  });
  input.addEventListener("blur", () => {
    input.style.border = "2px solid red";
    input.classList.add("blurred");
  });
});

 form.addEventListener("submit", (event) => {
  event.preventDefault(); 

  const selectedGender = [...genderInputs].find(input => input.checked)?.value || "";

  let isValid = true;
  let messages = [];

  if (!name.value.trim()) {
    isValid = false;
    messages.push("Ime je obavezno.");
  }

  if (!surname.value.trim()) {
    isValid = false;
    messages.push("Prezime je obavezno.");
  }

  if (!email.value.trim()) {
    isValid = false;
    messages.push("Email je obavezan.");
  } else if (email.value==="") {
    isValid = false;
    messages.push("Email nije validan.");
  }

  if (!password.value || !passConfirm.value) {
    isValid = false;
    messages.push("Obe lozinke su obavezne.");
  } else if (password.value !== passConfirm.value) {
    isValid = false;
    messages.push("Lozinke se ne poklapaju.");
  }

  if (!dob.value) {
    isValid = false;
    messages.push("Datum rođenja je obavezan.");
  }

  if (!selectedGender) {
    isValid = false;
    messages.push("Pol je obavezan.");
  }

  if (!terms.checked) {
    isValid = false;
    messages.push("Morate prihvatiti uslove korišćenja.");
  }

  if (!isValid) {
    alert("Greške:\n" + messages.join("\n"));
    return;
  }

  const person = {
    name: name.value,
    surname: surname.value,
    email: email.value,
    password: password.value,
    confirmPassword: passConfirm.value,
    dob: dob.value,
    gender: selectedGender,
    termsAccepted: terms.checked,
  };

  console.log("✅ Podaci su validni i sačuvani:", person);

  form.reset();

  inputs.forEach(input => {
    input.style.border = "";
    input.classList.remove("blurred");
  });
});
