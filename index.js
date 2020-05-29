// JavaScript File
var ageGuess
function checkGuess () {
  ageGuess = document.getElementById("ageGuess").value;
  if (ageGuess == 14)
  {
    alert ("You guessed right!");
  }
  else if (ageGuess > 14)
  {
    alert ("You guessed to high. Please try again.");
  }
  else
  {
    alert ("You guessed to low. Please try again.");
  }
}