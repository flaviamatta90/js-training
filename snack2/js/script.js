// snack2
// Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)

// function reverse(word) {
//     var splitArray = word.split("");
//
//     var reverseArray = splitArray.reverse();
//
//     var joinArray = reverseArray.join("");
//
//     return joinArray;
// }
// console.log(reverse("CIAO"));


function reverse(word) {

    var arrayEmpty = "";

    for (var i = word.length - 1; i >= 0; i--) {
        arrayEmpty += word[i];
    }
    return arrayEmpty;
}
console.log(reverse("CIAO"));
