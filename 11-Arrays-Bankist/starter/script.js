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

/*

const bankDepositSumArr = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((amount, val) => amount + val, 0);

console.log(bankDepositSumArr);

const numDeposits = accounts
  .flatMap(acc => acc.movements)
  .filter(amt => amt >= 1000);

console.log(numDeposits);

const divs = document.querySelectorAll('div');

const arr = Array.from(divs);

console.log(arr);

const texts = arr.map(div => div.innerText);

console.log(texts);

const myString = 'The Quick Brown Fox jumped over the lazy dog';

const exceptions = ['a', 'of', 'the', 'with', 'then', 'at'];

const titleCase = myString
  .toLowerCase()
  .split(' ')
  .map((x, index) =>
    exceptions.includes(x) && index !== 0 ? x : x[0].toUpperCase() + x.slice(1),
  )
  .join(' ');

console.log(titleCase);

*/

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

///////////////////////////////////////
// Coding Challenge #5

/* 
Julia and Kate are still studying dogs. This time they are want to figure out if the dogs in their are eating too much or too little
food.

- Formula for calculating recommended food portion: recommendedFood = weight ** 0.75 * 28. 
  (The result is in grams of food, and the weight needs to be in kg)
- Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
- Eating an okay amount means the dog's current food portion is within a range 10% above and below the recommended portion (see hint).

YOUR TASKS:
1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion (recFood) and add 
it to the object as a new property.
 Do NOT create a new array, simply loop over the array (We never did this before, so think about how you can do this without creating a new array).
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple users, 
so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much (ownersTooMuch) and an array with all
 owners of dogs who eat too little (ownersTooLittle).
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah 
and John and Michael's dogs eat too little!"
5. Log to the console whether there is ANY dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether ALL of the dogs are eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Group the dogs into the following 3 groups: 'exact', 'too-much' and 'too-little', 
based on whether they are eating too much, too little or the exact amount of food, based on the recommended food portion.
9. Group the dogs by the number of owners they have
10. Sort the dogs array by recommended food portion in an ascending order. Make sure to NOT mutate the original array!

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). 
Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John', 'Leo'] },
  { weight: 18, curFood: 244, owners: ['Joe'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

GOOD LUCK 😀
*/

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 133, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John', 'Leo'] },
  { weight: 18, curFood: 244, owners: ['Joe'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];
dogs.forEach(val => {
  const foodReco = Math.floor(val.weight ** 0.75 * 28);
  val.recommendedFood = foodReco;
});

const sarahDog = dogs.find(cur => cur.owners.includes('Sarah'));

console.log(sarahDog);

const ownersTooMuch = [];
const constownersTooLittle = [];

dogs.forEach(cur => {
  cur.curFood > cur.recommendedFood
    ? ownersTooMuch.push(...cur.owners)
    : constownersTooLittle.push(...cur.owners);
});

const newArray1 = ownersTooMuch.join(' and ');
console.log(`${newArray1}'s dogs eat too much!`);

const newArray2 = constownersTooLittle.join(' and ');
console.log(`${newArray2}'s dogs eat too little!`);

dogs.forEach(cur =>
  cur.curFood === cur.recommendedFood
    ? console.log(
        `${cur.owners.join(' and ')}'s Dog Eating exactly the Recommended Food`,
      )
    : console.log('Not the Right QUantity'),
);

const exact = dogs.some(dog => dog.curFood === dog.recommendedFood);

console.log(exact);

const all = dogs.every(dog => dog.curFood === dog.recommendedFood);

console.log(all);

console.log(dogs);

const goodDog = dogs
  .filter(cur => cur.curFood === cur.recommendedFood)
  .flatMap(cur => cur.owners);

console.log(goodDog);

const result = Object.groupBy(dogs, curDog => {
  if (curDog.curFood === curDog.recommendedFood) {
    return 'exact';
  } else if (curDog.curFood > curDog.recommendedFood) {
    return 'too-much';
  } else {
    return 'too-little';
  }
});

console.log(result);

const numOwners = Object.groupBy(dogs, curDog => {
  const num = curDog.owners.length;

  if (num < 3) return 'Small';
  if (length > 3 && length < 5) return 'Medium';
  return 'Big';
});

console.log(numOwners);

const sortedArray = dogs.toSorted(
  (a, b) => a.recommendedFood - b.recommendedFood,
);

console.log(sortedArray);
