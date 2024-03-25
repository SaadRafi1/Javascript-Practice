const num1 = 10;
const num2 = 5;
const num3 = 8;
if (num1 <= num2 && num1 <= num3) {
  if (num2 <= num3) {
    alert("Sorted numbers: " + num1 + ", " + num2 + ", " + num3);
  } else {
    alert("Sorted numbers: " + num1 + ", " + num3 + ", " + num2);
  }
} else if (num2 <= num1 && num2 <= num3) {
  if (num1 <= num3) {
    alert("Sorted numbers: " + num2 + ", " + num1 + ", " + num3);
  } else {
    alert("Sorted numbers: " + num2 + ", " + num3 + ", " + num1);
  }
} else {
  if (num1 <= num2) {
    alert("Sorted numbers: " + num3 + ", " + num1 + ", " + num2);
  } else {
    alert("Sorted numbers: " + num3 + ", " + num2 + ", " + num1);
  }
}
