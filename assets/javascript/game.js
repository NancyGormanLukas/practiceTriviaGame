$(document).ready(function() {
	
	var words = ['vikander', 'larson', 'dicaprio', 'rylance']; //words used in puzzle
	var targetWordArray;        // randomly selected word
	var targetWordString;
  var guess;
  var guessesArray = [];      // stored user incorrect guesses
  var numberOfGuesses;   // attempts (number of times a letter is chosen)
  var letterHolder;          // denoted by "_"- letters in words 
  													//before they are correctly guessed by user and displayed
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var correct = document.createElement;
  var shownumberOfGuesses = document.getElementById("numberOfGuesses");
  
  // This function will pick word
  function chooseWords () {
    var randomNumber = Math.floor((Math.random()*words.length));
  	targetWordArray = words[randomNumber].split(''); // vikander
  	targetWordString = words[randomNumber];
  	console.log('targetWordArray is ' + targetWordArray);
  	console.log('targetWordString is ' + targetWordString);
  	numberOfGuesses = targetWordString.length * 2;
  };

  chooseWords();




  //this function will create "_" instead of letters- from stack overflow- isn't working
  function lettersToUnderscore(){
  	letterHolder= targetWordString.replace(/[a-z]/gi, '_').split('');
  	console.log('letterHolder is ' + letterHolder);
  }

  lettersToUnderscore();


  //This function will record user guesses
  document.onkeyup = function(event) {
		
		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
		//console.log('userGuess is ' + userGuess);
    var beforeUserGuess = targetWordArray;
		for (var i = 0; i < targetWordArray.length; i++) {
			console.log('targetWordArray[i] is ' + targetWordArray[i]);
      if (targetWordArray[i] == userGuess ) {
      	//what to do when it matches
        letterHolder[i] = userGuess;
        //console.log('user guessed correct letter');
        //console.log(letterHolder);
        document.getElementById('spacebox').innerHTML = letterHolder;
      } 
    };
    
    if( beforeUserGuess === targetWordArray) {
    	console.log('if wrong guess');
    	numberOfGuesses = numberOfGuesses - 1;
    	console.log('numberOfGuesses is ' + numberOfGuesses);
    	guessesArray.push(userGuess);
    	console.log(guessesArray);
    	document.getElementById('lettersused').innerHTML = guessesArray;
      //guess.alphabet = "_";
      return;
    };
    // wordHolder = document.getElementById('onkeyup');
  }; // end onkeyup function
 
    //this function will determine if letter has been chosen before and ignore it if true
			

  //this function will determine if letter is in word or not 
	//true then gets applied, false then goes to "guesses display" 
	for (var i = 0; i < words.length; i++) {
    correct.alphabet
    // guess = document.createElement;
    // guess.setAttribute('guess');
    if (words[i] == "-") {
      guess = "-";
    } 
    else {
      guess = "_";
      // push("lettersused")
    }
  }; // end for loop


	function checkForLetters() {
		var letterHolder= Math.floor(words.length);
	}

  //?this function will decrease 1 from counter for letter guessed if new letter

  function decreaseCounter(){
  	if(guess= false){
  		numberOfGuesses--;
      console.log("number of guesses left " + numberOfGuesses);
    	//then nothing?
    	if(guess= true){

    	}
  	}
  }; // end decreaseCounter

  //this function will show user if word was guessed in allotted number of guesses 
	//and either: 1. say you won or 2. give correct word
	var comments = function () {
  shownumberOfGuesses.innerHTML = "You have " + guesses + " guesses";
  if (numberOfGuesses < 1) {
    shownumberOfGuesses.innerHTML = "Game Over";
  }
  for (var i = 0; i < guesses.length; i++) {
    if (counter + space == guesses.length) {
      shownumberOfGuesses.innerHTML = "You Win!";
      //this function will tally wins for user 
    }
  };
  comments();
  }
  return;
}); //end document ready function