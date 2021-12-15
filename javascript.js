// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {
  // prompt the user for characters to include in the final password
  // uppercase / lowercase / symbols / numbers
​  var useUppercase = window.confirm("Do you want to use Uppercase letters?");
  var useLowercase = window.confirm("Do you want to use Lowercase letters?");
  var useSymbols = window.confirm("Do you want to use Symbols letters?");
  var useNumbers = window.confirm("Do you want to use Numbers letters?");
​
  console.log("uppercase?", useUppercase);
  console.log("useLowercase?", useLowercase);
  console.log("useSymbols?", useSymbols);
  console.log("useNumbers?", useNumbers);
​// ask the user how long the password should be
var passwordLength = window.prompt("How long will the password be (8-100)?");
​
  console.log("passwordLength", passwordLength);
​
  // generate the password based on what the user chose
  // based on what the user chose we pick the required amount of characters from
  // a character container
​
  var uppercaseCharacters = "ABCD";
  var lowercaseCharacters = "abcd";
  var symbols = "!@#$";
  var numbers = "1234";
​
  var selectedCharacters = "";
​
  if (useUppercase)
    selectedCharacters = selectedCharacters + uppercaseCharacters;
​
  if (useLowercase)
    selectedCharacters = selectedCharacters + lowercaseCharacters;
​
  if (useSymbols) selectedCharacters = selectedCharacters + symbols;
​
  if (useNumbers) selectedCharacters = selectedCharacters + numbers;
​
  console.log(selectedCharacters);
​
  var finalPassword = ""
  
  // write a for loop that cycles from 0 to the expected length of the password and 
  // at every iteration of the loop add a random character from selectedCharacters
  // to the finalPassword
​
  return finalPassword;
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