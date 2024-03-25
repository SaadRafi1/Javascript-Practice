var num1 = prompt("Eter value 1:");
var num2 = prompt("Eter value 2:");
var num3 = prompt("Eter value 3:");
var num4 = prompt("Eter value 4:");
var num5 = prompt("Eter value 5:");

let largest = num1;
if (num2 > largest) {
  largest = num2;
}

if (num3 > largest) {
  largest = num3;
}

if (num4 > largest) {
  largest = num4;
}

if (num5 > largest) {
  largest = num5;
}
alert("Largest number is: " + largest);
