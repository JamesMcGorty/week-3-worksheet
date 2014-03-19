// JavaScript Document
//james mcgorty
//3/18/14
//group 1 tempature converter

// Get value from user
var enterNumber = prompt("please enter a tempature", "32.0f" );

// Split the value into  2 parts
var temp = parseFloat(enterNumber);
var symbol = enterNumber[enterNumber.length-1];
var result = "Invalid symbol entered";

// Determine which calculation to use based on the sysmbol
if (symbol == "f")
	result = (5 * (temp - 32) / 9) + " degrees celcius";
else if (symbol == "c")
	result = ((temp * 9 / 5) + 32) + " degrees Fahrenheit";

// Write out results
document.write("The temperature is " + result);
console.log("The temperature is " + result);
