"use strict";

// I want a routine which will determine if a dog is in fact my dog
// The dog must have fur, have whiskers, and have a name.

// var hasFur = true;
// var hasWhiskers = true;
// var nameIsCoda = true;
//
// var isMyDog;
//
// if (hasFur){
//     isMyDog = true;
//
// }
//
// if (nameIsCoda){
//     isMyDog = true;
//     console.log("this must be my Coda");
// }


// if (hasFur){
//
//     if (haWhiskers){
//
//         console.log("who's a good girl?? *bark bark*");
//     }
// }
//
// isMyDog = (hasFur && hasWhiskers && nameIsCoda);
//
// if (hasFur && hasWhiskers && nameIsCoda){
//     console.log("who's a good gir?? *bark bark*");
// }


// LOGICAL OR (||)

var creditScore = 728
var cashOnHand = 3000

if (creditScore > 680 || cashOnHand > 3000){
    console.log("Congrats! You (the bank) now own a car!");
}

var HasRequiredScoreOrCash = (creditScore > 680) || (cashOnHand > 3000);

var lengthOfEmployment = 6;

var hasAdequateLengthOfEmployment = (lenghtOfEmployment >= 6);

var purchasedCar;

if (hasRequiredScoreOrCash && hasAdequateLengthOfEmployment){
    console.log("Ok, for real. You get a car");
    purchasedCar = true;
}

// LOGICAL NOT (!)

console.log("The inverted value is: " + !true);

console.log("This is the weird stuff I was telling you about: " + !NaN);