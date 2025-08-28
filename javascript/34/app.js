function createPostElement(post) {
  const div = document.createElement("div");
  div.classList.add("div");
  const h2 = document.createElement("h2");
  h2.innerText = post.title;
  const p = document.createElement("p");
  p.innerText = post.body;
  div.append(h2, p);
  return div;
}

function renderPost(post) {
  const mainContainer = document.getElementById("main_container");
  mainContainer.append(createPostElement(post));
}

async function getPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    const mainContainer = document.getElementById("main_container");
    mainContainer.classList.add("main-container");
    posts.forEach(renderPost);
  } catch (e) {
    console.log(e.message);
  }
}

function closeModal() {
  overlay.style.display = "none";
  document.getElementById("add_post").style.backgroundColor = "green";
}

function setupModal() {
  const addPostBtn = document.getElementById("add_post");
  const addBtn = document.getElementById("add");
  overlay = document.getElementById("overlay");
  modalDiv = document.getElementById("modal");
  [addPostBtn, addBtn].forEach((btn, i) => {
    btn.classList.add("btn");
  });
  addPostBtn.addEventListener("click", () => {
    addPostBtn.style.backgroundColor = "darkGreen";
    overlay.style.display = "flex";
  });
  addBtn.addEventListener("click", async () => {
    const modalTitle = document.getElementById("modalh2").value;
    const modalText = document.getElementById("modalp").value;
    const newObject = { title: modalTitle, body: modalText, userId: 1 };
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newObject),
      });
      const data = await res.json();
      renderPost(data);
      closeModal();
    } catch (e) {
      console.log(e.message);
    }
  });
}

window.onclick = function (event) {
  if (event.target === overlay) {
    closeModal();
  }
};

let overlay, modalDiv;
getPosts();
setupModal();
