// Assignment Code
var generateBtn = document.querySelector("#generate");

var specialCharacters = "@%+\\!#$^?)(}{][~-_.";
  
var numericCharacters = "0123456789";

var lowerCasedCharacters = "abcdefghijklmnopqrstuvwxyz";

var upperCasedCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

function generatePassword() {
  // prompt the user for characters to include in the final password
  // uppercase / lowercase / symbols / numbers
var useUppercase = window.confirm("Do you want to use Uppercase letters?");
  var useLowercase = window.confirm("Do you want to use Lowercase letters?");
  var useSymbols = window.confirm("Do you want to use Symbols letters?");
  var useNumbers = window.confirm("Do you want to use Numbers letters?");

  console.log("uppercase?", useUppercase);
  console.log("useLowercase?", useLowercase);
  console.log("useSymbols?", useSymbols);
  console.log("useNumbers?", useNumbers);

  // ask the user how long the password should be

var passwordLength = window.prompt("How long will the password be (8-100)?");

  console.log("passwordLength", passwordLength);

  // generate the password based on what the user chose
  // based on what the user chose we pick the required amount of characters from
  // a character container

  var selectedCharacters = "";

  if (useUppercase) selectedCharacters = selectedCharacters + upperCasedCharacters;

  if (useLowercase) selectedCharacters = selectedCharacters + lowerCasedCharacters;

  if (useSymbols) selectedCharacters = selectedCharacters + specialCharacters;

  if (useNumbers) selectedCharacters = selectedCharacters + numericCharacters;



  var finalPassword = createPassword(passwordLength, selectedCharacters);


  console.log(finalPassword);
  

 
  
  // write a for loop that cycles from 0 to the expected length of the password and 
  // at every iteration of the loop add a random character from selectedCharacters
  // to the finalPassword​
  return finalPassword;
}


function createPassword(passwordLength, selectedCharacters){
  console.log(passwordLength, selectedCharacters);
  var pass = "";
  for (var i= 0; i < passwordLength; i++) {
   var rand = Math.floor(Math.random()*selectedCharacters.length);
   console.log(rand);
   pass += selectedCharacters[rand];
  }
  console.log(pass);

  return pass;

}
//Collapse
// Write password to the #password input
function writePassword() {
  var password = generatePassword(); ; // 'new password'
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);