let val1 = prompt("Enter first value:");
let val2 = prompt("Enter second value:");
let val3 = prompt("Enter third value:");

if (val1 === val2 && val2 === val3) {
  console.log(30);
} else if (val1 === val2 || val1 === val3 || val2 === val3) {
  console.log(40);
} else {
  console.log(20);
}
