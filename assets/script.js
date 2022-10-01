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


var generatePassword = function() {

    alert ("Please select  your password criteria on the following windows:");
    
var passwordLenght = Number(prompt ("Select the lengh of your password: \nPassword must be at least 8 characters long and no more than 128 characters long."));
  console.log(passwordLenght);    

 if (passwordLenght >= 8 &&  passwordLenght <= 128) {

      var upperCase = confirm ("Please comfirm if you would like to use UPPER CASE letters in your password.");
      var lowerCase = confirm ("Please confirm if you would like to use LOWER CASE letters in your password.");
      var special = confirm ("Please confirm if you would like to use SPECIAL characters in your password.");
      var numbers = confirm ("Please comfirm if you would like to use NUMBERS in your password.");

      console.log(upperCase);
      console.log(lowerCase);
      console.log(special);
      console.log(numbers);

if (upperCase) {
    
      upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

} else {

      upperCase = [];
}

if (lowerCase) {

      lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

} else {

      lowerCase = [];
}

if (special) {

      special = ["~","!","@","#","$","%","^","&","*","+","=","-","<",">"];

} else {

      special = [];

}

if (numbers) {

      numbers = ["1","2","3","4","5","6","7","8","9","0"];

} else {

      numbers = [];

 }

     
    } else {
        alert ("You must select a valid lenght!");
        return;
    }
    
  // Creates a pool of characters to pick from randomly

    var characters = lowerCase.concat(upperCase,numbers,special);
    console.log(characters);

    var passGen = '';
    for (var i = 0; i < passwordLenght; i++) {
      passGen += characters[Math.floor(Math.random() * characters.length)];
      console.log(passGen);
    }   


    return passGen;
   
}







