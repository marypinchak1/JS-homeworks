// Task_1

const YOUR_AGE = Number(prompt(`Введіть, скільки Вам років:`));
if (YOUR_AGE > 0 && YOUR_AGE < 12) {
  alert(`Ви є дитиною!`);
} else if(YOUR_AGE >= 12 && YOUR_AGE < 18) {
  alert(`Ви є підлітком!`);
} else if(YOUR_AGE >= 18 && YOUR_AGE < 60) {
  alert(`Ви є дорослим!`);
}else if(YOUR_AGE >= 60 && YOUR_AGE < 150) {
  alert(`Ви є пенсіонером!`);
}else {
  alert("Ви ввели не вірні дані!");
};

// Task_2

/* const SUM_NUMBER = Number(prompt(`Введіть, число від 0 до 9:`));
if (SUM_NUMBER == 0) {
  alert(`)`);
} else if (SUM_NUMBER == 1) {
  alert(`!`);
} else if (SUM_NUMBER == 2) {
  alert(`@`);
} else if (SUM_NUMBER == 3) {
  alert(`#`);
} else if (SUM_NUMBER == 4) {
  alert(`$`); 
} else if (SUM_NUMBER == 5) {
  alert(`%`);
} else if (SUM_NUMBER == 6) {
  alert(`^`);
} else if (SUM_NUMBER == 7) {
  alert(`&`);
} else if (SUM_NUMBER == 8) {
  alert(`*`);
} else if (SUM_NUMBER == 9) {
  alert(`(`);
} else {
  alert("Ви ввели не вірні дані!");
} */

// Task_3

/* const SUM_NUMBER = Number(prompt(`Введіть тризначне число:`));
if (String(SUM_NUMBER).length == 3) {
  if (
    String(SUM_NUMBER)[0] == String(SUM_NUMBER)[1] ||
    String(SUM_NUMBER)[1] == String(SUM_NUMBER)[2] ||
    String(SUM_NUMBER)[2] == String(SUM_NUMBER)[0]
  ) {
    alert(`В числі є однакові цифри`);
  } else {
    alert("В числі немає однакових цифр!");
  }
} else {
  alert("Ви ввели не вірні дані!");
} */

// Task_4

/* const SUM_YEAR = Number(prompt(`Введіть рік:`));
if (String(SUM_YEAR).length <= 5 && SUM_YEAR != 0) {
  if (SUM_YEAR % 4 == 0 || SUM_YEAR % 400 == 0 && SUM_YEAR % 100 == 0   
  ) {
    alert(`${SUM_YEAR} рік високоний!`);
  } else {
    alert(`${SUM_YEAR} рік не є високоним!`);
  }
} else {
  alert("Ви ввели не вірні дані!");
}  */

// Task_5

/* const SUM_NUMBER = Number(prompt(`Введіть п'ятирозрядне число:`));
const LAST_INDEX = String(SUM_NUMBER).length - 1;
for (let i = 0; i < String(SUM_NUMBER).length / 2; i++) {
  if (String(SUM_NUMBER).length == 5) {
    if (String(SUM_NUMBER)[i] == String(SUM_NUMBER)[LAST_INDEX - i]) {
      alert(`Число ${SUM_NUMBER} є паліндромом!`);
      break;
    } else {
      alert(`Число ${SUM_NUMBER} не є паліндромом!`);
      break;
    }
  } else {
    alert("Ви ввели не вірні дані!");
    break;
  }
} */

// Task_6
/* 
const SUM_OF_DOLLARS = Number(prompt(`Введіть суму доларів (USD):`));
const RATE_DOLLAR_EUR = 0.95;
const RATE_DOLLAR_UAH = 36.7;
const RATE_DOLLAR_AZN = 1.7;
let sumOfEUR = SUM_OF_DOLLARS * RATE_DOLLAR_EUR;
let sumOfUAH = SUM_OF_DOLLARS * RATE_DOLLAR_UAH;
let sumOfAZN = SUM_OF_DOLLARS * RATE_DOLLAR_AZN;
if (SUM_OF_DOLLARS > 0) {
  const CURRENCY_NEED = prompt(
    `Оберіть валюту, в яку бажаєте обміняти долари (USD). Для цього в поле вводу впишіть: EUR або UAH або AZN`
  );
  if (CURRENCY_NEED == "EUR") {
    alert(`Ви отримаєте ${sumOfEUR.toFixed(2)} євро.`);
  } else if (CURRENCY_NEED == "UAH") {
    alert(`Ви отримаєте ${sumOfUAH.toFixed(2)} гривень.`);
  } else if (CURRENCY_NEED == "AZN") {
    alert(`Ви отримаєте ${sumOfAZN.toFixed(2)} манатів.`);
  } else {
    alert("Нажаль, на таку валюте не можливо здійснити обмін!");
  }
} else {
  alert("У Вас немає грошей ахахахаха!");
} */

