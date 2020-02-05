"use strict"; //Strict mode, all variables much be declared

//Function is loaded when the document is finished
$(document).ready(function() {

  //Handle button clicks
  $('.btn').on('click', function() {
    //Get the commands of the clicked buttons
    //Use let for block variables
    let buttonCommand = $(this).text();

    //If clear button is clicked
    if(buttonCommand == "C") {
      $("#input").empty();
      buttonCommand = "";
    }

    //Display numbers
    $("#input").append(buttonCommand);
  });


})
