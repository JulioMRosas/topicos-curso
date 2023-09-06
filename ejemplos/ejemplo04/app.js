'use strict'

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavari 23, Firenze Italy',
    categories: ['Italian', 'Mexican', 'Vegetarian', 'Organic'],
    startedMenu: ['Garlic Bread', 'Foccacia', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order: function(starterIndex, mainIndex) {
        return [this.startedMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    schedule: {
        wes: {
            open: 7,
            close: 22,
        },
        thu: {
            open: 7,
            close: 22,
        },
        fri: {
            open: 8,
            close: 23,
        },
        sat: {
            open: 10,
            close: 2,
        },
    },
};

// Destructuring en Arrays
const [,,risotto] = restaurant.mainMenu;
console.log(risotto); 

// En objetos
const { name: nombre, mainMenu } = restaurant;
console.log(nombre, mainMenu);

// Destructuring de un objeto dentro de un objeto
const { schedule: { fri: { open, close } } } = restaurant;
console.log(open, close);