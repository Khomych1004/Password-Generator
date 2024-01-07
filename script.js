// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Get links to the element #passwordLength and #length
var slider = document.getElementById("passwordLength");
var output = document.getElementById("length");
// Display the default slider value
output.innerHTML = slider.value; 

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    output.innerHTML = this.value;
}

// Function to prompt user for password options
function getPasswordOptions() {
  // Get links to elements
  var lower = document.getElementById("lowercase");
  var upper = document.getElementById("uppercase");
  var num = document.getElementById("numeric");
  var special = document.getElementById("specialCharacters");

  // Write data from links to object
  var options = {
    lenth: slider.chek,
    charactertypes:{
      Lowercase: lower.checked,
      Uppercase: upper.checked,
      Numeric: num.checked,
      specialCharacters: special.checked
    }
  }

    return options;
}

// Function for getting a random element from an array
function getRandom(arr) {
  // Get a random index from the array
  var randomIndex = Math.floor(Math.random() * arr.length);
  // Return value at random index
  return arr[randomIndex];
}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);