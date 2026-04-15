/*
let country = "India"
let continent = "Asia"
let population = 1400000000

console.log(country);
console.log(continent);
console.log(population);


// Assignment 1
let isIsland = false;
let language;

console.log(isIsland);
console.log(language);
console.log(typeof isIsland);
console.log(typeof language);

// Assignment 2
language = "Hindi";

console.log(language);
console.log(typeof language);

console.log(`Name of the country is ${country} and its population is ${population} and its language is ${language}`);

let age;

age = 25

console.log(age);
*/

/*
const birthYear = 1991;

if (birthYear <= 2000   && birthYear >= 1990) {
    let millenial = true;
    console.log("You are a millenial");
} else {
    let millenial = false;
    console.log("You are not a millenial");
}
*/

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

/* Write your code below. Good luck! 🙂 */

if (BMIMark > BMIJohn) {
    console.log("Mark's BMI is higher than John's!")
} else {
    console.log("John's BMI is higher than Mark's!")
}

const BMIMarkRounded = Math.round(BMIMark);
const BMIJohnRounded = Math.round(BMIJohn);

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMarkRounded}) is higher than John's!`);
} else {
    console.log(`John's BMI (${BMIJohnRounded}) is higher than Mark's!`);
}

