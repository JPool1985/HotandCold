//Holds the user guess count. Should be incremented by 1 each time the user guesses a number.
var guessCount=0;
//Holds the user guesses. Should be reset on new game function. New user guesses should be pushed to this array. 
//[] Means empty array
var guessList=[];
//Holds the secret number.
var secretNumber;
$(document).ready(function(){
newGame();
});
function newGame(min,max){
	guessCount=0;
	guessList=[];
	$("#guessList").empty();
	$("#feedback").text('Make your Guess!');
	$("#count").text('0');
	secretNumber=Math.floor(Math.random()*(100-1+1)+1);
	console.log(secretNumber);
};
$(".new").on("click",function(){
	newGame();
	});
//*hint* Create two event listeners for the guessButton and return key on guest input.
//Both listeners will call the guess function. 
//Both listeners will call the guess function using the guess input value

//Called by the button click or return key on guess input. This function is going to validate 
//the user guess value to be an int and will validate that the user has not guessed the number before.
function guess(userGuess){

}
//Returns true if the value is a number; returns false if it is not.
function isInt(value){

}
//Returns true if value exists inside of guestList array; returns false if not.
//*hint* lookup the jQuery function in array
function hasBeenGuessed(value){

}
//Tells user if guess is hot or cold towards the secretNumber also updates html if user guesses correctly. 
//This should update the html for all guesses; correct or incorrect.
function hotOrCold(value){

}

//Generate random number between 1-100 
//restart game clicking 'new game'
//Number input erase
//Function for hot, cold, warm, cool, very cold, very hot based on number input and randomly generated number
//Function for a win by selecting correct number
//function to display and track number of guesses
/*--- Display information modal box ---*/
	$(".what").click(function(){
		$(".overlay").fadeIn(1000);

	});

	/*--- Hide information modal box ---*/
	$("a.close").click(function(){
		$(".overlay").fadeOut(1000);
	});
