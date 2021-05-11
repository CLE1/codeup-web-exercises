
(function() {
    "use strict"

    function informWhatKindOfDog() {
        return prompt("what kind of dog is it?");

    }

    console.log(getKindOfDog());

    fucntion
    getContactInfo()
    {
        return prompt("How do I contact you when I find the dog")
    }

    console.log(getContactInfo());

    function getDogName() {
        return prompt("what is your dog's name?");
    }

    console.log(getDogName());

    function getDogInfo() {
        var dogKind = getKindOfDog();
        var dogName = getDogName();
        var contactInfo = getContactInfo();

        alert("Time to search for this doggo");
        alert("I see a dog!")

        var kindOfDogSeen = getKindOfDog();

        var isTheLostDog = (kindOfDogSeen === dogKind) && confirm("Does dog respond to the name: " + dogName);

        if (isTheLostDog) {
            alert("Puts leash on " + dogName);
            alert("Time to call the owner!");
            alert("Calling: " + contactInfo);

        }


    }
}());