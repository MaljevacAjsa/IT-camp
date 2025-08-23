async function getPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    posts.forEach((post) => {
      console.log(post);
      const div = document.createElement("div");
      const h2 = document.createElement("h2");
      const p = document.createElement("p");
      p.innerText = post.body;
      h2.innerText = post.title;
      div.append(h2);
      div.append(p);
      div.style.border = "1px solid black";
      div.style.borderRadius = "10px";
      div.style.padding = "20px";
      const main_container = document.getElementById("main_container");
      main_container.style.display = "flex";
      main_container.style.flexDirection = "column";
      main_container.style.gap = "20px";
      main_container.style.padding = "20px 10px";
      main_container.append(div);
    });
  } catch (e) {
    console.log(e.message);
  }
}

getPosts();
let overlay, modalDiv;

async function addInput() {
  const button = document.getElementById("add_post");
  const buttonadd = document.getElementById("add");
  const upper_div = document.getElementById("upper_div");
  overlay = document.getElementById("overlay");
  modalDiv = document.getElementById("modal");
  button.style.height = "40px";
  button.style.width = "100px";
  button.style.borderRadius = "5px";
  button.style.backgroundColor = "green";
  button.style.border = "none";
  button.style.color = "white";
  button.style.cursor = "pointer";
  buttonadd.style.height = "40px";
  buttonadd.style.width = "80px";
  buttonadd.style.borderRadius = "5px";
  buttonadd.style.backgroundColor = "green";
  buttonadd.style.border = "none";
  buttonadd.style.color = "white";
  buttonadd.style.cursor = "pointer";
  button.addEventListener("click", () => {
    button.style.backgroundColor = "darkGreen";
    overlay.style.display = "flex";
  });
  buttonadd.addEventListener("click", () => {});
  const modalTitle = document.getElementById("modalh2").value;
  const modalText = document.getElementById("modalp").value;
  const newObject = {
    modalTitle: modalTitle,
    modalText: modalText,
  };
  async function post(params) {
    try {
      await fetch(``, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newObject),
      });
    } catch (e) {
      console.log(e.message);
    }
  }
}

addInput();

function closeModal() {
  overlay.style.display = "none";
  document.getElementById("add_post").style.backgroundColor = "green";
}

window.onclick = function (event) {
  if (event.target === overlay) {
    closeModal();
  }
};

// async function added(params) {}
// const
// (params) => {};
