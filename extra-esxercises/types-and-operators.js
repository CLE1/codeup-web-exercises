(function () {
    "use strict";

    // function isOdd(input){
    //
    //     return input % 2 !== 0;
    // }


    //---


    // function isTrue(input){
    //     return input === true;
    //
    // }
    //
    // console.log(isTrue(true));

    //--

    // function isFalse(input){
    //     return input === false;
    // }
    //
    // console.log(isFalse(false));


    //--

    //Make a function called returnTwo() that returns the number 2 when called
    //Test this function with console.log(returnTwo())

    // function returnTwo(num){
    //     returnTwo(2);
    //     return num =
    // }
    //
    // console.log(returnTwo());


    //---


    // Write a function named subtract(a, b) that returns a minus b

    // function subtract(a, b){
    //     return typeof "a" - b !== false;
    // }
    //
    // console.log(subtract(5, 8));
    //
    //
    // // Write a function named multiply(a, b) that returns the product of a times b
    //
    // function multiply(a, b){
    //     return typeof "a" * "b" === false;
    //
    // }
    //
    // console.log(multiply(5, 8));
    //
    // // Write a function named divide(a, b) that returns a divided by ~b~
    //
    // function divide(a, b){
    //     return a / b;
    // }
    //
    // console.log(divide(4, 2));



    //---

    //TODO: WRITE OUT FUNCTION THAT TAKES TWO INPUTS(NUMBER OR NUMERIC STRING), RETURN PRODUCT OF THOSE INPUTS.
    // IF NOT A NUMBER, RETURN FALSE.

        function multiplyIfNumeric(input1, input2){
            console.log("inside of function");
            if (!isNaN(input1) && !isNaN(input2)) {
                console.log("inside of if statement");
                return Number(input1) * Number(input2); //  block of code to be executed if the condition is true
            } else {
                return false;
            }


    }


   console.log(multiplyIfNumeric("4", "3"));

    function multiplyIfNumeric(input1, input2){
        return Number(input1) * Number(input2);
    }


   //  console.log(typeof "4");




    //---

    // function toUppercase(input){


    // }


// --------

    // TODO: write a function called stickyCaps which takes in an input and returns that input in sticky caps
//  ie: dog -> dOg, software developer -> sOfTwArE dEvElOpEr
//  -> You may be using a few different string methods
//  -> If the input is numeric or not a string, return false


    function stickyCaps(input){

    }





})();