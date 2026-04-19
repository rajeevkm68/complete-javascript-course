
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
    name: 'rajeev',
    age: 30,    
    city: "New York",
    hobbies: ['coding', 'traveling', 'cooking'],
    greet: () => console.log(`Hello, my name is ${myProfile.name} and I am ${myProfile.age} years old.`),
    addHobby: (hobby) => myProfile.hobbies.push(hobby),
    changeName: function(newName) {
        this.name = newName;
    }
};

myProfile['greet']();
myProfile.greet();
myProfile['addHobby']('photography');
myProfile.changeName('Rajeev Krishna');

console.log(myProfile);

const str = `I have ${myProfile.hobbies.length} hobbies: ${myProfile.hobbies.join(', ')}.`;

console.log(str);


for (let i = 1; i <= 5; i++) {
    console.log(`Outer loop iteration: ${i}`);
    for (let j = 1; j <= 3; j++) {
        console.log(`  Inner loop iteration: ${j}`);
    }
};

*/

console.log((Math.trunc(Math.random()*6)+1));
