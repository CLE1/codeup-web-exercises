(function(){
    "use strict";

    // /**
    //  * TODO:
    //  * Create an array of 4 people's names and store it in a variable called
    //  * 'names'.
    //  */
    var theAvengers = ["Tony", "Steve", "Bruce", "Natasha"]


    //
    // /**
    //  * TODO:
    //  * Create a log statement that will log the number of elements in the names
    //  * array.
    //  */
    // console.log(theAvengers[0], theAvengers[1], theAvengers[2], theAvengers[3]);


    //
    // /**
    //  * TODO:
    //  * Create log statements that will print each of the names individually by
    //  * accessing each element's index.
    //  */
    // console.log(theAvengers[0]);
    // console.log(theAvengers[1]);
    // console.log(theAvengers[2]);
    // console.log(theAvengers[3]);
    //

    //
    // /**
    //  * TODO:
    //  * Write some code that uses a for loop to log every item in the names
    //  * array.
    //  */
    // for (var i = 0; i < theAvengers.length; i++){
    //     console.log(theAvengers[i]);
    // }


    //
    // /**
    //  * TODO:
    //  * Refactor your above code to use a `forEach` loop
    //  */
    theAvengers.forEach(function(name){
        console.log(name)

    }



    //
    // /**
    //  * TODO:
    //  * Create the following three functions, each will accept an array and
    //  * return an an element from it
    //  * - first: returns the first item in the array
    //  * - second: returns the second item in the array
    //  * - last: returns the last item in the array
    //  *
    //  * Example:
    //  *  > first([1, 2, 3, 4, 5]) // returns 1
    //  *  > second([1, 2, 3, 4, 5]) // returns 2
    //  *  > last([1, 2, 3, 4, 5]) // return 5
    //  */

    function first(array){
        return array[0];
    }

    function second(array){
        return array[1];
    }

    function last(array){
        return array[3];
    }

    console.log()



})();