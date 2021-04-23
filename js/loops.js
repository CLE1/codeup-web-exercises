(function () {
    "use script"

//     // TODO: MINI EXERCISES
// // TODO: print all even numbers between 0 and 25;
// // TODO: using prompt() and alert(), write a loop that will continue to ask for the correct password until the
// // correct password is given.
// hint: start by defining the correct password and don't forget to link your html file
//
//     var evenNumber = 2;
//
//     while (evenNumber < 25) {
//         console.log('current number:' + evenNumber);
//
//         evenNumber += 2
//         console.log('next number is:' + evenNumber);
//     }
//
//     --------------
//
//     var correctPassword = "thisGuy"
//     var userGuess = prompt("please enter password.");
//     while (userGuess !== correctPassword) {
//         alert("incorrect password, try again.");
//     }
//     var userGuess;
// alert ("welcome!")
//
//
//
//     var i = 10;
//
//     do {
//         console.log('while loop iteration #' + i);
//         i++;
//     } while (i < 10);
//
//
//     /---
//
//
//     // TODO: A parking lot with 30 parking spaces wants to display the amount of spaces available as it gets filled.
//  Let's assume that there are allowing two cars into the parking lot at a time. As those cars take up spaces,
//  write a do-while loop that prints the spaces available. If the parking lot gets filled, print "this parking lot
//  is now full" to the console.
// // HINT: think of a countdown, remember if statements can be used inside of your statements
//
//
//     var parkingSpots = 30
//
//     parkingSpots = parkingSpots - 2
//     do {
//         console.log("this parking lot is now full")
//         parkingSpots--;
//     } while ( parkingSpots - 2);
//
//
//     /----------NOTES under
//
//     for(let i = 0; i <= 10; i++){
//
//         console.log('hello world' + i);
//     }
//
//     for(let i = -10; i >= 0; i++){
//
//         console.log('hello world ${i}')
//     }
//
//     for(let x = 10; x <= 25; x++){
//
//
//     }
//
//     -----------

    // var carton = 0;
    // for(let eggs = 1; eggs <= 72; eggs++){
    //
    //     if(eggs % 12 == 0){
    //         carton ++;
    //
    //     }
    //     console.log('we've filled ${carton} amount of egg cartons with ${eggs} number of eggs);
    // }


    //-----------

    var dozens = 0;
    for(let i = 0; i <= 36; i++){

        if(i % 12 === 0){
            console.log('starting with: ${dozens} dozen eggs');
            dozens++;
            console.log(dozens);
            break;
            console.log('we now have ${dozens} dozen eggs');
        }
    }

    for(let i = 0; i <= 10; i++){
        console.log('first: ${i}');
        continue;
        break;
        i = i*2;
        console.log('second ${i}');
    }

    var understanding = 3;








})