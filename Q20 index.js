var value1 = parseInt(prompt("Enter value 1:"));
var value2 = parseInt(prompt("Enter value 2:"));
if ((value1 < 0 && value2 > 0) || (value1 > 0 && value2 < 0)) {
  console.log(true);
} else {
  console.log(false);
}
