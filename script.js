// Assignment Code

var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","]","}","|","/",":",";","<",",",">",".","?"]
var numbers = ["0","1","2","3","4","5","6","7","8","9"]


var generateBtn = document.querySelector("#generate");

// Write password to the #password input

//Generating password
function generatePassword() {

  var finalPassword = "";
  var randomCharacters = [];
  var passwordLength = window.prompt("How many characters do you want? Choose between 8-128.")

  while (passwordLength < 8 || passwordlength > 128){
    var passwordLength = (window.prompt ("Please enter a number between 8 and 128"))
  }

  while(randomCharacters.length === 0){
    if(window.confirm("do you want numbers")){
    randomCharacters = randomCharacters.concat(numbers);
  } 
  if(window.confirm("do you want symbols")) {
    randomCharacters = randomCharacters.concat(symbols);
  } 
  if(window.confirm("do you want upper")){
    randomCharacters = randomCharacters.concat(upper);
  } 
  if(window.confirm("do you want lower")){
    randomCharacters = randomCharacters.concat(lower);
  }
}
 
  for(var i = 0; i < passwordLength; i++){
    finalPassword +- randomCharacters[Math.floor(Math.random() * randomCharacters.length)];
  }

  return finalPassword


}

function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



//below is all attempts :)

//   var passwordValid = true;
//   var passwordLength = prompt("How long do you want your password set between 8 and 128");
//   if ((passwordLength < 8) || (passwordLength > 128)) {
//     passwordValid = false; 
//   }
//   while(passwordValid === false) {
//     passwordLength = window.prompt("Please enter a valid number.")
//     if ((passwordLength >= 8) && (passwordLength <=128)) {
//       passwordValid = true;
//     }
//     if ((passwordLength < 8) || (passwordLength > 128)) {
//       passwordValid = false
//     }
//   }

//   var numbers = confirm("Do you want numbers in your password?");

//   var lowerCases = confirm("Do you want lowercases in your password?");

//   var upperCases = confirm("Do you want uppercases in your password?");

//   var special = confirm("Do you want special characters in your password?");

//   // this is a minimum count for numbers, lowerCases, upperCases & specialCharacters
//   var minimumCount = 0;


//   // Empty minimums for numbers, lowerCases, upperCases & specialCharacters

//   var minimumNumbers = "";
//   var minimumLowerCases = "";
//   var minimumUpperCases = "";
//   var minimumSpecialCharacters = "";


//   // Generator functions**
//   var functionArray = [
//     function getNumbers() {
//       return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
//     },

//     function getLowerCases() {
//       return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
//     },

//     function getUpperCases() {
//       return +String.fromCharCode(Math.floor(Math.random() * 26 + 65));
//     },

//     function getSpecialCharacters() {
//       return specialCharacters(Math.floor(Math.random() * specialCharacters.length));
//     }

//   ];

//   // Checks to make sure user selected ok for all and uses empty minimums from above

//   if (numbers === true) {
//     minimumNumbers = functionArray[0];
//     minimumCount++;

//   }

//   if (lowerCases === true) {
//     minimumLowerCases = functionArray[1];
//     minimumCount++;

//   }

//   if (upperCases === true) {
//     minimumUpperCases = functionArray[2];
//     minimumCount++;

//   }

//   if (special === true) {
//     minimumSpecialCharacters = functionArray[3];
//     minimumCount++;

//   }

//   // empty string variable for the for loop below
//   var randomPasswordGenerated = "";

//   // loop getting random characters
//   for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
//     var randomNumberPicked = Math.floor(Math.random() * 4);

//     randomPasswordGenerated += functionArray[randomNumberPicked]();

//   }

//   // to make sure characters are added to the password
//   randomPasswordGenerated += minimumNumbers;
//   randomPasswordGenerated += minimumLowerCases;
//   randomPasswordGenerated += minimumUpperCases;
//   randomPasswordGenerated += minimumSpecialCharacters;

// console.log(randomPasswordGenerated)
// 

//generator functions

// function getRandomLower(){
//   window.confirm("Do you want lowercase?")
//   var randomLower = Math.floor(Math.random()*lower.length);
// }

// function getRandomUpper(){
//   window.confirm("Do you want Uppercase?")
//   var randomUpper = Math.floor(Math.random()*upper.length);
// }

// function getRandomSymbol(){
//   window.confirm("Do you want Symbols?")
//   var randomSymbol = Math.floor(Math.random()*symbols.length);
// }

// function getRandomNumber(){
//   window.confirm("Do you want numbers?")
//   var randomNumber = Math.floor(Math.random()*numbers.length);
// }


