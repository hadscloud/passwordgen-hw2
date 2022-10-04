var generateBtn = document.querySelector("#generate");

var passwordCriteria = {
    length: "",
    uppercase: "",
    lowercase: "",
    specialCharacters: "",
    numeric: ""
    
};

var characterType = function () {
// prompts user to include uppercase letters
    passwordCriteria.uppercase = window.prompt("Would you like to include uppcase characters? Type yes or no")
    passwordCriteria.uppercase = passwordCriteria.uppercase.toLowerCase();
    if (passwordCriteria.uppercase === "yes") {
      passwordCriteria.uppercase = true;
    }
    else if (passwordCriteria.uppercase === "no") {
      passwordCriteria.uppercase = false;
    }
// prompts user to include lowercase letters
    passwordCriteria.lowercase = window.prompt("Would you like to include lowercase letters? Type yes or no")
    passwordCriteria.lowercase = passwordCriteria.lowercase.toLowerCase();
    if (passwordCriteria.lowercase === "yes") {
      passwordCriteria.lowercase = true;
    } 
    else if (passwordCriteria.lowercase === "no") {
      passwordCriteria.lowercase = false;
    }
// prompts user to include special characters 
    passwordCriteria.specialCharacters = window.prompt("Would you like include special characters? Type yes or no")
    passwordCriteria.specialCharacters = passwordCriteria.specialCharacters.toLowerCase();
    if (passwordCriteria.specialCharacters === "yes") {
      passwordCriteria.specialCharacters = true;
    }
    else if (passwordCriteria.specialCharacters === "no") {
      passwordCriteria.specialCharacters = false;
    }
  // prompts user to include numeric characters 
    passwordCriteria.numeric = window.prompt("Would you like to include numbers? Enter yes or no")
    passwordCriteria.numeric = passwordCriteria.numeric.toLowerCase();
    if (passwordCriteria.numeric === "yes") {
    passwordCriteria.numeric = true;
    }
    else if (passwordCriteria.numeric === "no") {
      passwordCriteria.numeric = false;
    }
    if (passwordCriteria.uppercase === false &&
      passwordCriteria.lowercase === false &&
      passwordCriteria.specialCharacters === false &&
      passwordCriteria.numeric === false ) {
        window.alert("You must choose at least one character type for your password.")
        charaterType();
      }

}

// generates password 
var generatePassword = function () {
  passwordCriteria.length = window.prompt("Please choose a length for your password from 8 to 128")
  passwordCriteria.length = parseInt(passwordCriteria.length);
      
  if (passwordCriteria.length < 8 || passwordCriteria.length > 128) {
  window.alert("You did not enter a valid length. Retry.");
        generatePassword();
      }
      
  else {
        window.alert("You have chosen a length of " + passwordCriteria.length );
      }

  window.alert("What kind character types would you like to use? Choose at least one.");

  characterType();


//criteria for making the password
  function createPassword() {
    var characters = "";
    if (passwordCriteria.uppercase = true) {
      characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (passwordCriteria.lowercase = true) {
      characters = characters + "abcdefghijklmnopqrstuvwxyz";
    }
    if (passwordCriteria.specialCharacters = true) {
      characters = characters + "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    }
    if (passwordCriteria.numeric = true) {
      characters = characters + "0123456789";
    }
    var result = "";
    var length = passwordCriteria.length;
    for (var i = 0, n = characters.length; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * n));
    }
    window.alert("Your new password is " + result);
    return result.join('');
  }

  createPassword();



};
// displays password (but doesnt work)
var generateBtn = document.querySelector('#generate');
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  return result;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
