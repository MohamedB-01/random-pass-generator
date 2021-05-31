// Assignment Code
//DO NOT CHANGE THIS CODE
var generateBtn = document.querySelector("#generate");

// create variables
 

  // lowercase array
  var lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
  
  // uppercase array
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  
  // special characters array
  var specialChar = "!@#$%&*".split("");
  
  // numbers array
  var numArr = "0123456789".split("");
 
  // possible characters array
  possibleChar = [];
 
  // variable to hold confirm responses 
   var ucChoice = true ;
   
   var numChoice = true ;
   var specCharChoice = true ;

 

  // display confirms for all different character types (listed in README)
  function choices(){
 
    var ucChoice = confirm ("do you want password to contain upper case letters?");
    var numChoice = confirm ("do you want password to contain numbers?");
    var  specCharChoice = confirm ("do you want your password to contain special characters ?")
  
  
   // check IF the user answered true to any of the confirms, add that array to the possible character array 
    if (ucChoice ===true && numChoice === true && specCharChoice === true) {
      possibleChar = lowercase.concat(uppercase,numArr, specialChar);
    } else if (ucChoice === true && numChoice === true && specCharChoice === false){
      possibleChar = lowercase.concat(uppercase, numArr);
    } else if ( ucChoice === true && numChoice === false && specCharChoice === false) {
      possibleChar = lowercase.concat(uppercase);
    } else if ( ucChoice === false && numChoice=== true && specCharChoice===true) {
      possibleChar = lowercase.concat(numArr, specialChar);
    } else if (ucChoice === false && numChoice === false && specCharChoice=== true){
      possibleChar = lowercase.concat(specialChar);
    } else if ( ucChoice === true && numChoice === false && specCharChoice === true){
      possibleChar = lowercase.concat(uppercase, specialChar);
    } else if ( ucChoice === false && numChoice === true && specCharChoice === false){
      possibleChar = lowercase.concat(numChoice);
    } else {
      possibleChar = lowercase;
    }
   } ;

  


function generatePassword(){
  
  // create a variable that will hold the final password
  var password = [];
  
  // Display a prompt asking the user for password length
  var passwordLength = prompt ("please enter desired password lenght");
  
//  match edges cases - is a number && is >=8 , <=128
  
if (passwordLength >= 8 && passwordLength <= 128 && isNaN(passwordLength) == false) {
 choices();
  // want to create a loop for as long as passwordLength
  // for each iteration, select a random char out of the possible characters array and add it to the final password variable
  for (var i = 0; i < passwordLength; i++) {
    // random number var
    var randomNum = Math.floor(Math.random() * possibleChar.length );
    password +=  possibleChar[randomNum]; 
  }
 // return "Password"
 return password ;
  
}  else {
   alert("you must enter a number between 8 and 128");
  return password = [];
   };
  
};
  


// Write password to the #password input
/* DO NOT CHANGE THIS CODE!  This function is going to call your generatePassword() function and whatever is returned from that function will be put onto the page */
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// DO NOT CHANGE THIS CODE
generateBtn.addEventListener("click", writePassword);
