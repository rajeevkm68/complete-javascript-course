'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
          i + 1
        } ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

let sort = false;

btnSort.addEventListener('click', function (e) {
  e.preventDefault();

  displayMovements(currentAccount.movements, !sort);
  sort = !sort;
});

const calcDisplayBalance = function (account) {
  account.balance = account.movements.reduce((acc, curr) => acc + curr, 0);

  labelBalance.textContent = `${account.balance}€`;
};

const calcDisplaySummary = function (accounts) {
  const incomes = accounts.movements
    .filter(curr => curr > 0)
    .reduce((acc, curr) => acc + curr, 0);

  const outgoing = accounts.movements
    .filter(curr => curr < 0)
    .reduce((acc, curr) => acc + curr);

  const intrest = accounts.movements
    .filter(curr => curr > 0)
    .map(curr => (curr * accounts.interestRate) / 100)
    .filter(curr => curr >= 1)
    .reduce((acc, curr) => acc + curr, 0);

  labelSumIn.textContent = `${incomes}€`;
  labelSumOut.textContent = `${Math.abs(outgoing)}€`;
  labelSumInterest.textContent = `${intrest}€`;
};

const createUserName = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUserName(accounts);

let currentAccount = {};

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  let userName = inputLoginUsername.value;
  let pin = Number(inputLoginPin.value);

  currentAccount = accounts.find(acc => acc.username === userName);

  if (currentAccount?.pin === Number(pin)) {
    labelWelcome.textContent = `Welcome ${currentAccount.owner.split(' ')[0]}`;

    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    containerApp.style.opacity = 1;
  }

  updateUI(currentAccount);
});

const updateUI = function (account) {
  calcDisplayBalance(account);

  displayMovements(account.movements);

  calcDisplaySummary(account);
};

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const inputAmount = Number(inputTransferAmount.value);
  const inputUser = inputTransferTo.value;

  const transferToAccount = accounts.find(acc => acc.username === inputUser);

  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    inputUser !== currentAccount.username &&
    transferToAccount &&
    inputAmount > 0 &&
    currentAccount.balance >= inputAmount
  ) {
    transferToAccount.movements.push(inputAmount);
    currentAccount.movements.push(0 - inputAmount);

    console.log(currentAccount.movements);
    console.log(transferToAccount.movements);

    updateUI(currentAccount);
  }
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  const closeUser = inputCloseUsername.value;
  const closeUserPin = Number(inputClosePin.value);

  inputCloseUsername.value = inputClosePin.value = '';

  if (
    closeUser === currentAccount.username &&
    closeUserPin === currentAccount.pin
  ) {
    const arrayIndex = accounts.findIndex(
      acc => acc.username === currentAccount.username,
    );
    accounts.splice(arrayIndex, 1);
    containerApp.style.opacity = 0;
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const loanAmount = Number(inputLoanAmount.value);

  const requiredTransaction = loanAmount * 0.1;

  const status = currentAccount.movements.some(
    val => val >= requiredTransaction,
  );

  if (status) {
    currentAccount.movements.push(loanAmount);
    inputLoanAmount.value = '';
  }

  updateUI(currentAccount);
});

// const array = Array.from({ length: 5 }, (curr, i) => i + 1);

// console.log(array);

// const arrayNew = Array.from({ length: 5 }).map(() => 1);

// console.log(arrayNew);

// const divs = document.querySelectorAll('div');

// const arr = Array.from(divs);

// console.log(arr);

// const texts = arr.map(div => div.innerText);

// console.log(texts);

const sumDepositWithdraw = accounts.flatMap(acc => acc.movements);

// console.log(sumDepositWithdraw);

// const overallObject = sumDepositWithdraw.reduce((acc, cur, index) => {
//   cur > 0
//     ? (acc['Deposit'] = (acc['Deposit'] || 0) + cur)
//     : (acc['Withdraw'] = (acc['Withdraw'] || 0) + cur);
//   return acc;
// }, {});

// console.log(overallObject);

const overallObject = sumDepositWithdraw.reduce((acc, cur, index) => {
  const key = cur > 0 ? 'Deposit' : 'Withdraw';
  acc[key] = (acc[key] || 0) + cur;
  return acc;
}, {});

console.log(overallObject);

///////////////////////////////////////
// Coding Challenge #4

/*
This time, Julia and Kate are studying the activity levels of different dog breeds.

YOUR TASKS:
1. Store the the average weight of a "Husky" in a variable "huskyWeight"
2. Find the name of the only breed that likes both "running" and "fetch" ("dogBothActivities" variable)
3. Create an array "allActivities" of all the activities of all the dog breeds
4. Create an array "uniqueActivities" that contains only the unique activities (no activity repetitions). 
HINT: Use a technique with a special data structure that we studied a few sections ago.
5. Many dog breeds like to swim. What other activities do these dogs like? Store all the OTHER activities 
these breeds like to do, in a unique array called "swimmingAdjacent".
6. Do all the breeds have an average weight of 10kg or more? Log to the console whether "true" or "false".
7. Are there any breeds that are "active"? "Active" means that the dog has 3 or more activities. 
Log to the console whether "true" or "false".

BONUS: What's the average weight of the heaviest breed that likes to fetch? HINT: Use the "Math.max" 
method along with the ... operator.

TEST DATA:
*/

