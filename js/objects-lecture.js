"use strict";


// // what is an object
//
//     var latop = {
//         color: "space gray",
//         make: 'mac',
//         size: '13',
//         turnsOn: function(){
//             return 'turn the computer on';
//                  }
//     }
//
//     var string = "hello world";
// console.log(losSpurs);



// // New Object Instance

//     var losSpurs = new Object();
//
// console.log(losSpurs);

// // TODO:
//     var aboutMe = new Object();
//
//     aboutMe.car = 'Audi A3';
//
//     console.log(aboutMe);
//
//     var aboutMe = {
//         aboutMe["typeOfPlace"] = house;
//     }
//



// // Object literal:
//     var theSpurs = {};
//
// console.log(typeof theSpurs);

// // //TODO:
//     var thisIsMe = {
//
//         Age: '29',
//         occupation: 'student'
//
//     };
//
// console.log(typeof thisIsMe);


// // what is a custom object

// // setting properties within object
// // ok, now lets add some information to our objects

//syntax:// nameOfObject.nameOfProperty--> this creates the property within the object

//     var greeting = 'hello world, my name is';
// console.log(greeting)
//
//     var theSpurs = {
//         city: "San Antonio",
//         coach: 'Gregg',
//         wins: 5,
//         isBestTeam: true
//     }
//
// // using dot notation (losSpurs)

    // var losSpurs = new Object();
    // console.log(losSpurs);

// // nameOfObject.nameOfProperty = value
//     losSpurs.coach = "Gregg";
//     losSpurs.mascot = "coyote";
//     losSpurs.fans = "the best";
// console.log(losSpurs);

// // bracket notation

    // var daMavs = {};

// // brackets and quotes
// //nameOfObject[nameOfProperty];

// daMavs["city"];
// daMavs["wins"] = 1;
// console.log(daMavs)
//
// var Federer = {
//     name: "Roger",
//     city: "Bern",
//     "number of times he's won opens": 15
// }
// console.log(Federer);


// //whats the difference between dot and bracket (array) notation?
// // bracket notation - quotes around the property name

// using bracket
//
// let bracketObj = {
//         cat: 'meow',
//     dog: 'woof',
// };
//
//     let dog = 'cat';
//     let sound = bracketObj[dog];
// console.log(sound);


// // TODO: create an empty 'yourFaveSportsTeam' object using object literals
// // TODO: let's add a 'city', 'coach', and 'sport' property to our 'team' object using dot
// // TODO: let's add 'numOfPlayers', 'numOfChampsWon', and 'isBestTeam' properties to our same 'teams' object using bracket notation
// // TODO: write a function that returns the sport and numOfPlayers from your 'team' object
//
//     var yourFaveSportsTeam = {};
//
//         yourFaveSportsTeam.city = "Dallas";
//         yourFaveSportsTeam.coach = "Jim";
//         yourFaveSportsTeam.sport = "football";
//         yourFaveSportsTeam.team = "Dallas Cowboys";
//
//         yourFaveSportsTeam[numOfPlayers] = 12;
//         yourFaveSportsTeam[numOfChampsWon] = 4;
//         yourFaveSportsTeam[isBestTeam] = True;
//
//
//
// console.log(yourFaveSportsTeam);
//
//         function theSports () {
//
//             return "numOfPlayers"
//         }
//
//         function teamData(obj){
//             let data1 = obj.sport;
//             let data2 = obj.numOfPlayers;
//             console.log('')
//         }
//

// // Accessing Information within Objects
// // DOT NOTATION

// // return just the value of the spurs coach

var losSpurs = {};
losSpurs.city = "San Antonio";
losSpurs.coach = "Gregg Pops";
losSpurs.sport = "basketball";
// console.log(losSpurs);

// console.log(losSpurs.coach);
// console.log(typeof losSpurs.city)l;

// // ARRAY NOTATION

// console.log('${losSpurs.coach}');
// console.log(losSpurs.coach);
// console.log(lossSpurs["coach"]);

// // Re-assigning values inside of objects
// losSpurs.coach = "Gregg";
// console.log(losSpurs);


// Nested Values

// var animals = ["dogs", "cats", "birds"];
// console.log(animals)
//
// var theSpurs = {
//     city: "SA",
//     coach: 'Gregg'
//     wins: 5,
//     players: ["one", "two", "tia duncan", "manu", "david robinson"],
//     playerInfo: {
//         duncan
//
// }

// // Assigning Functionality

// var laptop = {
//
//     color: 'space gray',
//     make: 'mac',
//     size: 13,
//
//     shutdown: function{
//         return "laptop is shutting down"
//     }
// }
//
// // // lets shut down our laptops off
// console.log(laptop.shutDown());
//
// // // turn your laptop back on
// laptop.turnOn = function (){
//     return "laptops is now starting"
// }
// console.log(laptop.turnOn()):
//
// console.log(laptop.turnOn());
// console.log(laptop);


//

// // THIS keyword


var laptop = {

    color: 'space gray',
    make: 'mac',
    size: 13,

    whatSize: function (){
        return 'A laptop is ${this.} inches wide';
    }
}


// car inches = laptop.size;
// console.log(laptop.whatSize(inches));

console.log(laptop.whatSize());


var theSpurs = {
    city: "SA",
    coach: 'gregg',
    wins: 5,
    players: ["one", "two", "tim duncan", "manu", "david robinson"],
    playerInfo: [
        {
            name: "Tim",
            age: 40,
            mvp: 3
        },
        {
            name: "manu",
            age: 38,
            mvp: 6
        }
    ],
    otherNBATeams: {
        Jazz: {
            city: "Salt Lake City",
            mascot: "Jazz Bear",
            champsWon: 0
        },
        Mavs: {
            city: "Dallas",
            mascot: "MavsMan & Champ",
            champsWon: 1
        },
        Pistons: {
            city: "Detroit",
            mascot: "Hooper the Horse",
            champsWon: 3
        }
    }
}
console.log(theSpurs.otherNBATeams.Mavs);
// console.log(theSpurs.playerInfo[0].age);
// console.log(theSpurs);
// TODO: using above nested object, log the mascot of the "otherNBATeams", change "manu's" name
//  from "manu" to "Ginobli", print out the 3rd element in the 'players' array, add another
//  'otherNBATeam' team object.


//


/** Mini Exercises */
/*  TODO: Create a zoo object that contains basic info about the zoo (name, city,
      isOpen, ranking, yearOpened), as
      well as, information about at least 5 different animals (think nested objects). For each
      Each animal must contain 3 identifiers (examples: hasFur, isMammal, animalSound, canFly,
       livingPlace). Each animal must also contain a method that returns the sound of that
        animal using the THIS keyword.
       hint: Each animal should have at least 5 properties (one of them being animalSound);
*/

    var zoo = {

        name: "zombie zoo",
        city: "zombie city",
        isOpen: "9am",
        ranking: "3of10",
        yearOpened: 2012


    }









