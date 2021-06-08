(function() {
    "use strict";
    // TODO: create a JSON object about your favorite hobby. make sure to include at least one of every data type that can
    //  be accepted as values

    // {
    //     "workingOut": "making gainz",
    //     "numberOfWorkouts": 4,
    //     ""
    //
    //
    // },


    // TODO: using https://jsonplaceholder.typicode.com/ make an ajax request to the comments endpoint and console it.
    // TODO: make a POST request to the '/posts' endpoint, make sure to include any data required for that post to be made successfully
    // TODO: what status do you get back when making a GET request to: https://jsonplaceholder.typicode.com/cmments
    console.log($.ajax("https://jsonplaceholder.typicode.com/ "));

    $.ajax("https://jsonplaceholder.typicode.com/ ", {
        type: "POST",
        data: {
            name:     "Chris Espinoza",
        }
    });

    $.post("https://jsonplaceholder.typicode.com/posts", {
        name: "Chris Espinoza"
    })












});