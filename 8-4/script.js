let a = prompt('Введите число:', '2');

if (a > 0) {
  console.log('Число положительное'); 
} else if (a < 0) {
  console.log('Число отрицательное'); 
} else {
  console.log('Это ноль'); 
};

console.log('Тернарный оператор'); 



if (a > 0) {
  result1 = 'Число положительное'; 
} else {
  result1 = 'Число не положительное'; 
};
console.log('result1 = ' + result1);

// или

let result2 = (a > 0) ? 'Число положительное' : 'Число не положительное';
console.log('result = ' + result2);

// switch
console.log('switch');

const month = prompt('Введите номер месяца', '1');
switch (month) {
  case '12':
    alert('Декабрь');
    break;
  case '1':
    alert('Январь');
    break;
  case '2':
    alert('Февраль');
    break;
  case '11':
    alert('Зима близко');
    break;
  default:
    alert('До зимы еще далеко');
}

console.log('Задание 8.4.2');
let currentRingOwner;
let firstRingOwner = "Smeagol" || "Bildo" || "Frodo" || "Sam";
let secondRinfOwner; //= "Smeagol" && "Bildo" || "Frodo" && "Sam";
console.log("secondRinfOwner - " + secondRinfOwner);
let thirstRingOwner = secondRinfOwner = "Smeagol"  ? "Frodo" : "Smeagol";
console.log("firstRingOwner - " + firstRingOwner);
console.log("secondRinfOwner - " + secondRinfOwner);
if (firstRingOwner == secondRinfOwner) {
  currentRingOwner = "Sam"
} else {
  currentRingOwner = "Bildo"
};
console.log("currentRingOwner - " + currentRingOwner);