// Task_7

/* const COST_OF_PURCHASE = Number(prompt(`Введіть вартість покупки (грн.):`));
let discount3 = COST_OF_PURCHASE - COST_OF_PURCHASE * 0.03;
let discount5 = COST_OF_PURCHASE - COST_OF_PURCHASE * 0.05;
let discount7 = COST_OF_PURCHASE - COST_OF_PURCHASE * 0.07;
if (COST_OF_PURCHASE > 0) {
  if (COST_OF_PURCHASE >= 200 && COST_OF_PURCHASE < 300) {
    alert(
      `Ваша знижка складає 3%. Сума до cплати ${discount3.toFixed(2)} грн.`
    );
  } else if (COST_OF_PURCHASE >= 300 && COST_OF_PURCHASE < 500) {
    alert(
      `Ваша знижка складає 5%. Сума до cплати ${discount5.toFixed(2)} грн.`
    );
  } else if (COST_OF_PURCHASE >= 500) {
    alert(
      `Ваша знижка складає 7%. Сума до cплати ${discount5.toFixed(2)} грн.`
    );
  } else {
    alert(
      `У Вас немає знижки. Сума до cплати ${COST_OF_PURCHASE.toFixed(2)} грн.`
    );
  }
} else {
  alert("Ви ввели не вірні дані!");
} */

// Task_8

/* const LENGTH_CICLE = Number(prompt(`Введіть довжину кола (см.):`));
const PERIMETER_SQUARE = Number(prompt(`Введіть периметр квадрата (см.):`));
let diameterOfSircle = LENGTH_CICLE / Math.PI;
let lengthSquareSide = PERIMETER_SQUARE / 4;
if (LENGTH_CICLE > 0 && PERIMETER_SQUARE > 0) {
  if (diameterOfSircle < lengthSquareSide) {
    alert(`Коло поміститься у квадрат.`);
  } else{
    alert(`Коло не поміститься у квадрат.`);
  }
} else {
  alert("Ви ввели не вірні дані!");
} */

// Task_9

/* let counter = 0;
let firstQuestionAnswer = prompt(
  'Щоб відповісти на питання, впишіть цифру, яка позначає правильну відповідь у поле вводу та натисніть "OK". \n Яке ключове слово для оголошення змінних у JavaScript є застарілим? \n 1. let \n 2. var \n 3. const'
);
if (firstQuestionAnswer == 2) {
  alert("Ваша відповідь правильна :)");
  counter = counter + 2;
} else if (firstQuestionAnswer == 1 || firstQuestionAnswer == 3) {
  alert(`Ваша відповідь не правильна :(`);
} else {
  alert("Ви ввели не вірні дані!");
}
let secondQuestionAnswer = prompt(
  'Щоб відповісти на питання, впишіть цифру, яка позначає правильну відповідь у поле вводу та натисніть "OK". \n Чи можна перепрсвоїти змінній const інше значення? \n 1. так \n 2. так, лише після її оголошення \n 3. ні'
);
if (secondQuestionAnswer == 3) {
  alert("Ваша відповідь правильна :)");
  counter = counter + 2;
} else if (secondQuestionAnswer == 1 || secondQuestionAnswer == 2) {
  alert(`Ваша відповідь не правильна :(`);
} else {
  alert("Ви ввели не вірні дані!");
}
let thirdQuestionAnswer = prompt(
  'Щоб відповісти на питання, впишіть цифру, яка позначає правильну відповідь у поле вводу та натисніть "OK". \n Який оператор є оператором присвоєння? \n 1. < \n 2. = \n 3. !'
);
if (thirdQuestionAnswer == 2) {
  alert("Ваша відповідь правильна :)");
  counter = counter + 2;
} else if (thirdQuestionAnswer == 1 || thirdQuestionAnswer == 3) {
  alert(`Ваша відповідь не правильна :(`);
} else {
  alert("Ви ввели не вірні дані!");
}
alert(`Вітаємо! Ваш рахунок ${counter} балів!`); */

// Task_10

/* let userDate = new Date(
  prompt("Введіть дату (рік, місяць, день) в форматі РРРР-ММ-ДД")
);
let nextDate = new Date(userDate.getTime() + 24 * 3600 * 1000);
const NEXT_DATE =
  nextDate.getFullYear() +
  "-" +
  (nextDate.getMonth() + 1) +
  "-" +
  nextDate.getDate();
alert(NEXT_DATE); */
