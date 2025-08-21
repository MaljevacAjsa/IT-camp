// 8. Čekanje u lancu

// Napiši async funkciju delayedMessages koja:
// prvo čeka 1 sekundu i ispisuje "Prva poruka",
// zatim čeka još 2 sekunde i ispisuje "Druga poruka",
// zatim čeka još 3 sekunde i ispisuje "Treća poruka".
// 👉 Testiraj i proveri da li se poruke ispisuju sa pravim pauzama.

// function delayedMessages() {
//   setTimeout(() => console.log("Prva poruka"), 1000);
//   setTimeout(() => console.log("Druga poruka"), 2000);
//   setTimeout(() => console.log("Treca poruka"), 3000);
// }

// delayedMessages();

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function delayedMessages() {
  await wait(1000);
  console.log("Prva poruka");

  await wait(2000);
  console.log("Druga poruka");

  await wait(3000);
  console.log("Treca poruka");
}

delayedMessages();
