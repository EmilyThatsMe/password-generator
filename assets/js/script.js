// Assignment code here

// Password option arrays
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// prompt length of password
var generatePassword = function() {
  var lengthPrompt = window.prompt("How many characters would you like your password to have?");

// if empty, must provide answer
if (lengthPrompt === "" || lengthPrompt === null) {
  window.alert("You need to provide a valid answer! Please try again.");
}

// if answer is under 8 or over 128 then must try again
while(lengthPrompt <= 7 || lengthPrompt >= 129) {
  alert("Password must be between 8 and 128 characters. Please try again");
  var lengthPrompt = pompt("How many characters would you like your password to have?");
  prompt(lengthPrompt);
}

// ask for character types
var charConfirm = confirm("Would you like your password to contain special characters? Click OK for yes or cancel for no");
if (charConfirm === true) {
  alert("Your password will contain special characters");
}
var numberConfirm = confirm("Would you like your password to contain numbers? Click OK for yes or cancel for no");
if (numberConfirm === true) {
  alert("Your password will contain numbers");
}
var lowerConfirm = confirm("Would you like your password to contain lowercase letters? Click OK for yes or cancel for no");
if (lowerConfirm === true) {
  alert("Your password will contain lowercase letters");
}
var upperConfirm = confirm("Would you like your password to contain uppercase letters? Click OK for yes or cancel for no");
if (upperConfirm === true) {
  alert("Your password will contain uppercase letters");
}

// if they click cancel for each character type prompt to retry
if (charConfirm === false && numberConfirm === false && lowerConfirm === false && upperConfirm === false) {
  alert("password must contain at least one parameter")
}

// generate characters based on criteria
var passwordCharacter = [];

if (charConfirm) {
  passwordCharacter = passwordCharacter.concat(specialChar)
}
if (numberConfirm) {
  passwordCharacter = passwordCharacter.concat(number)
}
if (lowerConfirm) {
  passwordCharacter = passwordCharacter.concat(alphaLower)
}
if (upperConfirm) {
  passwordCharacter = passwordCharacter.concat(alphaUpper)
}
console.log(passwordCharacter)

// Produce randomized password at the length of characters the user chose

var randomPassword = ""

for(var i = 0; i < lengthPrompt; i++) {
  randomPassword = randomPassword + passwordCharacter[Math.floor(Math.random() * passwordCharacter.length)];
  console.log(randomPassword)
}

return randomPassword;


};



//PROVIDED CODE
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
