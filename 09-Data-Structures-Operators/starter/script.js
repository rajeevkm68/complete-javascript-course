'use strict';

/*

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  [weekDays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours,

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`,
    );
  },
};

restaurant.orderDelivery({
  starterIndex: 2,
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
});

const { categories, openingHours: hours, name } = restaurant;
console.log(
  `The restaurant ${name} has ${categories.length} categories and opens at ${hours.thu.open} on Thursdays.`,
);

const [category1, , category3] = categories;
console.log(category1, category3);

const {
  [weekDays[3]]: { open: thuOpen, close: thuClose } = {},
  [weekDays[4]]: { open: friOpen, close: friClose } = {},
  [weekDays[5]]: { open: satOpen, close: satClose } = {},
} = hours;
console.log(thuOpen, thuClose, friOpen, friClose, satOpen, satClose);

const newRestaurant = { ...restaurant, founder: 'Guiseppe', foundedIn: 1998 };
newRestaurant.name = 'Ristorante Roma';
newRestaurant.categories.push('New Category');
console.log(newRestaurant);
console.log(restaurant);

console.log(openingHours?.[weekDays[3]]?.open ?? 'Closed');

restaurant.orderDelivery?.({
  starterIndex: 2,
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
});

const users = [
  { name: 'Alice', email: 'alice@example.com' },
  { name: 'Bob', email: 'bob@example.com' },
];
console.log(users[0]?.email ?? 'User array is empty');
console.log(users[1]?.email ?? 'User array is empty');
console.log(users[2]?.email ?? 'User array is empty');

const days = Object.keys(openingHours);

for (const day of Object.keys(openingHours)) {
  console.log(day, openingHours[day].open);
}

const values = Object.values(openingHours);
console.log(values);

for (const day of Object.values(openingHours)) {
  console.log(day.open);
}

const entrys = Object.entries(openingHours);
console.log(entrys);

for (const [day, { open, close }] of Object.entries(openingHours)) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}


const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}

for (const [team, odd] of Object.entries(game.odds)) {
  console.log(team, odd);
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}

const avg =
  Object.values(game.odds).reduce((a, b) => a + b, 0) /
  Object.values(game.odds).length;
console.log(avg);

let average = 0;
for (const odd of Object.values(game.odds)) {
  average += odd;
}
console.log(average / Object.values(game.odds).length);

for (const [index, player] of game.scored.entries()) {
  console.log(`: ${player} scored ${index + 1} goal`);
}

let score = [...game.scored];

const scorers = {};
for (const player of score) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);

const marks = [3, 4, 5];
const name = ['Rajeev', 'Kumar', 'Singh'];

const marDet = {};

for (const [index, mar] of name.entries) marDet[mar] = marks[index];

console.log(marDet);


const names = ['Alice', 'Bob', 'Charlie', 'Alice', 'Bob'];

const orderSet = new Set(names);
console.log(orderSet);

orderSet.add('David');
console.log(orderSet);

let sizeOfSSet = orderSet.size;
console.log(sizeOfSSet);

orderSet.delete('Alice');
console.log(orderSet);

sizeOfSSet = orderSet.size;
console.log(sizeOfSSet);

const hasBob = orderSet.has('Bob');
console.log(hasBob);

const newArray = [...orderSet];
console.log(newArray);

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

let commonFoods = new Set([...italianFoods, ...mexicanFoods]);
console.log(commonFoods);

let commnFoods = italianFoods.intersection(mexicanFoods);
console.log(commnFoods);

commnFoods = new Set([...italianFoods].filter(food => mexicanFoods.has(food)));
console.log(commnFoods);

const uniqueFoods = new Set([...italianFoods, ...mexicanFoods]);
console.log(uniqueFoods);


const myObject = {
  name: 'Rajeev',
  age: 30,
  job: 'Developer',
};

const newObject = {
  name: 'Rajeev',
  age: 30,
  job: 'Developer',
  profile: myObject,
};

console.log(newObject);

const myMap = new Map();

myMap.set('name', 'Rajeev');
myMap.set('age', 30);
myMap.set('job', 'Developer');
myMap.set(myObject, 'profile');
console.log(myMap);

console.log(myMap.get(myObject));

const user1 = { name: 'Rajeev' };
const user2 = { name: 'Anita' };

const lastSeen = new Map();

lastSeen.set(user1, new Date());
lastSeen.set(user2, new Date());

console.log(lastSeen.get(user1)); // works


const questionMap = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again!'],
]);

console.log(questionMap);

console.log(questionMap.get('question'));

for (const [key, value] of questionMap) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

const answer = 3;
console.log(questionMap.get(answer === questionMap.get('correct')));

const myArray = [...questionMap];



const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

const events = new Set(gameEvents.values());
console.log(events);

events.delete('🔶 Yellow card');

console.log(events);

console.log(
  `An event happened, on average, every ${Math.round(90 / gameEvents.size)} minutes" (keep in mind that a game has 90 minutes)`,
);

for (const event of gameEvents) {
  const [min, eventName] = event;
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${eventName}`);
}


const airline = 'Indigo Airline';
const plane = 'A320';

const airlineName = airline.slice(0, 6);
console.log(airlineName);

console.log(airline.indexOf('A'));
console.log(airline.lastIndexOf('i'));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));


const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    return 'You got the Middle Seat 😎';
  } else {
    return 'You got lucky 😂';
  }
};

console.log(checkMiddleSeat('11B'));
console.log(checkMiddleSeat('23C'));
console.log(checkMiddleSeat('3E'));

const announcement = 'All Passangers come to door number 23 ! door number 23';

console.log(announcement.replaceAll('door', 'Gate'));

console.log(announcement.replace(/door/gi, 'Gate'));

const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));

console.log(plane.startsWith('Airb'));
console.log(plane.endsWith('neo'));

const int = 1;

console.log(typeof int);



///////////////////////////////////////
// Coding Challenge #4


Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀


document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const button = document.querySelector('button');
const textarea = document.querySelector('textarea');

button.addEventListener('click', () => {
  const rows = textarea.value.split('\n');
  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`;
    console.log(`${output.padEnd(30)} ${'✅'.repeat(i + 1)}`);
  }
});


*/

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const flightDetails = flights.split('+');

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flightDetails) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll('_', ' ')}`;

  const fromCode = getCode(from);
  const toCode = getCode(to);
  const timeFormatted = `(${time.replace(':', 'h')})`.padStart(7);

  const finalOutPut = `${output} from ${fromCode} to ${toCode} at ${timeFormatted}`;
  console.log(finalOutPut.padStart(50));
}
