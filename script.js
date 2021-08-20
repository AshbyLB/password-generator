
var generateBtn = document.querySelector("#generate");

var userUpperCase = confirm("Would you like uppercase letters?");
console.log(userUpperCase);

var userLowerCase = confirm("Would you like lowercase letters?");
console.log(userLowerCase);

var userNumbers = confirm("Would you like numbers?");
console.log(userNumbers);

var userSpecial = confirm("Would you like special characters?");
console.log(userSpecial);

var numbers = "0123456789";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = upperCase.toLowerCase();
var special = "!@#$%^&*()_+~";

var value = [];


function generatePassword() {

  if (userUpperCase) {
    var randomUp = Math.floor(Math.random() * upperCase.length);
    var upperChoice = upperCase[randomUp];
    value.push(upperChoice);
    console.log(upperChoice);
  }
  
  if (userLowerCase) {
    var randomLow = Math.floor(Math.random() * lowerCase.length);
    var lowerChoice = lowerCase[randomlow];
    value.push(lowerChoice);
    console.log(lowerChoice);
  }
  
  if (userNumbers) {
    var randomNum = Math.floor(Math.random() * numbers.length);
    var numChoice = numbers[randomNum];
    value.push(numChoice);
    console.log(numChoice);
  }
  
  if (userSpecial) {
    var randomSpe = Math.floor(Math.random() * special.length);
    var specialChoice = special[randomSpe];
    value.push(specialChoice);
    console.log(specialChoice);
  }
  return "FUN TIMES!";
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
