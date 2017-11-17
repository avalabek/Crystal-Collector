$(document).ready(function(){
//variable to hold target--this will be random 19-120
var wins = "";
var losses = "";
var counter = 0;

var startGame;
var restartGame;
//restart game should hold number of wins/losses from befor
restartGame = startGame;
startGame = $(".btn").each(function(){

var targetNumber = "";
var random = Math.floor(Math.random() * 120) + 19;
var crystalRandom = Math.floor(Math.random()*12) + 1;
var crystalButton = $(".btn");

targetNumber = random

//to change span numberToCollect to show target number
$("#numberToCollect").text( targetNumber);

//something wrong: on first click gives random number, on subsequent clicks, it gives double random number
$(this).on("click", function() {
	counter += crystalRandom;
$("#score").text(counter);
console.log(crystalRandom);
	console.log("Your new score is: " + counter );

//change the alert below to replace the text in the span id winOrLose
	if (counter === targetNumber){
		$("#winOrLose").text("You win!").css("color","red");
		++wins;
		$("#wins").text(wins);
		
	} 
	else if (counter >= targetNumber){
		$("#winOrLose").text("You lose!Click here to play again.").css("color","blue");
		++losses;
		$("#losses").text(losses);

		$("#winOrLose").on('click', function(){
			// alert('Does this work?Need to make a function.');
			//here i am trying to call restart game what am i doing wrong; alert works fine
			// Why doesn't "restartGame();" work?"
			location.reload();
			//the above works, but deletes all wins. So reload is not the right way to do
		})
	}
crystalButton.attr("value", crystalRandom);

var crystalValue = ($(this).attr("value"));
crystalValue = parseInt(crystalValue);

counter+= crystalValue;



})
})
});



// // This time we increase the counter by *10* each time the user clicks.
//     counter += 10;

//     // We then output the new counter value each time the crystal is clicked.
//     alert("Your new score is: " + counter);
