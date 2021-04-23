(function () {
    "use strict"


    // var number = 1;
    //
    // while (number < 65536) {
    //     number = number *2;
    //     console.log("multiplying number" + number);
    //
    // }
    //
    //


//-------


    var allCones = Math.floor(Math.random() * 50) + 50;

    do {
        var sales = Math.floor(Math.random() * 5) + 1;

        console.log('just ${allCones} left to sell!');
        allCones = allCones - sales;
    } while (allCones >= 1);

    //-------------------
    // FOR LOOPS





})();