let authorized = false;
console.log(authorized);
// -> false

// Присваивать булевым переменным значения можно в результате вычисления выражений:
const role = 'user';
const isAdmin = role === 'admin';
console.log(isAdmin);
// -> false
const rate = 6;
const isHighRate = rate > 5;
console.log(isHighRate);
// -> true

// И присваивать их от других значений и функций:
const exampleBoolean = Number.isNaN(Infinity - Infinity);
const secondExampleBoolean = exampleBoolean;
console.log(secondExampleBoolean);
// -> true

// Для хранения булевых данных в JavaScript используется отдельный тип — boolean:
const exampleBool = true;
console.log(typeof(exampleBool));
// -> boolean