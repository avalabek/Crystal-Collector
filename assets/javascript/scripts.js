$(document).ready(function() {
    // VARIABLES

    var wins = 0;
    var losses = 0;
    var counter = 0;
    var targetNumber = 0;

    // FUNCTIONS
    var startGame;
    var resetGame;


    startGame = function() {
        var random = Math.floor(Math.random() * 120) + 19;
        targetNumber = random;
        //to change span numberToCollect to show target number
        $("#numberToCollect").text(targetNumber);

        $(".btn").each(function() {

            var crystalRandom = Math.floor(Math.random() * 12) + 1;
            console.log("Crystal Random:", crystalRandom);

            $(this).attr("crystal-value", crystalRandom);
        });
    }
    resetGame = function() {
        wins = 0;
        losses = 0;
        counter = 0;

        $("#winOrLose").text("");

        startGame();
    }

    // EVENT LISTENERS
    $(".btn").on("click", function() {
        // what happens when a crystal is clicked
        var crystalValue = $(this).attr("crystal-value");
        //make the string into integer
        crystalValue = parseInt(crystalValue);

        // update counter by adding crystalValue s
        counter += crystalValue;

        // update counter on HTML
        $("#score").text(counter);

        // check win or loss
        if (counter === targetNumber) {
            $("#winOrLose").text("You win!").css("color", "blue");
            ++wins;
            $("#wins").text(wins);


            $("#winOrLose").on('click', function() {
                $("#score").text("");

                resetGame();
                // location.reload();
            })

        } else if (counter > targetNumber) {

            $("#winOrLose").text("You lose! Click here to play again.").css("color", "red");
            ++losses;
            $("#losses").text(losses);


            $("#winOrLose").on('click', function() {
                $("#score").text("");
                  resetGame();
                //location.reload();

            })
        }
    });
    //Now call the function to start the game
    startGame();
});