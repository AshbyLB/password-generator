
var generateBtn = document.querySelector("#generate");


function generatePassword() {

  var passChoose = prompt("How many characteers would you like the password to be.  Please choose between 8 and 128 characters in length.");
  if (passChoice < 8 || passChoice > 128) {
    passChoice = prompt("Please choose between 8 and 128 characters.");
    return generatePassword();
  }

  
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



  if (userUpperCase) {
    var randomChoice = Math.floor(Math.random() * upperCase.length);
    var upperChoice = upperCase[randomChoice];
    value.push(upperChoice);
    console.log(upperChoice);
  }
  
  if (userLowerCase) {
    var randomChoice = Math.floor(Math.random() * lowerCase.length);
    var lowerChoice = lowerCase[randomChoice];
    value.push(lowerChoice);
    console.log(lowerChoice);
  }
  
  if (userNumbers) {
    var randomChoice = Math.floor(Math.random() * numbers.length);
    var numChoice = numbers[randomChoice];
    value.push(numChoice);
    console.log(numChoice);
  }
  
  if (userSpecial) {
    var randomChoice = Math.floor(Math.random() * special.length);
    var specialChoice = special[randomChoice];
    value.push(specialChoice);
    console.log(specialChoice);
  }
  
  for (var i = 0; i < randomChoice.length; i++){

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
