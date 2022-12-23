
console.log("nul");
const firstNull = document.getElementById('anything-not-exist'); // getElementById - Возвращает ссылку на элемент по его идентификатору 
const secondNull = null;

console.log(firstNull);
console.log(secondNull);


// -> null
// -> null

console.log("undefined");
let undefinedVar;
console.log (undefinedVar);
// -> undefined