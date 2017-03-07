


//Define global variables 
var numberToReach = 0;
var guessedPattern = [];
var wins = 0;
var losses = 0;
var blueBar = 10;
var greenBar = 2;
var redbBar = 3;
var yellowBar = 1;
var selectedNumber = [];

//Function for selecting a random number for user to reach
$(document).ready(function() {

     var numberToReach = Math.floor(Math.random() * 100);
    $("#flowers").html(numberToReach);
});


//The flower bars need to have values and be displayed as buttons, but values hidden. The user needs to 
//click a series of flower bars to obtain the numberToReach.
$(".btn-bluebar").on("click",function() {
	blueBar++;
});

$(".btn-greenbar").on("click",function() {
	greenBar++;
});

$(".btn-redbar").on("click",function() {
	redBar++;
});

$(".btn-yellowbar").on("click",function() {
	yellowBar++;
});



   // Check if any button is clicked
      $(document).on("click", "button", function() {

        // Checks if it's a flower bar button 
        if ($(this).hasClass("flowerbar")) {

            // Then grab the value of the button clicked and build a string with it
            guessedPattern += $(this).attr("value") 
   			}
   			$("#guessedPattern").html(numberToReach);  
   			console.log(guessedPattern);
   		});

//Push the newly guessed patterns into the selectedNumber array.
this.guessedPattern.push(selectedNumber);
console.log(selectedNumber);

	//Each flower bar selection needs to be saved and number values that match
	//each bar should be added as a total in order of user selection. 
	//guessedPattern = parseInt(guessedPattern);
	function sum(arr){
   	var selectedNumber = 0;
   		for(var i=0; i < arr.length; i++) {
   		selectedNumber = selectedNumber + arr[i];
   	}
	console.log(selectedNumber);

   	};


		//If the users pattern selection exceeds the goal number the game will restart.
		if (this.guessedPattern > numberToReach) {
			alert("You lose!")
			this.restartGame();
		}
		//The player wins when the player reaches the NumberToReach without exceeding the number.
		if (this.guessedPattern === numberToReach) {

		//Need to notify player of win.
			alert("You Win!");

		//Then start new game.
			this.restartGame();
		}


//Code reset after results.


