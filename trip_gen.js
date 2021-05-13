"use strict";


//index 0 = dest
//index 1 = restaurant
//index 2 = transportation
//index 3 = entertainment
let userSelection = []; 
/*
(5 points): As a developer, I want to make at least three commits with descriptive messages. (completed)
(5 points): As a developer, I want all of my functions to have a Single Responsibility. Remember, each function should do just one thing! (completed)
*/
function randomNumberGen(arr){
    let maxIndex = arr.length - 1 ;
    
    return  (Math.floor(Math.random() * maxIndex) + 0);
}

//(5 points): As a user, I want a destination to be randomly selected for my day trip.
function randomDestSelector(){
    let destinations = ['Italy', 'Greece', 'Colombia', 'Spain', 'Mexico', 'Turkey', 'Brazil'];
    //let randomNumber = (Math.floor(Math.random() * 6) + 0);
    let randomNumber = randomNumberGen(destinations);
    return destinations[randomNumber];
}

let randomDest = randomDestSelector();
console.log(randomDest);
userSelection.push(randomDest);
// (5 points): As a user, I want a restaurant to be randomly selected for my day trip.
function randomRestaurantSelector(){
    let randomRestaurant = ['Mcdonalds', 'Arbys', 'Wendys', 'Burger King', 'Chipotle'];
    let randomNumber = randomNumberGen(randomRestaurant);
    return randomRestaurant[randomNumber];
}

let randomRestaurant = randomRestaurantSelector();
console.log(randomRestaurant);
userSelection.push(randomRestaurant);

//(5 points): As a user, I want a mode of transportation to be randomly selected for my day trip.

function randomTransportationSelector(){
    let randomTransportation = ['Car', 'Suv', 'Airplane', 'Van', 'Horse', 'Boat', 'ATV'];
    let randomNumber = randomNumberGen(randomTransportation);
    return randomTransportation[randomNumber];

}
let randomTrans = randomTransportationSelector();
console.log(randomTrans);
userSelection.push(randomTrans);

//(5 points): As a user, I want a form of entertainment to be randomly selected for my day trip.

function randomEntertainmentSelector(){
    let randomEntertainment = ['Listen to Music', 'Go swimming', 'Go Partying', 'Go Drinking', 'Go Running'];
    let randomNumber = randomNumberGen(randomEntertainment);
    return randomEntertainment[randomNumber];
}

let randomEnt = randomEntertainmentSelector();
console.log(randomEnt);
userSelection.push(randomEnt);

// (15 points): As a user, I want to be able to randomly re-select a destination, restaurant, mode of transportation, and/or form of entertainment if I don’t like one or more of those things.
function changeRequestFunc(arr){
    let changeRequest = prompt("Please select which part of your trip you would like to modify: \n(1) Select a different destination. \n(2) Select a different Restaurant. \n(3) Select a different mode of transportation. \n(4) Select a different form of entertainment. \n(5) Save and Exit.\n ")
        console.log(changeRequest);
    while ((changeRequest) < 1 || (changeRequest > 5)){
        alert("Invalid Input, Try again!")
        changeRequest = prompt("Please select which part of your trip you would like to modify: \n(1) Select a different destination. \n(2) Select a different Restaurant. \n(3) Select a different mode of transportation. \n(4) Select a different form of entertainment. \n(5) Save and Exit.\n ")

    }
    

    switch (changeRequest){
        case '1':
            let randomDest = randomDestSelector();
            alert("Great! Your new destination is: " + randomDest);
            arr[0] = randomDest;
            break;
        case '2':
            let randomRestaurant = randomRestaurantSelector();
            alert("Great! a different restaurant has been selected for you: " + randomRestaurant);
            arr[1] = randomRestaurant;
            break;
        case '3':
            let randomTrans = randomTransportationSelector();
            alert("Great! a different mode of transportation has been selected for you: " + randomTrans);
            arr[2] = randomTrans;
            break;
        case '4':
            let randomEnt = randomEntertainmentSelector();
            alert("Great! a different form of enetertainment has been selected for you: " + randomEnt);
            arr[3] = randomEnt;
            break;
        case '5':
            alert("Saving Changes ... Press enter to continue");
            break;
        default:
            
    }

//}
}

function modifyDayTrip(arr){
    
    let userInput = prompt("Do you wish to make changes to your trip, (y)yes or (n)no? \nDestination: " + arr[0] + "\nRestaurant: "+ arr[1] + "\nTransportation: " + arr[2] + "\nEntertainment: "+ arr[3]);
    
 
    if ((userInput == 'no') || (userInput == 'n')){
        alert("perfect, no changes need to be made!");
        
    }
    else if((userInput == 'yes') || (userInput == 'y')) {
        changeRequestFunc(arr);
    }

    else {
        
       alert("Invalid input, exiting...");
        
    }
    } // end of while loop
    

modifyDayTrip(userSelection);

//(10 points): As a user, I want to be able to confirm that my day trip is “complete” once I like all of the random selections.

function confirmTrip(arr){
let userConfirmation = prompt("Please Confirm your trip preferences, enter (y)yes to confirm or (n)no to change your preferences: \nDestination: " + arr[0] + "\nRestaurant: "+ arr[1] + "\nTransportation: " + arr[2] + "\nEntertainment: "+ arr[3]);

while((userConfirmation == 'no') || (userConfirmation  == 'n')){
    alert("Ok, let's make some additional changes..");
    changeRequestFunc(arr);
    userConfirmation = prompt("Please Confirm your trip preferences, enter (y)yes to confirm or (n)no to change your preferences: \nDestination: " + arr[0] + "\nRestaurant: "+ arr[1] + "\nTransportation: " + arr[2] + "\nEntertainment: "+ arr[3]);
    
}

if ((userConfirmation == 'yes') || (userConfirmation == 'y')){
    console.log("confirmed");
    alert("Great! You have confirmed your trip preferences!")
}

else {
    console.log("Invalid input, good bye!");
}
}

confirmTrip(userSelection);


//(10 points): As a user, I want to display my completed trip in the console.
function displayMyTrip(arr){
    console.log("This is the current itinerary: \nDestination: " + arr[0] + "\nRestaurant: "+ arr[1] + "\nTransportation: " + arr[2] + "\nEntertainment: "+ arr[3]);
    document.write("This is the current itinerary:  <br>Destination: " + arr[0] + "<br>Restaurant: "+ arr[1] + "<br>Transportation: " + arr[2] + "<br>Entertainment: "+ arr[3]);

}

displayMyTrip(userSelection);

function changeTripFunc() {
    let randomDest = randomDestSelector();
    let randomRestaurant = randomRestaurantSelector();
    let randomTrans = randomTransportationSelector();
    let randomEnt = randomEntertainmentSelector();
    document.getElementById("changeTrip").innerHTML = "New Itinerary: " + "<br>Destination: " + randomDest + "<br>Restaurant: "+ randomRestaurant + "<br>Transportation: " + randomTrans + "<br>Entertainment: "+ randomEnt;
  }