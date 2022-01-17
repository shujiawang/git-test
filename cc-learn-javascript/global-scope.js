// At the top of main.js, write three global variables:

//     Name the first variable satellite and set it equal to 'The Moon'.
//     Name the second variable galaxy and set it equal to 'The Milky Way'.
//     Name the third variable stars and set it equal to 'North Star'.


let satellite = 'The Moon';
let galaxy = 'The Milky Way';
let stars = 'North Star';

// Below the variables created in the previous step, write a function named callMyNightSky. Inside the function, include a return statement like this:

const callMyNightSky = () => 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;

// Beneath the callMyNightSky() function, use console.log() to log the value of callMyNightSky() to the console.

// You’ll notice that the function block for callMyNightSky() is able to access the global variables freely since the variables are available to all lines of code in the file.
console.log(callMyNightSky());