/**
 *  Challenge Quizz
 *
 * Pour ce challenge, suit les instructions dans le fichier README.md
 * Et écris ton code ici même !
 */

/* Exo 1 */
// Ton code ici...

let compteur = 0;
const question1 = "quelle mer borde la ville de Sébastopol ?";
const solution1 = "la mer noire";

/* Exo 2 */
// Ton code ici...

const reponse1 = prompt(question1);
// let reponse1 = promot(`${question1}`); //
console.log(reponse1);

if (reponse1 === solution1) {
  // compteur = compteur + 1;
  // compteur += 1;
  compteur++;
  alert("Gagné !");
} else {
  alert("Perdu ...");
}

/* Exo 3 */
// Ton code ici...

const question2 = "Quel est l'âge du capitaine ?";
const solution2 = 63;
console.log(typeof solution2);

const reponse2 = prompt(question2);

if (parseInt(reponse2) === solution2) {
  compteur++;
  alert("Gagné !");
} else {
  alert("Perdu ...");
}

alert(`${compteur} points !`);
