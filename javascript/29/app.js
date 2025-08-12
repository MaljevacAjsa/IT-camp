// LOCAL STORAGE

localStorage.setItem("name", "ajsa"); //traje zauvek na tom tabu dok mi manuelno ne izbrisemo
localStorage.setItem("surname", "maljevac");
localStorage.setItem("name", "ajla"); //menjamo vrednost kljuca

//dupli klik n akey ili value u local storage u browseru delete

console.log(localStorage.getItem("name")); //vraca vrednost

localStorage.removeItem("name");
//localStorage.clear();
// prazni ceo local storage

// SESSION STORAGE

sessionStorage.setItem("item1", "1"); // traje jednu sesiju
