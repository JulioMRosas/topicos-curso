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
};
/* 
const italian = restaurants.categories[0];
const mexican = restaurants.categories[1];
console.log(italian, mexican); */

/* let [main, secondary] = restaurant.categories;
console.log(main, secondary); */

/* let temp = main;
main = secondary;
console.log(main, secondary);

[main, secondary] = [secondary, main]; */

/* const [starter, main] = restaurant.order(1, 0)
console.log(starter);
console.log(main); */