/*

const breeds = [
  {
    breed: 'German Shepherd',
    averageWeight: 32,
    activities: ['fetch', 'swimming'],
  },
  {
    breed: 'Dalmatian',
    averageWeight: 24,
    activities: ['running', 'fetch', 'agility'],
  },
  {
    breed: 'Labrador',
    averageWeight: 28,
    activities: ['swimming', 'fetch'],
  },
  {
    breed: 'Beagle',
    averageWeight: 12,
    activities: ['digging', 'fetch'],
  },
  {
    breed: 'Husky',
    averageWeight: 26,
    activities: ['running', 'agility', 'swimming'],
  },
  {
    breed: 'Bulldog',
    averageWeight: 36,
    activities: ['sleeping'],
  },
  {
    breed: 'Poodle',
    averageWeight: 18,
    activities: ['agility', 'fetch'],
  },
];

const huskyWeight = breeds.find(breed => breed.breed === 'Husky').averageWeight;
console.log(huskyWeight);

const allActivity = breeds.find(
  breed =>
    breed.activities.includes('running') && breed.activities.includes('fetch'),
).breed;

console.log(allActivity);

const allActivities = breeds.flatMap(breeds => breeds.activities);

console.log(allActivities);

const uniqueActivities = [...new Set(allActivities)];

console.log(uniqueActivities);

const swimmingAdjacent = allActivities.filter(
  activity => activity != 'swimming',
);

console.log(swimmingAdjacent);

const allAbove10 = breeds.every(breed => breed.averageWeight >= 10);

console.log(allAbove10);

const active = breeds.some(breed => breed.activities.length >= 3);
console.log(active);

const heavyBreed = breeds.reduce((breed, val) =>
  val.averageWeight > breed.averageWeight ? val : breed,
);

console.log(heavyBreed);

const otherActivity = [
  ...new Set(
    breeds
      .filter(breed => breed.activities.includes('swimming'))
      .flatMap(breed => breed.activities)
      .filter(activity => activity != 'swimming'),
  ),
];
console.log(otherActivity);

//What's the average weight of the heaviest breed that likes to fetch? HINT: Use the "Math.max" method along with the ... operator.

const filter1 = breeds.filter(breed => breed.activities.includes('swimming'));

const heavy = filter1.reduce((weight, val) =>
  weight.averageWeight > val.averageWeight ? weight : val,
);

console.log(heavy);

console.log(filter1);

const filter2 = filter1.map(weight => weight.averageWeight);

console.log(filter2);

const heavyWeight = Math.max(...filter2);

console.log(heavyWeight);

const overallBalance = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, curr) => acc + curr, 0);

console.log(overallBalance);


movements.sort((a, b) => a - b);

console.log(movements);

const latestLargeMovement = movements.findLast(curr => curr < 100);

console.log(latestLargeMovement);

const latestLargeMovementIndex = movements.findLastIndex(curr => curr < 100);

console.log(latestLargeMovementIndex);

const status = movements.some(val => val > 1500);

console.log(movements);
console.log(status);

const value = movements.every((val, index) => {
  console.log(val, index);
});

console.log(value);


let array = ['a', 'b', 'c', 'd', 'e', 'f', '1', '2', '3'];

console.log(array.slice(2));
console.log(array.slice(2, 3));
console.log(array.slice(2, -4));
console.log(array.slice(-4));

array.splice(2, 1, 'v');

console.log(array);

for (const transactions of movements) {
  if (transactions > 0) {
    console.log(`You Deposited ${transactions}`);
  } else {
    console.log(`You Withdrew ${Math.abs(transactions)}`);
  }
}


movements.forEach(function (trans, index, array) {
  if (trans > 0) {
    console.log(`You Deposited ${trans}`);
    console.log(`Index is ${index}`);
    console.log(`Array is ${array}`);
  } else {
    console.log(`You Withdrew ${Math.abs(trans)}`);
  }
});


const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key) {
  console.log(`${key}: ${value}`);
});

*/

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). 
For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

/*

let dogsJulia = [3, 5, 2, 12, 7];
let dogsKate = [4, 1, 15, 8, 3];

const finalArray = dogsJulia.concat(dogsKate);

const checkDogs = function (dogsJulia, dogsKate) {
  const copyDogsJulia = dogsJulia.slice(1, -2);
  const finalArray = copyDogsJulia.concat(dogsKate);

  finalArray.forEach(function (dogAge, i) {
    if (dogAge >= 3)
      console.log(
        `Dog number ${i + 1} is an adult, and is ${dogAge} years old`,
      );
    else console.log(`Dog number ${i + 1} is still a puppy 🐶`);
  });
};

finalArray.forEach((dogAge, i) =>
  dogAge >= 3
    ? console.log(`Dog number ${i + 1} is an adult, and is ${dogAge} years old`)
    : console.log(`Dog number ${i + 1} is still a puppy 🐶`),
);

checkDogs(dogsJulia, dogsKate);

dogsJulia = [9, 16, 6, 8, 3];
dogsKate = [10, 5, 6, 1, 4];

checkDogs(dogsJulia, dogsKate);


/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

/*

const testData1 = [5, 2, 4, 1, 15, 8, 3];
const testData2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = function (dogAge) {
  let averageAge = dogAge
    .map(curr => (curr <= 2 ? curr * 2 : curr + 16))
    .filter(curr => curr >= 18)
    .reduce((acc, curr, i, arr) => acc + curr / arr.length, 0);
  console.log(averageAge);
};

calcAverageHumanAge(testData1);

*/
