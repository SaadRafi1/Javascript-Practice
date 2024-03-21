var num = 13;

var user = parseInt(prompt("Enter the number:"));
var value;
if (user > 13) {
  value = (user - 13) * 2;
  console.log("The difference is " + value);
} else {
  console.log("The number was smaller then 13 :" + user);
}
