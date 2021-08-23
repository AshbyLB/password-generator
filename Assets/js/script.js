
var generateBtn = document.querySelector("#generate");


function generatePassword() {

  var numbers = "0123456789";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCase = upperCase.toLowerCase();
  var special = "!@#$%^&*()_+~";
  var value = [];
  var possOutcome = "";
  var password = "";

  var passChoice = prompt("How many characters would you like the password to be.  Please choose between 8 and 128 characters in length.");
  while (passChoice < 8 || passChoice > 128) {
    passChoice = prompt("Please choose between 8 and 128 characters.");

  }

  var userUpperCase = confirm("Would you like uppercase letters?");
  if (userUpperCase) {
    var randomChoice = Math.floor(Math.random() * upperCase.length);
    var upperChoice = upperCase[randomChoice];
    value.push(upperChoice);
    possOutcome = possOutcome.concat(upperCase);
  }


  var userLowerCase = confirm("Would you like lowercase letters?");

  if (userLowerCase) {
    var randomChoice = Math.floor(Math.random() * lowerCase.length);
    var lowerChoice = lowerCase[randomChoice];
    value.push(lowerChoice);
    possOutcome = possOutcome.concat(lowerCase);
  }

  var userNumbers = confirm("Would you like numbers?");
  if (userNumbers) {
    var randomChoice = Math.floor(Math.random() * numbers.length);
    var numChoice = numbers[randomChoice];
    value.push(numChoice);
    possOutcome = possOutcome.concat(numbers);
  }


  var userSpecial = confirm("Would you like special characters?");
  if (userSpecial) {
    var randomChoice = Math.floor(Math.random() * special.length);
    var specialChoice = special[randomChoice];
    value.push(specialChoice);
    possOutcome = possOutcome.concat(special);
  }

  for (var i = 0; i < passChoice - value.length; i++) {
    var randomChoice = Math.floor(Math.random() * possOutcome.length);
    password += possOutcome[randomChoice];
  }

  password += value.join('');

  return password;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (password) {
    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
