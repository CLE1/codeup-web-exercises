"use strict";

// var num = 5;
//
// num = num + 5;
//
// console.log(num);
//
// // creating an interface for other code to use without knowing what happens inside add()
// function add(num1, num2){
//     return 5 + 5;
// }
//
// console.log("The result of add() is" + add(5, 10)); // <- arguments here
//
// console.log("The result of add() is" + add());
//
// var myNum = 12;
// var myNum = 21;
//
// console.log("the result of add() is: " + add(myNum, myNum, myNum2)); // <- arguments here
//
// // Returns the difference of subtracting num2 from num1
// function subtract(num1, num2){
//     return num1 - num2;
// }
//
// console.log("the result of subtract() is: " + subtract(10, 2));

// MINI EXERCISE
// TODO: Create functions which will return the product(*) of two numbers and the dividend(/) of two numbers, respectfully.

// function product(num1, num2){
//     return num1 * num2;
// }
// console.log(multiply(2, 4));
//
// function product(num1, num2){
//     return num1 / num2;
// }
// console.log(divide(5, 5));

//---

// function addWithDefaults(num1 = 0, num2 = 0){
//     return num1 + num2;
// }
// console.log(addWithDefaults(num1: 2));

{
    {
        {
            var number = 2;
            console.log(number);
        }
    }
}

function scopingFun(){
    var number = 2
    console.log(number);
}

console.log(number);
    scopingFun();