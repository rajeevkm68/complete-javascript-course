'use strict';

/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven';

      // Reasssigning outer scope's variable
      output = 'NEW OUTPUT!';

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millenial);
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);
// console.log(age);
// printAge();


const calcAge = {
  name: 'Rajeev',
  greet: () => {
    console.log(`Hey ${calcAge.name}`);
  },
  myArray: [1, 2, 3],
  myObject: {
    name: 'Rajeev',
    greet: function () {
      console.log(`Hey ${this.name}`);
    },
  },
};

calcAge.myObject.greet();
console.log(calcAge.myArray[0]);


function greet() {
  console.log(`Hey ${this.name}`);
}

const user = {
  name: 'Rajeev',
};

greet.call(user);

greet.apply(user);

const greetUser = greet.bind(user);
greetUser();



const original = {
  name: 'Rajeev',
  address: {
    city: 'Bangalore',
  },
};

const shallowCopy = { ...original };

shallowCopy.address.city = 'Mumbai';

console.log('Original:', original.address.city); // ❗ "Mumbai"
console.log('Shallow Copy:', shallowCopy.address.city); // ❗ "Mumbai"

*/

const original = {
  name: 'Rajeev',
  address: {
    city: 'Bangalore',
  },
};

const deepCopy = structuredClone(original);

deepCopy.address.city = 'Mumbai';

console.log('Original:', original.address.city); // ✅ "Bangalore"
console.log('Deep Copy:', deepCopy.address.city); // ✅ "Mumbai"
