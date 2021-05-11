"use strict";

/*
(5 points): As a developer, I want to make at least three commits with descriptive messages.
(5 points): As a user, I want a destination to be randomly selected for my day trip.
(5 points): As a user, I want a restaurant to be randomly selected for my day trip.
(5 points): As a user, I want a mode of transportation to be randomly selected for my day trip.
(5 points): As a user, I want a form of entertainment to be randomly selected for my day trip.
(15 points): As a user, I want to be able to randomly re-select a destination, restaurant, mode of transportation, and/or form of entertainment if I don’t like one or more of those things.
(10 points): As a user, I want to be able to confirm that my day trip is “complete” once I like all of the random selections.
(10 points): As a user, I want to display my completed trip in the console.
(5 points): As a developer, I want all of my functions to have a Single Responsibility. Remember, each function should do just one thing!

*/

function random_day_selector(){
    let daysOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let randomNumber = (Math.floor(Math.random() * 6) + 0);
    return daysOfTheWeek[randomNumber];
}

let randomDay = random_day_selector();
console.log(randomDay);

function random_restaurant_selector(){
    let randomRestaurant = ['Mcdonalds', 'Arbys', 'Wendys', 'Burger King', 'Chipotle'];
    let randomNumber = (Math.floor(Math.random() * 4) + 0);
    return randomRestaurant[randomNumber];
}

let randomRestaurant = random_restaurant_selector();
console.log(randomRestaurant);