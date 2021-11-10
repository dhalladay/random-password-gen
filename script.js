//Assign generatePassword() function and add prompts
var generatePassword = function() {
  //create password variable to pass into html
  var password = "";
  //Ask if player wants to create password
  var confirmPass = window.confirm("Generate a new password?")
  if (confirmPass) {
    //Create a variable that will contain all characters requested by user
    var characterSet = function() {
      var character = "";
      var confirmAlpha = window.confirm("Include letters in your password?");
      var confirmNum = window.confirm("Include numbers in your password?");
      var confirmSym = window.confirm("Include symbols in your password?");
      
      if(confirmAlpha) {
        var alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      } else {
        var alpha = "";
      };
    
      if(confirmNum) {
        var numCon = "0123456789";
      } else {
        var numCon = "";
      };
      
      if(confirmSym) {
        var symbols = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
      } else {
        var symbols = ""
      };
      character = (alpha + numCon + symbols)
      return character;
    }
    
    // character();
    
    //create variable for password length between 8 and 128 characters in lenght
    var characterLength = function () {
      var length = "";
      
      while (length === "") {
        length = parseInt(window.prompt("How long would you like your password to be? Please select a number between 8-128", ""));
        
        if (length >= 8 && length <= 128) {
          return length;
          break;
        }
        else if (isNaN(length)) {
          parseInt(window.alert("That is not a number. Please choose a number from 8-128."))
          return characterLength();
        }
        else if (length < 8) {
          parseInt(window.alert("Your number " + length + " is less than 8. Please choose a number between 8-128."))
          return characterLength();
        }
        else {
          parseInt(window.prompt("Your number " + length + " is more than 128. Please choose a number between 8-128."))
          return characterLength();
        }
      };
      
      characterLength = length;
      
      // characterLength();
    }
    
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
  } 
  else {
    window.alert("A password will not be created.")
  }
  //create other variables needed to generate password
  var character = characterSet();
  var length = characterLength();
  console.log(character);
  console.log(length);
};

generatePassword();

