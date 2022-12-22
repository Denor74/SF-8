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

// Побитовые операции не соответствуют обычным логическим операторам.
console.log(1 || 0);
console.log(1 | 0);
//-> 1
//-> 1
console.log(true || false);
console.log(true | false);
//-> true
//-> 1
console.log(1 || 2);
console.log(1 | 2);
//-> 1
//-> 3
console.log(0 || 'Привет');
console.log(0 | 'Привет');
//-> Привет
//-> 0
console.log(!(true && 2));
console.log(!(true & 2));
//-> false
//-> true
console.log(~!true);
console.log(~~true);
//-> -1
//-> 1
console.log(!!1);
console.log(!~1);
//-> true
//-> false

// Законы де Моргана
console.log('Законы Моргана');



// Задание 8.3.1
console.log('Задание 8.3.1');
console.log(false == false == false == false);

const name = 'Антон' && ('Борис' || 'Вадим') && !'Гарик' && 'Данил';
console.log(name);
console.log('Задание 8.3.4');
console.log(false == '00x00');
console.log(true || 1024 << 6 && 'ИСТИНА' ** 3);
console.log(true == ~!1);
console.log(1 !== true);
console.log(true == 'true');
console.log(true && 1);
console.log(!false != !true);
console.log(true === 1);
console.log('${5 - (3 + 2)}' == false);
console.log(true == '0b0000001');