"use strict";


// LOOSE EQUALITY

// Loose equality (==)
// Loose inequality (!=)

var num1 = 5;

var maybeNum2 = "5";

console.log(typeof(num1 * maybeNum2));

if (num1 == maybeNum2){
    console.log("These are equivalent");
}

// STRICT EQUALITY (===)
// STRICT INEQUALITY (!==)

// The comparators MUST be of the same type AND have the same value