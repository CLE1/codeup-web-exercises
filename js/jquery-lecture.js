"use strict";

// tapping into objects


//syntax - select by tag name
// $("H1")

//syntax - select by ID
// $("#change-text")
// $("#change-text").hide();

//syntax - select by class
// $(".lead")
// .hide()
// $(".purple").hide();


// TODO:
//
// $("#all-caps").hide();
//
// $("span").hide();
//
// $("p").show()
//



//syntax - selecting children/parent/sibling elements
// console.log($('ul').children());
//
// console.log("add border class");
// $("#second").addClass("border");
// console.log("remove vorder class");
// $("#second").removeClass("border");

// $(".purple-par").setAttribute("class", "border");

// let purPara = $(".purple-par");
// purPara.attribute("class", "border");
//
// $("div").addClass("red");


//window.onload
//javascript
// do something when the window is loading
//** its going to wait for images

// window.onload = function() {
//     console.log(new Date());
//     console.log("hey window is done loading");
}

//document.ready
//jquery
//wont wait for images
// $(document).ready(function() {
//     console.log(new Date());
//     console.log("Hey the DOM is finished loading")
// })

// TODO:
//
// $(".pink").addClass("")
//
// window.onload = function (){
//     $(".pink").hide();
//     console.log("Pink is hidden")
// }

$(document).ready(function() {
    alert( 'The DOM has finished loading!' );
});