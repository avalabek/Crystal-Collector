$(document).ready(function(){

//variable to hold wins and losses
var wins = 0;
var losses = 0;
//variable to hold target--random 19-120
var targetNumber = "";
//to change span numberToCollect to show target number on page
//this is line 22 in other version
$("#numberToCollect").text( targetNumber);

var random = Math.floor(Math.random() * 120) + 19;
var crystalRandom = Math.floor(Math.random()*12) + 1;
var crystalButton = $(".btn");



var counter = 0;
$(".btn").on("click", function() {
	counter += 10;
$("#score").text(counter);
	console.log("Your new score is: " + counter );

//change the alert below to replace the text in the span id winOrLose
	if (counter === targetNumber){
		$("#winOrLose").text("You win!").css("color","red");
		++wins;
		$("#wins").text(wins);
		console.log(wins);
	} 
	else if (counter >= targetNumber){
		$("#winOrLose").text("You lose!").css("color","blue");
		++losses;
		$("#losses").text(losses);
		console.log(losses);
	}


//when this is moved to the bottom, it works, but the target number doesn't
crystalButton.attr("value", crystalRandom);

var crystalValue = ($(this).attr("value"));
crystalValue = parseInt(crystalValue);

counter+= crystalValue;

targetNumber = random








});
})
// // This time we increase the counter by *10* each time the user clicks.
//     counter += 10;

//     // We then output the new counter value each time the crystal is clicked.
//     alert("Your new score is: " + counter);
