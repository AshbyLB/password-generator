// Assignment Code
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
console.log(lowerCase);
if (userUpperCase) {
  console.log(upperCase[Math.floor(Math.random() * upperCase.length)]);
}
function generatePassword() {
  if (userUpperCase) {
    console.log(upperCase[Math.floor(Math.random() * upperCase.length)]);
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
