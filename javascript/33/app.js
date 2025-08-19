async function waitAndPrint() {
  await new Promise((resolve, reject) => setTimeout(resolve, 2000));
  console.log("Gotovo cekanje");
}

waitAndPrint();

function cook(ability) {
  return new Promise((resolve, reject) => {
    const canCook = ability;
    if (canCook) {
      resolve("Bismillah");
    } else {
      reject("eye rol");
    }
  });
}

cook(true)
  .then((msg) => console.log(msg))
  .catch((msg) => console.log(msg));

function walkDog(result) {
  return new Promise((resolve, reject) => {
    const didWalk = result;
    if (didWalk) {
      resolve("You walked the dog!");
    } else {
      reject("You did walk the dog...");
    }
  });
}

function cleanTheHouse(isClean) {
  return new Promise((resolve, reject) => {
    const isCleaned = isClean;
    if (isCleaned) {
      resolve("MashaAllah, you cleaned the house!");
    } else {
      reject("InshaAllah you will clean the house now!");
    }
  });
}

async function results() {
  try {
    const walkDogResult = await walkDog(true);
    console.log(walkDogResult);
    const cleanTheHouseResult = await cleanTheHouse(false);
    setTimeout(() => console.log(cleanTheHouseResult), 3000);
  } catch (error) {
    console.error(error);
  }
}

results();
