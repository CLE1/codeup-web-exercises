(function () {
    let jqElements = $('.jqClass');
    let backgroundBlue = 'lightblue';
    let backgroundReset = '';

    function addClickEvents(elementsToBind, color1, color2) {
        let handlerBlueBckGnd = function () {
            elementsToBind.css('background-color', color1);
            $(this).css('background-color', color2);
        }
        elementsToBind.click(handlerBlueBckGnd);
    }

    addClickEvents(jqElements, backgroundReset, backgroundBlue);
    addClickEvents($(".card"), "", "red");
    //make sure the DOM is loaded first
    document.addEventListener("DOMContentLoaded", function () {
        addListeners();
    });

    //parent method for adding all listeners
    function addListeners() {
        //get the elements to add listener and change image
        let cardContainers = Array.from($(".col-md-3"));
        addEvents(cardContainers, 'image/jazz-music-rubber-duck.jpg', 'mouseover');
        addEvents(cardContainers, 'image/question.png', 'mouseout');
    }

    //add mouseover/mouseout events to all selected elements
    function addEvents(cardContainers, imgPath, listenerType) {
        cardContainers.forEach((cc) => {
            let card = cc;
            //create listener which will call function change the image
            let listener = function (event) {
                let cardImg = card.querySelector(".card .card-img-top");
                changeImage(cardImg, imgPath);
            };
            cc.addEventListener(listenerType, listener);
        });
    }

    //actual function to swap images
    function changeImage(card, imgPath) {
        card.setAttribute('src', imgPath);
    }

    $('#submitBtn').click(
        function () {
            $('#override-bootstrap').css('background-color', '#ff0000');
        });

// $(document).ready() < pass in a function to the ready() method , when the dom is fully loaded,
// go ahead and execute the function being passed in
//    Q: when the dom is fully loaded, do x ... $(document).ready( function(){... the x part goes in here..})
//     $(document).ready(function ())
//     $('#card-text').click(
//         function () {
//             $('this').css('background-color', '#ff0000');
//         });


// vanilla plain javascript function review - function structure - passing in functions as arguments to other functions

//     // function addTwoNums(a,b){
//     return a + b;
// }
    // // addTwoNums(5,2); // 7
    // // addTwoNums(2,4) // 6
    //
    // function subtractsFromHundred(rslt){
    //     return 100 - rslt;
    // }
    //
    // subtractsFromHundred(function(a, b){
    //     return a + b
    // } ); 
    //


    // function refresh() {
    //     location.reload();
    // }

    //.click() method is just a function, but the click function takes in another function as an argument
    // function click(function(){
    // ... do something when an element on the dom (browser) is clicked
    // });

    // selectors is just a way using jquery to grab an element from the dom
    //once you have elements selected, you can chain jquery methods to them

    // $('#main-title').click(function () {
    //     $('this').css('font-size', '*2'); // where you're gonna do the task
    // });

//    1. know how to select ANY element from the dom, starting point: $("")
//    2. know how to find jquery methods that do certain things (.click(), .hover(), toggleClass(param1, param2), addClass() ...
//    3. on those methods, do they need to accept a function as an argument
//     4. think about what's being affected and do you need to 'grab' that from the dom again

    // click on button then change background color of body
    // $("button").click(function(){
    // ... result of the button click (the event) goes here
    //     $("body").css("background-color", "blue");
    // })


// TODO: Add a data-attribute to each card container (.col-md-3)
//  -> Give that data-attribute a value of 1-4 (moving top to bottom in the html)
//  -> Now, when a user hovers over one of the .col-md-3 containers, you should replace the text inside #card-title with the data-attribute value
//  -> When the user hovers out, the data-attribute value should be replaced with the original text ("Card")

    // $('.col-md-3').hover(
    //     function () {
    //         $(this).css('data-attribute', '1');
    //     },
    //     function () {
    //         $(this).css('background-color', '#FFF');
    //     }
    // );

    // TODO: When an li with the .list-group-item class is clicked, replace the text with the same text, but uppercased
    //  -> ALSO, change the background of the li to a new color
    //  -> When the li is clicked again, reset the li background color to its original color
    //  -> Don't worry about changing the text back


    //HARD WAY
    // $('.list-group-item').click(function () {
    //     $(this).css('text-transform', 'uppercase').css('background-color', 'orange');
    //     $(this).off()
    //     $('.list-group-item').click(function () {
    //         $(this).css('background-color', '');
    //     });
    // });
    //
    // $('.list-group-item').click(function () {
    //     $(this).css('background-color', '');
    //     $(this).off()
    //     $('.list-group-item').click(function () {
    //         $(this).css('text-transform', 'uppercase').css('background-color', 'orange');
    //     });
    // });






})();