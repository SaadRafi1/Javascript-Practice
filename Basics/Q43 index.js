var val1 = parseInt(prompt("Enter value 1:"));
var val2 = parseInt(prompt("Enter value 2:"));
var val3 = parseInt(prompt("Enter value 3:"));

if (val1 < 0 || val2 < 0 || val3 < 0) {
  console.log("You have entered a negative integer");
}
var rem1 = val1 % 10;
var rem2 = val2 % 10; // Corrected
var rem3 = val3 % 10; // Corrected

if (rem1 === rem2 && rem1 === rem3) {
  console.log(`${val1}, ${val2}, ${val3} have the same rightmost digit`);
} else {
  console.log("No, they do not have the same last digit");
}
