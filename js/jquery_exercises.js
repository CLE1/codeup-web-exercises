"use strict";

$('#clickThis').click(
    function() {
        $(this).css('background-color', '#FF0');
    },
    function() {
        $(this).css('background-color', '#FFF');
    }
);
