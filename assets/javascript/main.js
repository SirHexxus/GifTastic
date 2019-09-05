// Author: James Stacy
// Description: Logic For a Simple .gif Search and Display Application Using the GIPHY API
// Started: 8-30-2019
// Deployed: TBD

// Global Variable Declarations
var topics = [ "item1", "item2", "item3" ];

// - - - - - - - - - - - - - - - - - - - - - - - - -
// Function Definitions
//  // Create Function to dynamically add <button>'s based on 'topics' array to '#button-container'
    //  //  // empty out '#button-container'
    for (var i = 0; i < topics.length; i++){
        //  //  // create new <button>;
        //  //  // add btn class to new <button>
        //  //  // add data-value = topics[i];
        //  //  // add text = topics[i];
        //  //  // append new <button> to '#button-container'
    }

//  // Create Function to create full Query URL (pass in <button> data-value as arg)
    var endpoint = "";
    var apiKey = "";
    //  //  // return endpoint +  "" + apiKey + "" + data-value; 

//  // Create Function to make API call
    //  //  // ajax call to queryURL, method = "GET" 

//  // Create Function to populate '#gif-container' with returned gifs
var results = response.data;

          for (var i = 0; i < results.length; i++) {
            var gifDiv = $("<div>");

            var rating = results[i].rating;

            var p = $("<p>").text("Rating: " + rating);

            var personImage = $("<img>");
            personImage.attr("src", results[i].images.fixed_height.url);

            gifDiv.prepend(p);
            gifDiv.prepend(personImage);

            $("#gif-container").prepend(gifDiv);
          }
//  // 
var switchGifState = function() {
    var state = $(this).attr("data-state");
    switch (state) {
    case "still":
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
        break;
    case "animate":
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
        break;
    }
}

// - - - - - - - - - - - - - - - - - - - - - - - - -
// Main Logic
//  // On <button> click, retrieve .gifs via API
    //  //  // call createURL based on button click
    //  //  // pass return to callGiphy
    //  //  // pass return to showGifs

//  // On form submission, create a new button
    //  //  // new variable equals string from form
    //  //  // push new variable to topics array
    //  //  // call showButtons

//  // On '#clr-btn' click, clear '#gif-container'

//  // On .gif click, animate or stop animation
$(".gif").on("click", switchGifState);