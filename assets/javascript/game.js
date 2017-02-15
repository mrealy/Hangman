$(document).ready(function() {	
	var wordBank = ['bird', 'lizard', 'gorilla'];
	var winCounter = 0;
	var lossCounter = 0;
	var wrongGuesses = [];
	var numGuesses = 9;
	var cWord = '';
	var numBlanks = 0;
	var blankArray = [];

	console.log('original array: ' + wordBank);

	function startGame() {

		// Establish var blankArray and make it an empty array [x]
		// Define cWord with a random word from wordBank [x]
		// Delete the word that was stored in cWord from wordBank [x]
		// Create var numBlanks that is equal to the # of characters from the word in cWord [x]
		// For each character from cWord (numBlanks), use push method to add an underscore into var blankArray [x]
		// Push blankArray element into HTML to display on screen and use .join method to show blankArray into a string [x]

		numGuesses = 9;
		blankArray = [];
		cWord = '';
		wordBank = wordBank;

		// Pick random word from array wordBank and store it into var cWord
		// delete that word from the array so that it cannot be selected again
		cWord = wordBank[Math.floor(Math.random() * wordBank.length)];
		delete wordBank[wordBank.indexOf(cWord)];
		console.log('Generated word is ' + cWord + ' and the new array is ' + wordBank);
		
		// Makes numBlanks equal to the number of characters in cWord
		// and for each character pushes an underscore into var blankArray
		numBlanks = cWord.length;
		for (i = 0; i < numBlanks; i++) {
			//console.log('Letter in loop is ' + cWord.charAt(i));
			blankArray.push('_');
			//console.log('blankArray is currently ' + blankArray);
		}
		console.log('blankArray is currently ' + blankArray);
		document.getElementById("curWord").innerHTML = blankArray.join(' ');
	}
		
	function checkLetters(letter){
	/* 
	1. Compare the letter the user picks matches any of the letters of the word
	2. I want a conditional statement to determine if the letter the user picked is in the word. If so do something, if not do something else.
	3. If the user is wrong we want to decrease the numGuesses variable by one.
	*/
		
		var letterInWord = false;
		cWord = cWord;

		for (var i = 0; i < numBlanks; i++){
			if(cWord[i] === letter){
				letterInWord = true;
			}
		}

		if(letterInWord){
			for(i = 0; i < numBlanks; i++){
				if(cWord[i] === letter){
					blankArray[i] = letter;
					console.log('blankArray should have some letters: ' + blankArray);
					document.getElementById("curWord").innerHTML = blankArray.join(' ');
				}
			}

		} else {
			numGuesses --;
			wrongGuesses.push(letter);
		}	
	}

	function roundComplete(){
		/* 
		1. It's going to update the HTML with letters that are in the word.
		2. It's going to update the HTML with guesses we have left.
		3. It's going to update the HTML to show wrong guesses.
		4. It's going to determine whether the user won or lost.
		*/

		document.getElementById("guessesLeft").innerHTML = numGuesses;
		document.getElementById("wrongGuesses").innerHTML = wrongGuesses.join(' ');

		blankArrayWord = blankArray.join('');

		if (cWord === blankArrayWord) {
			winCounter ++;
			alert("You Win!");
			console.log(winCounter);
			document.getElementById("winCounter").innerHTML = winCounter;
			startGame();
		} else if(numGuesses === 0) {
			document.getElementById("lossCounter").innerHTML = lossCounter ++;
			document.getElementById("wrongGuesses").innerHTML = '';
			alert("You Lose!");
			startGame();
		}
	}

	document.onkeyup = function(event) {

		// put the letter the user presses into var keyPress
		// put keyPress into the checkLetters function
		// execute roundComplete function

		var keyPress = String.fromCharCode(event.keyCode).toLowerCase();
		console.log('Key ' + keyPress + ' was pressed.');
		checkLetters(keyPress);
		roundComplete();
	}

	startGame();

});
