$(document).ready(function() {
    // VARIABLES
    //variable to hold target--this will be random 19-120
    var wins = 0;
    var losses = 0;
    var counter = 0;
    var targetNumber = 0;

    // FUNCTIONS
    var startGame;
    var restartGame;
    //restart game should hold number of wins/losses from befor

    startGame = function() {
        var random = Math.floor(Math.random() * 120) + 19;
        targetNumber = random;
        //to change span numberToCollect to show target number
        $("#numberToCollect").text(targetNumber);

        $(".btn").each(function() {

            var crystalRandom = Math.floor(Math.random() * 12) + 1;
            console.log("Crystal Random:", crystalRandom);
            //something wrong: on first click gives random number, on subsequent clicks, it gives double random number

            $(this).attr("crystal-value", crystalRandom);
        });
    }


    // EVENT LISTENERS
    $(".btn").on("click", function() {
        // what happens when crystal is clicked
        var crystalValue = $(this).attr("crystal-value");
        crystalValue = parseInt(crystalValue);

        // update counter
        counter += crystalValue;

        // update counter on HTML
        $("#score").text(counter);

        // check win or loss
        if (counter === targetNumber) {
            $("#winOrLose").text("You win!").css("color", "blue");
            ++wins;
            $("#wins").text(wins);

            $("#winOrLose").on('click', function() {
                startGame();
                // location.reload();
            })

        }
        //it is making me lose before I reach the target number	
        else if (counter > targetNumber) {
            $("#winOrLose").text("You lose! Click here to play again.").css("color", "red");
            ++losses;
            $("#losses").text(losses);

            $("#winOrLose").on('click', function() {
                // alert('Does this work?Need to make a function.');
                //here i am trying to call restart game what am i doing wrong; alert works fine
                // Why doesn't "startGame();" work?"
                // startGame();
                //TODO: make game restart need to add things to function like restart the counter
               location.reload();
                //the above works, but deletes all wins. So reload is not the right way to do
            })
        }
    });

    startGame();
});