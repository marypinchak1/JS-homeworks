// Task_1

/* const yourName = prompt(`Введіть Ваше ім'я:`)
alert(`Привіт, ${yourName}!`) */

// Task_2

/* const birthYear = Number(prompt(`Введіть Ваш piк народження:`))
const thisYear = 2023
let yourAge = thisYear - birthYear
if(birthYear>0){
alert(`Вам ${yourAge} років!`)
}else {
  alert("Ви ввели не вірні дані!");
} */

// Task_3

/* const squareHeigth = Number(prompt(`Введіть довжину сторони квадрата (см):`));
let squarePerimeter = squareHeigth * 4;
if (squareHeigth > 0) {
  alert(`Периметр квадрата ${squarePerimeter} см.`);
} else {
  alert("Ви ввели не вірні дані!");
}; */

// Task_4

/* const circleRadius = Number(prompt(`Введіть радіус кола (см):`));
let circleArea = Math.PI * Math.pow(circleRadius, 2);
if (circleRadius > 0) {
  alert(`Площа кола ${circleArea.toFixed(2)} см.`);
} else {
  alert("Ви ввели не вірні дані!");
} */

// Task_5

/* const distance = Number(
  prompt(`Введіть відстань до потрібного Вам місця призначення (км):`)
);
const time = Number(
  prompt(
    `Введіть час, за який Ви хотіли б дістатися до потрібного Вам місця призначення (год):`
  )
);
let speed = distance / time;
if (distance > 0 && time > 0) {
  alert(`Вам потрібно рухатись зі швидкістю ${speed} км/год.`);
} else {
  alert("Ви ввели не вірні дані!");
} */

// Task_6

/* const sumOfDollars = Number(prompt(`Введіть суму доларів:`));
const rateDollarEuro = 0.95;
let sumOfEuro = sumOfDollars * rateDollarEuro;
if (sumOfDollars > 0) {
  alert(`Ви отримаєте ${sumOfEuro.toFixed(2)} євро.`);
} else {
  alert("Ви ввели не вірні дані!");
} */

// Task_7

const capacityFlash = Number(prompt(`Введіть обсяг флешки (ГБ):`));
const mbInGb = 1024;
const sizeOfFile = 820;
let sumOfFiles =  Math.floor((capacityFlash * mbInGb) / sizeOfFile);
if (capacityFlash >= 0) {
  alert(`На флешку вміститься ${sumOfFiles.toFixed()} файлів.`);
} else {
  alert("Ви ввели не вірні дані!");
}

// Task_8

/* const sumOfMoney = Number(prompt(`Введіть суму грошей (грн.):`));
const priceOfChocolate = Number(prompt(`Введіть вартість шоколадки (грн.):`));
let sumOfChocolates = Math.floor(sumOfMoney / priceOfChocolate);
let changeAfterBuy = sumOfMoney - sumOfChocolates * priceOfChocolate;
if (sumOfMoney >= 0 && priceOfChocolate >= 0) {
  alert(
    `Ви можете купити ${sumOfChocolates} шоколадок. Ваша решта ${changeAfterBuy.toFixed(
      2
    )} грн.`
  );
} else {
  alert("Ви ввели не вірні дані!");
} */

// Task_9

// Task_10
