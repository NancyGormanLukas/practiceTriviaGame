// This array holds the answers.
var words = ['vikander', 'larson', 'dicaprio', 'rylance'];

// This function will pick our word
function chooseWord () {
    
}

//indexOf() function 
document.onkeyup= function(){
var randomNumber = Math.floor((Math.random()*words.length)-1)
var randomWord = words[randomNumber]
	alert(randomWord)
}

 var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];

var 

  var words;              // Selected word
  var guess;             // Guess
  var guesses = [ ];      // Stored guesses
  var numberOfGuesses;     // Attempts
  var counter;           // Count correct guesses
  var space;              // Number of spaces in word '-'

  // Get elements
  var shownumberOfGuesses = document.getElementById("numberOfGuesses");
  
  // link spaces to number of letters in word??? of each? need to show spaces somehow
  var space= Math.floor(words.length);
  var wordHolder= word.length
    

  // way for player to make guesses
   result = function () {
    wordHolder = document.getElementById('onkeyup');
    correct = document.createElement;

    //how to put letters in spaces?

    for (var i = 0; i < word.length; i++) {
      correct.alphabet
      guess = document.createElement;
      guess.setAttribute('class', 'guess');
      if (word[i] == "-") {
        guess.alphabet = "-";
        space = 1;
      } else {
        guess.alphabet = "_";
      }

      guesses.onkeyup(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  }
  
  // Show lives- This looks right to me!!!! Where to put it?
   comments = function () {
    shownumberOfGuesses.innerHTML = "You have " + guesses + " guesses";
    if (lives < 1) {
      shownumberOfGuesses.innerHTML = "Game Over";
    }
    for (var i = 0; i < geusses.length; i++) {
      if (counter + space == guesses.length) {
        shownumberOfGuesses.innerHTML = "You Win!";
      }
    }
  }