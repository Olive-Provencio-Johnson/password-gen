// Assignment Code
var generateBtn = document.querySelector("#generate");

var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var numbers = '1234567890';
var specialChar = '!@#$%^&*()_+=';

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//generate password function
function generatePassword() {
  var password = ''
  var tempCharacters = ''

  var pwLength = prompt('How many characters between 8 and 128 would you like your password to be?')

  while (pwLength < 8 || pwLength > 128) {
    alert('You choose a length between 8 and 128')

    pwLength = prompt('How many characters between 8 and 128 would you like your password to be?')
  }
//the following are used to ask the user for specific criteria that should be incldued. Each confirm is used to add or concat '+=' to the final string of characters. 
  var wantsUpper = confirm('Would you like uppercase letters?')

  if (wantsUpper) {
    tempCharacters += uppercase
    console.log(tempCharacters)
  }

  var wantsLower = confirm('Would you like Lowercase letters?')

  if (wantsLower) {
    tempCharacters += lowercase
    console.log(tempCharacters)
  }

  var wantsNumbers = confirm('Would you like numbers?')

  if (wantsNumbers) {
    tempCharacters += numbers
    console.log(tempCharacters)
  }

  var wantsSpecial = confirm('Would you like special characters?')

  if (wantsSpecial) {
    tempCharacters += specialChar
    console.log(tempCharacters)
  }
//this while loop is used to ensure that the user selects a criteria in case they select cancel for all criteria
  while (!wantsUpper && !wantsLower && !wantsNumbers && !wantsSpecial) {
    alert('You must choose at least one type of character!')
//the loop runs again as above
    wantsUpper = confirm('Would you like uppercase letters?')

    if (wantsUpper) {
      tempCharacters += uppercase
      console.log(tempCharacters)
    }

    wantsLower = confirm('Would you like Lowercase letters?')

    if (wantsLower) {
      tempCharacters += lowercase
      console.log(tempCharacters)
    }

    wantsNumbers = confirm('Would you like numbers?')

    if (wantsNumbers) {
      tempCharacters += numbers
      console.log(tempCharacters)
    }

    wantsSpecial = confirm('Would you like special characters?')

    if (wantsSpecial) {
      tempCharacters += specialChar
      console.log(tempCharacters)
    }

  }
//the characters from the selected criteria are added to the string, and then Math.floor(Math.Random) is used to randomize the selected characters into a final pw output with the correct number of password characters between 8 - 128
  for (var i = 0; i < pwLength; i++) {
    password += tempCharacters.charAt(Math.floor(Math.random() * tempCharacters.length))
  }

  return password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
