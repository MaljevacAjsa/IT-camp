// 2. Fetch podataka sa API-ja

// Koristi fetch (npr. JSONPlaceholder) i napiši async funkciju getUsers koja:
// preuzima listu korisnika,
// parsira JSON,
// ispisuje u konzoli imena svih korisnika.

async function getUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/userss");
    const users = await response.json();
    users.forEach((user) => {
      console.log(user.name);
    });
  } catch (error) {
    console.log(error);
  }
}

getUsers();

// 3. Error handling

// Napravi async funkciju getPost koja:
// prima id posta kao parametar,
// pokušava da dohvati post sa "https://jsonplaceholder.typicode.com/posts/{id}",
// ako API vrati grešku (npr. id = -1), prikaže "Greška pri dohvatanju podataka".

// 👉 Koristi try...catch blok.

async function getPost(id) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const post = await response.json();
    console.log(post);
  } catch (error) {
    console.log(error.message);
  }
}

getPost(1);
getPost(-1);

// 4. Višestruki async pozivi

// Napiši async funkciju getUserAndPosts(userId) koja:

// Dohvata korisnika sa "https://jsonplaceholder.typicode.com/users/{userId}",
// Zatim dohvata sve postove tog korisnika sa "https://jsonplaceholder.typicode.com/posts?userId={userId}",
// Na kraju ispisuje korisnikovo ime i broj njegovih postova.

async function getUserAndPosts(userId) {
  try {
    const userResponse = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    if (!userResponse.ok) throw new Error();
    const user = await userResponse.json();

    const postsResponse = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
    if (!postsResponse.ok) throw new Error();
    const posts = await postsResponse.json();

    console.log(`${user.name} ima ${posts.length} postova.`);
  } catch (error) {
    console.log("Greška pri dohvatanju korisnika ili postova");
  }
}

getUserAndPosts(1);

// 5. Paralelno vs. sekvencijalno

// Napravi dve async funkcije:

// getDataSlow() – vraća Promise koji se reši posle 3 sekunde,
// getDataFast() – vraća Promise koji se reši posle 1 sekunde.

//  6. Mini zadatak – vežba sa loop-om

//     Napravi async funkciju printNumbers koja:
//     koristi for petlju od 1 do 5,
//     na svakoj iteraciji čeka 1 sekundu (uz await new Promise + setTimeout),
//     ispisuje trenutni broj.

async function printNumbers() {
  for (let i = 1; i < 6; i++) {
    await new Promise((resolve) => setTimeout(() => resolve, 1000));
    console.log(i);
  }
}

printNumbers();

// 7.

// Napravi async funkciju searchPosts(keyword) koja:
// dohvata sve postove sa "https://jsonplaceholder.typicode.com/posts",
// filtrira one čiji naslov (title) sadrži zadati keyword,
// vraća listu filtriranih postova.

// 👉 Bonus: ako nema rezultata, vrati "Nema postova za dati keyword".

async function searchPosts(keyword) {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = response.json();
    const filtered = posts.filter((post) => {
      if (post.title.toLowerCase().includes(keyword.toLowerCase())) {
        return post;
      } else {
        return "Nema postova za zadati keyword";
      }
    });
  } catch (error) {
    console.error(error.message);
  }
}

console.log(searchPosts("key"));
