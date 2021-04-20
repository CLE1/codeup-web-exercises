(

    function(){

    "use strict";

        function getToDestination(age, isInsured, hasCar, canGetRideShare){
            var isLicensed = age >= 16;
            var isLegalDriver = isLicensed && isInsured;
            if (isLegalDriver && hasCar){
                console.log("Let's get in and go!");
            } else if(!isLegalDriver && canGetRideshare){
                console.log("Let's call a rideShare!");
            } else{
                console.log("I think my friend can give us a lift!");
            }
        }



    function canGetRideShare(moneyForRide, driversNear){

        var isMoneyForRide = true;
        var isDriversNear = true;

        if(moneyForRide && driversNear){
            console.log(canGetRideShare(isMoneyForRide, isDriversNear));

            return true;
        }

    }


    }



)()