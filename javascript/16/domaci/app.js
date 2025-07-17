// Izdvoji stringove koji sadrže slovo 'a'.
// ['mama', 'tata', 'brat', 'oko'] → ['mama', 'tata', 'brat']

// let niz = ["mama", "tata", "brat", "oko"];

// function IzdvojiA(niz) {
//   return niz.filter((el) => el.includes("a"));
// }

// Niz reči. Izdvoji samo one koje počinju velikim slovom.
// ['Ana', 'marko', 'Luka'] → ['Ana', 'Luka']

// let niz = ["2Ana", "marko", "Luka"];

// function isLetter(str) {
//   return str.length === 1 && str.match(/[A-Z]/);
// }

// function velikoSlovo(niz) {
//   return niz.filter((el) => el[0] === el[0].toUpperCase() && isLetter(el[0]));
// }

// console.log(velikoSlovo(niz));

// Pronađi prvu reč koja sadrži slovo "z".
// ['sunce', 'zebra', 'mačka'] → 'zebra'

// let niz = ["sunce", "zebra", "mačka"];

// function slovoZ(niz) {
//   return niz.find((el) => el.toLowerCase().includes("z"));
// }

// console.log(slovoZ(niz));

// Niz stringova. Pronađi prvi string koji je palindrom.
// ['oko', 'ana', 'kuća'] → 'oko'

// let niz = ["oko", "ana", "kuća"];

// function prviPalindrom(niz) {
//   return niz.find((el) => el === el.split("").reverse().join(""));
// }

// console.log(prviPalindrom(niz));

// Imaš niz reči. Vrati niz brojeva koji predstavljaju broj samoglasnika u svakoj reči.
// ['auto', 'kuća', 'program'] → [3, 2, 2]

// let niz = ["auto", "kuća", "program"];

// function brojSamoglasnika(niz) {
//   const samoglasnici = "aeiouAEIOU";
//   return niz.map((el) => {
//     let brojac = 0;
//     for (let slovo of el) {
//       if (samoglasnici.includes(slovo)) {
//         brojac++;
//       }
//     }
//     return brojac;
//   });
// }
// console.log(brojSamoglasnika(niz));

// Napiši funkciju koja
//

//     vraća koliko jedno ime ima slova

// function brojSlova(ime) {
//     return ime.length;
// }
// console.log(brojSlova("ajsa"));
//

//     pretvori string u velika slova

// function uVelikaSlova(str) {
//   return str.toUpperCase();
// }
// console.log(uVelikaSlova("ajsa"));
//

//     iz stringa imena i prezimena napravi inicijale dakle iz 'Ajsa Besirovic' => 'A.B.'
// function inicijali(ime) {
//   ime
//     .split(" ")
//     .map((el) => el[0].toUpperCase())
//     .join(".") + ".";
// }
// console.log(inicijali("ajsa MAljevac"));
//

//     pretvori rečenicu u niz reči, primer '     Hello world    ' => ['Hello','world']

// function uNizReci(recenica) {
//   return recenica.trim().split(/\s+/);
// }
// console.log(uNizReci("            a   bhcxv         "));
//

//     filtriraj reči kraće od 5 slova iz stringa

// function rečiKraćeOd5(str) {
//   return str.split(" ").find((el) => el.length < 5);
// }
// console.log(rečiKraćeOd5("ajsa ajsaa aaaaaa aki"));
//

//     broji koliko puta se neko slovo pojavljuje u stringu

// function brPojavljivanja(str, slovo) {
//   let brojac = 0;
//   for (let char of str) {
//     if (char.toLowerCase() === slovo.toLowerCase()) {
//       brojac++;
//     }
//   }
//   return brojac;
// }
// console.log(brPojavljivanja("AJSA MALJEVAC", "a"));
//

//     proverava da li je string palindrom (reverse)
// function isPalindrom(str) {
//   let cist = str.replace(/\s+/g, "").toLowerCase();
//   return cist === cist.split("").reverse().join("");
// }
// console.log(isPalindrom("ak a ka"));

//     formatira email adresu korisnika, prima ime i prezime vraca 'ajsabesirovic@gmail.com'
// function isLetter(str) {
//   return /^[a-zA-Z]+$/.test(str);
// }
// function formatEmailAdress(ime, prezime) {
//   if (!isLetter(ime) || !isLetter(prezime))
//     return "Unesite samo slova od A do Z";
//   return ime.toLowerCase() + prezime.toLowerCase() + "@gmail.com";
// }
// console.log(formatEmailAdress("aJsa", "MAljevaC"));
// console.log(formatEmailAdress("aJs2a", "MAljevaC"));

//     iz stringa pronađe sve reči koje počinju velikim slovom i vrati ih kao niz
// function reciVelikihSlova(str) {
//   return str
//     .split(/\s+/)
//     .filter(
//       (el) => el[0] && el[0] === el[0].toUpperCase() && /[A-Z]/.test(el[0])
//     );
// }
// console.log(reciVelikihSlova("tedi Ajsa ajla Luka luka"));
