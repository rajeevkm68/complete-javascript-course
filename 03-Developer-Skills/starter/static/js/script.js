'use strict';

/*
function sumOfTwoNumber(x,y) {
    return x + y;
}

let x = 20;
let y = 30;

console.log(`This is the sum of two number using the function call: ${sumOfTwoNumber(10, 20)}`);
console.log(`This is the sum of two number using the function call: ${sumOfTwoNumber(210, 20)}`);
console.log(`This is the sum of two number using the function call: ${sumOfTwoNumber(310, 20)}`);
console.log(`This is the sum of two number using the function call: ${sumOfTwoNumber(10, 220)}`);
console.log(`This is the sum of two number using the function call: ${sumOfTwoNumber(10, 240)}`);

function calorieCounter(fruit, quantity) {

    let caloriesPerUnit = 0;

    switch (fruit) {
        case 'apple':
            caloriesPerUnit = 95;
            break;
        case 'banana':
            caloriesPerUnit = 105;
            break;
        case 'orange':
            caloriesPerUnit = 62;
            break;
        default:
            console.log('Unknown fruit');
            return 0;
    }
   
    return caloriesPerUnit * quantity;
}

console.log(`Calories in 3 apples 🍎: ${calorieCounter('apple', 3)}`);
console.log(`Calories in 2 bananas 🍌: ${calorieCounter('banana', 2)}`);
console.log(`Calories in 5 oranges 🍊: ${calorieCounter('orange', 5)}`);


const addNumber = (x,y) => x + y;

let x = 20;
let y = 30;

console.log(`This is the sum of two number using the function call: ${addNumber(10, 20)}`);

const retirementAge = (currentAge) => {
    const retirementAge = 65;
    return retirementAge - currentAge;
}


console.log(`Years until retirement: ${retirementAge(30)}`);

const calTip = (billAmount) => billAmount >= 50 && billAmount <= 300 ? billAmount * 0.15 : billAmount * 0.20;

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    const tip = calTip(bills[i]);
    tips.push(tip);
    totals.push(bills[i] + tip);
}

console.log('Bills:', bills);
console.log('Tips:', tips);
console.log('Totals:', totals);


const myProfile = {
  name: "rajeev",
  age: 30,
  city: "New York",
  hobbies: ["coding", "traveling", "cooking"],
  greet: () =>
    console.log(
      `Hello, my name is ${myProfile.name} and I am ${myProfile.age} years old.`,
    ),
  addHobby: (hobby) => myProfile.hobbies.push(hobby),
  changeName: function (newName) {
    this.name = newName;
  },
};

myProfile["greet"]();
myProfile.greet();
myProfile["addHobby"]("photography");
myProfile.changeName("Rajeev Krishna");

console.log(myProfile);

const str = `I have ${myProfile.hobbies.length} hobbies: ${myProfile.hobbies.join(", ")}.`;

console.log(str);

for (let i = 1; i <= 5; i++) {
  console.log(`Outer loop iteration: ${i}`);
  for (let j = 1; j <= 3; j++) {
    console.log(`  Inner loop iteration: ${j}`);
  }
}

console.log(Math.trunc(Math.random() * 6) + 1);


const x = '10';

const calcAge = birthYear => 2026 - birthYear;

console.log(calcAge(1990));

console.log();


function convertCase(str) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const nextChar = str[i + 1];

    if (i !== 0) {
      if (char === '_' || char === '-') {
        result += nextChar.toUpperCase();
        i++;
      } else {
        result += char;
      }
    } else {
      result = char;
    }
  }

  return result;
}

console.log('This is to test the convertCase function: ');

console.log(convertCase('the-stealth-warrior')); // Output: "HELLO_WORLD"


const printForecast = arr => {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}°C in ${i + 1} days... `;
  }
  return str;
};

console.log(printForecast([17, 21, 23]));

*/

const timeTracking = array => {
  let totalTime = 0;
  for (let i = 0; i < array.length; i++) {
    totalTime += Number(array[i]);
  }
  const averageTime = totalTime / array.length;

  const mostHours = Math.max(...array);
  const leastHours = Math.min(...array);
  const numberOfDays = array.length;
  const fullTime = () => (totalTime >= 15 ? 'Full-time' : 'Part-time');
  const str = `\n\t Total time:\t${totalTime} hours\n\t Average time:\t${averageTime.toFixed(2)} hours\n\t Most hours:\t${mostHours} hours\n\t Least hours:\t${leastHours} hours\n\t Number of days:\t${numberOfDays}\n\t Status:\t${fullTime()}`;
  return str;
};

console.log(
  'This is the time tracking result:\n',
  timeTracking([2, 3, 4, 5, 6, 7, 8]),
);
