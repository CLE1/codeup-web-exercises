"use strict";

searchThis();
function searchThis (event) {
    document.getElementById("inputThis")
        .addEventListener('click', listener);
}
   function listener (e) {
    e.preventDefault()
    let inputText = document.getElementById("searchHere").value;
    let putText = document.getElementById("post-container");
    putText.innerText = inputText;
   }

   function styleText (text) {
    $(text).css("font-size", "200px")

   };

