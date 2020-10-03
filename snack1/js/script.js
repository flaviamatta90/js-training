// snack1

// Fai inserire un numero, che chiameremo N, all’utente.
var n = parseInt(prompt("Inserisci un numero"));

// Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100.
// funzione standard per i numeri random
function random(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// numeri scelti dall'utente + numeri casuali
var arrayVuoto = [];

for (var i = 0; i < n; i++) {
  for (var y = 0; y < 10; y++){
    arrayVuoto.push(random(1,100));
  }
}

// Ogni volta che ne crei uno, stampalo a schermo.
document.write("il numero scelto dall'utente --> " + n + " " + "e i numeri random da 1 a 100 --> " + arrayVuoto);
