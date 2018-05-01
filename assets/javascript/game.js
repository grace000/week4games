


//Define global variables 
var numberToReach = 0;
var guessedPattern = [];
var selectedNumber = [];
var playernumber = 0;
var barOne = Math.floor((Math.random() * 12) + 2);
var barTwo = Math.floor((Math.random() * 12) + 1);
var barThree = Math.floor((Math.random() * 12) + 1);
var barFour = Math.floor((Math.random() * 12) + 1);


//Function for selecting a random number for user to reach
$(document).ready(function() {

    var numberToReach = Math.floor(Math.random()*(120-19+1)+19)
    $("#number-to-reach").html(numberToReach);

	var lossCount = 0;
	$("#losscount").html(lossCount);

	var winCount = 0;
	$("#wincount").html(winCount);

//How to play popover
$(function() {
  $('.popbutton').popover({
  	placement:"right",
  	trigger:"hover",
  	html: true,
  	container:'body'

  })
});


//The flower bars need to have values and be displayed as buttons, but values hidden. The user needs to 
//click a series of flower bars to obtain the numberToReach.
$('[value="barOne"]').on("click",function() {
	guessedPattern.push(barOne);
	// console.log(guessedPattern.reduce(reducer));
	$("#demo").html(displayPlayerTotal());
	placeScore();
});

$('[value="barTwo"]').on("click",function() {
	guessedPattern.push(barTwo);
	$("#demo").html(displayPlayerTotal());
	placeScore();
});

$('[value="barThree"]').on("click",function() {
	guessedPattern.push(barThree);
	$("#demo").html(displayPlayerTotal());
	placeScore();
});

$('[value="barFour"]').on("click",function() {
	guessedPattern.push(barFour);
	$("#demo").html(displayPlayerTotal());
	placeScore();
});

// const reducer = (accumulator, currentValue) => accumulator + currentValue;

function getSum(total, num){
	return total + num;
}

function displayPlayerTotal(arr){
	playernumber = guessedPattern.reduce(getSum); 
	return playernumber;
}


function placeScore(){

//If the users pattern selection exceeds the goal number, the game will restart.
		if (playernumber > numberToReach) {
			lossCount++;
			$("#losscount").html(lossCount);
			
			var playAgain = confirm("Sorry, you reached: " + playernumber + ". You lose! Play again?")
				if (playAgain) {

					restartGame();
				}
				else {
					alert("Thanks for playing!");
				}
		}
		//The player wins when the player reaches the NumberToReach without exceeding the number.
		if (playernumber === numberToReach) {

		//Need to notify player of win.
			winCount++;
			$("#wincount").html(winCount);
			
			alert(playernumber + " You Win!");

		//Then start new game.
			restartGame();
		}
};

	
//Code reset after results.
function restartGame(){
	guessedPattern.length = 0;
	playernumber = 0;
	$("demo").html(playernumber);
	numberToReach = Math.floor(Math.random()*(120-19+1)+19)
    $("#number-to-reach").html(numberToReach);
};


});
