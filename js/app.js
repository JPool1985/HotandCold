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
	$("#count").text(guessCount);
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
$("#guessButton").on("click",function(){
	if ($('#userGuess').val()!=''){
		if ($('#userGuess').val()!=''){
			if (isInt($('#userGuess').val())) {
				if (hasBeenGuessed($('#userGuess').val())){
					console.log($("#guessButton").val());
					console.log("guess button clicked");
					var listGuess = '<li>'+$("#userGuess").val()+'</li>'
					$("#guessList").append(listGuess);
					$('#userGuess').val('');
					$("#count").text(++guessCount);
					console.log('press enter');
				}
				else{
					$('#userGuess').val('');
					alert("You already entered that number!");
				}
			}
			else{
				$('#userGuess').val('');
				alert("You must enter a number!")
			}
		}else{
			alert("You must enter something into the input field!!!")
		}
	}
});
$("#guessButton").on("keyup",function(e){
	if (e.keyCode == 13) {
		if ($('#userGuess').val()!=''){
			if (isInt($('#userGuess').val())) {
				if (hasBeenGuessed($('#userGuess').val())){
					console.log($("#guessButton").val());
					console.log("guess button clicked");
					var listGuess = '<li>'+$("#userGuess").val()+'</li>'
					$("#guessList").append(listGuess);
					$('#userGuess').val('');
					$("#count").text(++guessCount);
					console.log('press enter');
				}
				else{
					$('#userGuess').val('');
					alert("You already entered that number!");
				}
			}
			else{
				$('#userGuess').val('');
				alert("You must enter a number!")
			}
		}else{
			alert("You must enter something into the input field!!!")
		}
	}
});
//Returns true if the value is a number; returns false if it is not.
function isInt(value) {
	return !isNaN(value) && 
	parseInt(Number(value)) == value && 
	!isNaN(parseInt(value, 10));
};
//Returns true if value exists inside of guestList array; returns false if not.
//*hint* lookup the jQuery function in array
function hasBeenGuessed(value){
	console.log($.inArray(value,guessList))
	if($.inArray(value,guessList)==-1){
		return false
	}else{
		return true
	}
}
//Tells user if guess is hot or cold towards the secretNumber also updates html if user guesses correctly. 
//This should update the html for all guesses; correct or incorrect.
//Adds value to user guess array.
function hotOrCold(){
	if(secretNumber == userGuess){
		winner();
	} else if(Math.abs(secretNumber - userGuess) < 10){
		userFeedback = 'hot';
	} else if(Math.abs(secretNumber - userGuess) < 20 && Math.abs(secretNumber - userGuess) > 9){
		userFeedback = 'warm';
	} else if(Math.abs(secretNumber - userGuess) < 30 && Math.abs(secretNumber - userGuess) > 19){
		userFeedback = 'cool';
	} else {
		userFeedback = 'cold';
	}
}
function winner(){
	userFeedback = 'You Won. Click new game to play again';
}
function showReg() {
    document.userFeedback("feedback").style.display = "";
}

//Generate random number between 1-100 *
//restart game clicking 'new game'*
//Number input erase*
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
