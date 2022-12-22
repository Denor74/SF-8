let a = prompt('Введите число:', '2');

if (a > 0) {
  console.log('Число положительное'); 
} else if (a < 0) {
  console.log('Число отрицательное'); 
} else {
  console.log('Это ноль'); 
};

console.log('Тернарный оператор'); 

let result1;

if (a > 0) {
  result1 = 'Число положительное'; 
} else {
  result1 = 'Число не положительное'; 
};
console.log('result1 = ' + result1);

// или

let result = (a > 0) ? 'Число положительное' : 'Число не положительное';
console.log('result = ' + result);

