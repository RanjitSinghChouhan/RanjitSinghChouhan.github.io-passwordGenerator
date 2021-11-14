const resultDOM = document.getElementById('result');
const copybtnDOM = document.getElementById('copy');
const lengthDOM = document.getElementById('length');
const uppercaseDOM = document.getElementById('uppercase');
const lowercaseDOM = document.getElementById('lowercase');
const numbersDOM = document.getElementById('numbers');
const symbolsDOM = document.getElementById('symbols');
const generatebtn = document.getElementById('generate');
const form = document.getElementById('password-generator');

// Generating Character Codes For The Application 
const UPPERCASE_CODES = arrayFromLowToHigh(65, 90);
const LOWERCASE_CODES = arrayFromLowToHigh(97, 122);
const NUMBER_CODES = arrayFromLowToHigh(48, 57);
const SYMBOL_CODES = arrayFromLowToHigh(33, 47)
  .concat(arrayFromLowToHigh(58, 64))
  .concat(arrayFromLowToHigh(91, 96))
  .concat(arrayFromLowToHigh(123, 126));

// slider scale value
var slider = document.getElementById("myrange");
var output = document.getElementById("slidevalue");
output.innerHTML = slider.value;
  
slider.oninput = function() {
    output.innerHTML = this.value;
}

// Copy Password


// The Character Code Generating Function
function arrayFromLowToHigh(low, high) {
  const array = [];
  for (let i = low; i <= high; i++) {
    array.push(i);
  }
  return array;
}