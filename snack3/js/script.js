// snack3
// Scrivi una funzione che fonda due array (con lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro
// es. [a,b,c], [1,2,3] → [a,1,b,2,c,3]
var array1 = [1, 2, 3, 4, 5];
var array2 = ['a', 'b', 'c', 'd', 'e'];
console.log(join(array1, array2));

function join(array1, array2) {
  if (array1.length == array2.length) {
    var arrayEmpty = [];
    for (var i = 0; i < array1.length; i++) {
      arrayEmpty.push(array1[i], array2[i]);
    }
    return arrayEmpty;
  }
  return false
}
