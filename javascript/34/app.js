let favorites = [];
let allPosts = [];

function createPostElement(post) {
  const div = document.createElement("div");
  div.classList.add("div");
  const h2 = document.createElement("h2");
  h2.innerText = post.title;
  const p = document.createElement("p");
  p.innerText = post.body;
  const heart = document.createElement("i");
  heart.classList.add("fa-solid", "fa-heart", "favoriteHeart");
  const favBtn = document.createElement("button");
  favBtn.innerText = "Add to favorites";
  favBtn.classList.add("favorite");
  if (favorites.some((fav) => fav.id === post.id)) {
    favBtn.innerText = "Remove from favorites";
    heart.style.color = "red";
  }
  favBtn.addEventListener("click", () => {
    const isFav = favorites.some((fav) => fav.id === post.id);
    if (!isFav) {
      favorites = [...favorites, post];
      favBtn.innerText = "Remove from favorites";
      heart.style.color = "red";
    } else {
      favorites = favorites.filter((fav) => fav.id !== post.id);
      favBtn.innerText = "Add to favorites";
      heart.style.color = "black";
    }
    console.log("Trenutni favoriti:", favorites);
  });
  const favDiv = document.createElement("div");
  favDiv.style.display = "flex";
  favDiv.style.alignItems = "center";
  favDiv.style.gap = "10px";
  favDiv.append(heart, favBtn);
  div.append(h2, p, favDiv);
  return div;
}

function renderPosts(posts) {
  const postsContainer = document.getElementById("posts");
  postsContainer.innerHTML = "";
  [...posts].reverse().forEach((post) => {
    const postEl = createPostElement(post);
    postsContainer.prepend(postEl);
  });
}

async function displayPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) throw new Error("Greska pri dohvatanju postova");
    allPosts = await response.json();
    renderPosts(allPosts);
  } catch (e) {
    document.getElementById(
      "posts"
    ).innerHTML = `<p style="color:red;">${e.message}</p>`;
  }
}
displayPosts();

function setupModal() {
  const addPostBtn = document.getElementById("add_post");
  const overlay = document.getElementById("overlay");
  const addBtn = document.getElementById("add");
  [addPostBtn, addBtn].forEach((btn) => {
    btn.classList.add("btn");
  });
  addPostBtn.addEventListener("click", () => {
    overlay.style.display = "flex";
    addPostBtn.style.backgroundColor = "darkGreen";
  });
  addBtn.addEventListener("click", async () => {
    const titleInput = document.getElementById("modalh2");
    const bodyInput = document.getElementById("modalp");
    const newObject = {
      id: Date.now(),
      title: titleInput.value,
      body: bodyInput.value,
    };
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newObject),
        }
      );
      await response.json();
      allPosts.unshift(newObject);
      renderPosts(allPosts);
      titleInput.value = "";
      bodyInput.value = "";
      closeModal();
    } catch (e) {
      console.log(e.message);
    }
  });
}
setupModal();

function closeModal() {
  document.getElementById("overlay").style.display = "none";
}
window.onclick = function (event) {
  const overlay = document.getElementById("overlay");
  if (event.target === overlay) {
    closeModal();
  }
};

document.getElementById("show_all").addEventListener("click", () => {
  renderPosts(allPosts);
});

document.getElementById("show_favorites").addEventListener("click", () => {
  renderPosts(favorites);
});
