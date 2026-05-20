'use strict';
/*

const bookings = [];

const createBookings = function (flightNum, numPassengers = 1, price = 199) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBookings('LH123', 2, 800);

console.log(bookings);


const flight = 'LH234';
const passenger = {
  name: 'Rajeev Kumar',
  passport: 123456789,
  status: 'not checked-in',
};

const checkIn = function (flightNum, person) {
  flightNum = 'LH999';
  person.name = 'Mr. ' + person.name;
  if (person.passport === 123456789) {
    console.log('Checked in');
    person.status = 'checked-in';
  } else {
    person.status = 'not checked-in';
    console.log('Wrong passport!');
  }
};

checkIn(flight, passenger);
// console.log(flight);
// console.log(passenger);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(passenger);
console.log(passenger);
checkIn(flight, passenger);

const oneWord = function (string) {
  return string.replace(/ /g, '*');
};

const upperFistWord = function (string) {
  const [first, ...others] = string.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('My first string', upperFistWord);
transformer('My Next String', oneWord);

const waveHand = function () {
  const newLocal = '👌👌👌👌👌👌👌';
  console.log(newLocal);
};

document.body.addEventListener('click', waveHand);

const button = document.querySelector('buy');

button.addEventListener('click', function () {
  console.log('Button clicked');
});


const greet = function (str) {
  return function (name) {
    console.log(`${str} ${name}`);
  };
};

const arrowGreet = str => name => console.log(`${str} ${name}`);

const sayHello = greet('Hello');

// sayHello('Rajeev');

const sayArrowHello = arrowGreet('Hello');

sayArrowHello('Rajeev');

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LM',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on this ${this.airline} fight ${this.iataCode}`,
    );
    this.bookings.push({
      flight: `${this.iataCode}${flightNum}`,
      name,
    });
  },
};

const euroWings = {
  airline: 'Euro Wings',
  iataCode: 'EM',
  bookings: [],
};

lufthansa.book(345, 'Rajeev');
lufthansa.book(344, 'John');
// console.log(flightDetails.bookings);

const myBook = lufthansa.book;

myBook.call(euroWings, 245, 'Rajeev');
myBook.call(lufthansa, 366, 'Brian');

console.log(lufthansa.bookings);
console.log(euroWings.bookings);

const bookFlightLh = myBook.bind(lufthansa);
const bookFlightEw = myBook.bind(euroWings);

bookFlightLh(55, 'Rajeev');

console.log(lufthansa.bookings);

bookFlightEw(98, 'Rajeev');

console.log(euroWings.bookings);

lufthansa.plane = 100;
lufthansa.buyPlane = function () {
  this.plane++;
  console.log(this.plane);
};

const buyButton = document.querySelector('.buy');

buyButton.addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

const addTax = (rate, value) => rate + value * rate;

const addVAT = addTax.bind(null, 0.23);

console.log(addVAT(200));


const addTax = rate => value => value + value * rate;

const final = addTax(0.23);

console.log(final(100));


const fileInput = document.querySelector('#fileInput');
const inputButton = document.querySelector('#uploadBtn');
const textOutArea = document.querySelector('#output');

const fileArray = [];

inputButton.addEventListener('click', async function () {
  const file = fileInput.files[0];

  if (!file) return;

  const fileText = await file.text();

  processText(fileText);
});

function processText(text) {
  const lines = text.split('\n');
  console.log(lines);

  const replaced = text.replaceAll('Mark', 'new');

  fileArray.push(replaced);

  textOutArea.value = fileArray;

  const blob = new Blob([fileArray], { type: 'text/plain' });

  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.download = 'output.txt';
  link.click();

  URL.revokeObjectURL(url);
}

console.log(fileArray);

  <div class="upload-box">
      <div class="upload-label">Please input the file name to check</div>
      <input type="file" id="fileInput" />
      <button id="uploadBtn">Upload</button>
      <textarea id="output" rows="10" cols="60"></textarea>
  </div>


///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option.
This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. 
       Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), 
   which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). 
   This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! 
So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

/*

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    while (true) {
      const promptString = `Question ${this.question}\n\nPlease Choose the Answer\n\n${this.options.join('\n')}`;
      const userResponse = Number(prompt(promptString));
      if (
        Number.isInteger(userResponse) &&
        userResponse >= 0 &&
        userResponse < this.options.length
      ) {
        this.answers[userResponse]++;
        break;
      } else {
        alert('Invalid Choise ');
      }
    }

    this.displayResults('array');
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      let resultText = `Poll Results are ${this.answers.join(',')}`;
      console.log(resultText);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });


(function () {
  console.log('This is a IIFE\n');
})();

(() => console.log('This is Arrow IIFE'))();


const secureBooking = function () {
  let passengerCount = 0;
  let myNum = 0;
  let yourNum = 0;

  return function () {
    passengerCount++;
    myNum++;
    console.log(`The Passenger Count is ${passengerCount}`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();
booker();

console.dir(booker);

let f;

const g = function () {
  let a = 43;
  f = function () {
    a++;
    console.log(a);
  };
};

g();
f();
f();

*/

///////////////////////////////////////
// Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the 
color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. 
Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/

/*

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    console.log(Math.random());
    header.style.color = `rgb(${Math.trunc(Math.random() * 256)},${Math.trunc(Math.random() * 256)},${Math.trunc(Math.random() * 256)})`;
  });
})();

*/
