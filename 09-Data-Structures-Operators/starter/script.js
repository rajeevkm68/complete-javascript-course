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

*/

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
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

const { categories, openingHours, name } = restaurant;
console.log(
  `The restaurant ${name} has ${categories.length} categories and opens at ${openingHours.thu.open} on Thursdays.`,
);

const [category1, , category3] = categories;
console.log(category1, category3);

const {
  thu: { open: thuOpen, close: thuClose } = {},
  fri: { open: friOpen, close: friClose } = {},
  sat: { open: satOpen, close: satClose } = {},
} = openingHours;
console.log(thuOpen, thuClose, friOpen, friClose, satOpen, satClose);

const newRestaurant = { ...restaurant, founder: 'Guiseppe', foundedIn: 1998 };
newRestaurant.name = 'Ristorante Roma';
newRestaurant.categories.push('New Category');
console.log(newRestaurant);
console.log(restaurant);
