//create a function to generate the set of characters to be used
var characterSet = function() {
  //Create variables that will contain strings of characters if selected by user
  var character = "";
  var confirmLower = window.confirm("Include lower case letters in your password?");
  var confirmUpper = window.confirm("Include UPPER CASE letters in your password?");
  var confirmNum = window.confirm("Include numb3rs in your password?");
  var confirmSym = window.confirm("Include $ymbols in your password?");
  
  if(confirmLower) {
    var alphaLow = "abcdefghijklmnopqrstuvwxyz";
  } else {
    var alphaLow = "";
  };
  
  if(confirmUpper) {
    var alphaUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } else {
    var alphaUp = "";
  };
  
  if(confirmNum) {
    var numYes = "0123456789";
  } else {
    var numYes = "";
  };
  
  if(confirmSym) {
    var symbYes = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  } else {
    var symbYes = ""
  };

   //if no options selected alert user to pick one
  if(!confirmLower && !confirmUpper && !confirmNum && !confirmSym) {
    alert("You must select at least one option");
    return characterSet();
  };
  character = (alphaLow + alphaUp + numYes + symbYes)
  return character;
}
//create variable for password length between 8 and 128 characters in lenght
var characterLength = function () {
  var charLength = "";
  
  while (charLength === "") {
    charLength = parseInt(window.prompt("How long would you like your password to be? Please select a number between 8-128", ""));
      
    if (charLength >= 8 && charLength <= 128) {
      return charLength;
      break;
    }
    else if (isNaN(charLength)) {
      parseInt(window.alert("That is not a number. Please choose a number from 8-128."))
      return characterLength();
    }
    else if (charLength < 8) {
      parseInt(window.alert("Your number " + charLength + " is less than 8. Please choose a number between 8-128."))
      return characterLength();
    }
    else {
      parseInt(window.prompt("Your number " + charLength + " is more than 128. Please choose a number between 8-128."))
      return characterLength();
    }
  };
    
  characterLength = charLength;
};

//Assign generatePassword() function and add prompts
var generatePassword = function() {
  //Ask if player wants to create password
  var confirmPass = window.confirm("Generate a new password?")
  if (confirmPass) {
    //create password variable to pass into html
    var password = "";
    //create other variables needed to generate password
    var character = characterSet();
    var charLength = characterLength();
    //Update password with a random character
    for (var i = 0; i < charLength - 1; i++) {
      password += character.charAt(Math.floor(Math.random() * character.length));
    }
    return password;
  }
  else {
    window.alert("A password will not be created.")
  }
};

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);